import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getOne, remove } from "../../../store/actions/promotion";
import { PATHS } from "../../../utils/constants";

import View from "./view";

const Detail = () => {
  const { anneeUniversitaire, codeFormation } = useParams();
  const dispatch = useDispatch();
  const { goBack, push } = useHistory();
  const promotionQuery = useSelector((state) => state.promotion.getOne);

  const onGoBack = () => goBack();
  const onRemove = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      remove(
        data,
        () => {
          push(PATHS.PROMOTIONS.LIST);
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );
  const onShowFormation = (id) => push(`${PATHS.FORMATIONS.LIST}/${id}`);
  const onShowTeacher = (id) => push(`${PATHS.TEACHERS.LIST}/${id}`);
  useEffect(() => {
    dispatch(getOne({ codeFormation, anneeUniversitaire }));
  }, [dispatch, codeFormation, anneeUniversitaire]);

  return (
    <View
      {...{
        promotionQuery,
        onGoBack,
        onRemove,
        onShowFormation,
        onShowTeacher,
      }}
    />
  );
};

export default Detail;
