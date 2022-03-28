import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import { getOne } from "../../../store/actions/promotion";
import { PATHS } from "../../../utils/constants";

import View from "./view";

const Detail = () => {
  const filter = useParams();
  const { goBack, push } = useHistory();
  const dispatch = useDispatch();
  const promotionQuery = useSelector((state) => state.promotion.getOne);
  const onGoBack = () => goBack();
  const onShowTeacher = (id) => push(`${PATHS.TEACHERS.LIST}/${id}`);
  useEffect(() => {
    dispatch(getOne({ ...filter }));
  }, [dispatch, filter]);

  return (
    <View
      {...{
        promotionQuery,
        onGoBack,
        onShowTeacher,
      }}
    />
  );
};

export default Detail;
