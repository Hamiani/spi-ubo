import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getOne, remove } from "../../../store/actions/promotion";

import View from "./view";

const Detail = ({ onGoBack, filter }) => {
  const dispatch = useDispatch();
  const promotionQuery = useSelector((state) => state.promotion.getOne);

  const onRemove = (data) =>
    dispatch(
      remove(
        data,
        () => {},
        () => {}
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
