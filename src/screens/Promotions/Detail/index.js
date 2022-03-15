import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getOne } from "../../../store/actions/promotion";

import View from "./view";

const Detail = ({ onGoBack, filter }) => {
  const dispatch = useDispatch();
  const promotionQuery = useSelector((state) => state.promotion.getOne);

  useEffect(() => {
    dispatch(getOne({ ...filter }));
  }, [dispatch, filter]);

  return (
    <View
      {...{
        promotionQuery,
        onGoBack,
      }}
    />
  );
};

export default Detail;
