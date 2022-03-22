import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import { getOne } from "../../../store/actions/promotion";

import View from "./view";

const Detail = () => {
  const filter = useParams();
  const { goBack } = useHistory();
  const dispatch = useDispatch();
  const promotionQuery = useSelector((state) => state.promotion.getOne);
  const onGoBack = () => goBack();

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
