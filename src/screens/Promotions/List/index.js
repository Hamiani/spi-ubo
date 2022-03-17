import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { get, changeProcess } from "../../../store/actions/promotion";
import { openNotification } from "../../../utils/helpers";
import { TYPES, DEFAULT_MESSAGES, PATHS } from "../../../utils/constants";

import View from "./view";

const List = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const promotionsQuery = useSelector((state) => state.promotion.get);
  const processQuery = useSelector((state) => state.promotion.changeProcess);

  const onChangeProcess = (data) => {
    dispatch(
      changeProcess(
        data,
        () => {
          dispatch(get());
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
  };

  const onClickCreate = () => {
    console.log("create clicked!");
    push(PATHS.PROMOTIONS.CREATE);
  };

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return (
    <View
      {...{ promotionsQuery, onChangeProcess, processQuery, onClickCreate }}
    />
  );
};

export default List;
