import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import get from "lodash/get";

import { getOne } from "../../../store/actions/promotion";
import {
  update,
  calculateEtd,
  cleanEtdCalculationError
} from "../../../store/actions/ue";
import { DEFAULT_MESSAGES, PATHS, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

import View from "./view";

const Detail = () => {
  const filter = useParams();
  const { goBack, push } = useHistory();
  const dispatch = useDispatch();
  const promotionQuery = useSelector((state) => state.promotion.getOne);
  const onGoBack = () => goBack();
  const onShowTeacher = (id) => push(`${PATHS.TEACHERS.LIST}/${id}`);

  const onUpdateUe = (data) => {
    dispatch(
      update(
        data,
        () => {
          openNotification({
            type: TYPES.SUCCESS,
            message: "Unité d'enseignement modifiée avec succès"
          });
          dispatch(getOne({ ...filter }));
        },
        (errors) =>
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + get(errors, "message", ""),
            duration: 0
          })
      )
    );
  };

  const onCalculateEtd = (query) => dispatch(calculateEtd(query));
  const onCleanEtdError = (query) => dispatch(cleanEtdCalculationError());
  const calculateEtdQuery = useSelector((state) => state.ue.calculateEtd);

  useEffect(() => {
    dispatch(getOne({ ...filter }));
  }, [dispatch, filter]);

  return (
    <View
      {...{
        promotionQuery,
        onGoBack,
        onShowTeacher,
        onUpdateUe,
        onCalculateEtd,
        calculateEtdQuery,
        onCleanEtdError
      }}
    />
  );
};

export default Detail;
