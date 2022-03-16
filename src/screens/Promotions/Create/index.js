import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get as formations } from "../../../store/actions/formation";
import { get as promotions } from "../../../store/actions/promotion";
import { get as teachers } from "../../../store/actions/teacher";
import { getSalles as salles } from "../../../store/actions/promotion";
import { create } from "../../../store/actions/promotion";
import _get from "lodash/get";

import View from "./view";

import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Create = ({ handleClose }) => {
  const dispatch = useDispatch();

  const formationsQuery = useSelector((state) => state.formation.get);
  const teacherQuery = useSelector((state) => state.teacher.get);
  const createQuery = useSelector((state) => state.promotion.create);
  const sallesQuery = useSelector((state) => state.promotion.getSalles);

  const onCreate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      create(
        data,
        () => {
          handleClose();
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
          dispatch(promotions());
        },
        (errors) => {
          console.log("errors", errors);
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
          });
        }
      )
    );

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
        handleClose,
      }}
    />
  );
};

export default Create;
