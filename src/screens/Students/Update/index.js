import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _get from "lodash/get";
import {
  getFormations as formations,
  getPays as pays,
  getSexes as sexes,
  get as students,
  getOne,
  update,
} from "../../../store/actions/student";
import View from "./view";

import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";



const Update = ({ id, onGoBack }) => {
  const dispatch = useDispatch();
  const updateQuery = useSelector((state) => state.student.update);
  const formationsQuery = useSelector((state) => state.student.getFormations);
  const paysQuery = useSelector((state) => state.teacher.getPays);
  const sexesQuery = useSelector((state) => state.teacher.getSexes);
  const studentQuery = useSelector((state) => state.student.getOne);

  useEffect(() => {
    dispatch(formations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(pays());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sexes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOne(id));
  }, [id, dispatch]);

  const onUpdate = (data) =>
    dispatch(
      update(
        data,
        () => {
          onGoBack();
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
          dispatch(students());
        },
        (errors) =>
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
          })
      )
    );

  return (
    <View
      {...{
        updateQuery,
        onUpdate,
        onGoBack,
        formationsQuery,
        paysQuery,
        sexesQuery,
        studentQuery,
      }}
    />
  );
};

export default Update;
