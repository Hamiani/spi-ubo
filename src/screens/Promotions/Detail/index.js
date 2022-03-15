import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getOne, remove } from "../../../store/actions/promotion";
import { openNotification } from "../../../utils/helpers";
import { TYPES, DEFAULT_MESSAGES } from "../../../utils/constants";

import View from "./view";

const Detail = ({ onGoBack, filter }) => {
  const dispatch = useDispatch();
  const promotionQuery = useSelector((state) => state.promotion.getOne);

  const onRemove = (data) =>
    dispatch(
      remove(
        data,
        () => {
          onGoBack();
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
        },
        () => {
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR,
          });
        }
      )
    );

  useEffect(() => {
    dispatch(getOne({ ...filter }));
  }, [dispatch, filter]);

  return (
    <View
      {...{
        promotionQuery,
        onGoBack,
        onRemove,
      }}
    />
  );
};

export default Detail;
