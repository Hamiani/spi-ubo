import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _get from "lodash/get";
import { useHistory } from "react-router-dom";

import { get as formations } from "../../../store/actions/formation";
import { get as promotions } from "../../../store/actions/promotion";
import { get as teachers } from "../../../store/actions/teacher";
import { getSalles as salles } from "../../../store/actions/promotion";
import { create } from "../../../store/actions/promotion";

import View from "./view";

import { DEFAULT_MESSAGES, PATHS, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Create = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const formationsQuery = useSelector((state) => state.formation.get);
  const teacherQuery = useSelector((state) => state.teacher.get);
  const createQuery = useSelector((state) => state.promotion.create);
  const sallesQuery = useSelector((state) => state.promotion.getSalles);

  const onCreate = (data) =>
    dispatch(
      create(
        data,
        () => {
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
          push(PATHS.HOME);
          dispatch(promotions());
        },
        (errors) =>
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
            duration: 0
          })
      )
    );

  const onRetourClick = () => push(PATHS.HOME);

  useEffect(() => {
    dispatch(formations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(teachers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(salles());
  }, [dispatch]);

  return (
    <View
      {...{
        teacherQuery,
        formationsQuery,
        onCreate,
        createQuery,
        sallesQuery,
        onRetourClick,
      }}
    />
  );
};

export default Create;
