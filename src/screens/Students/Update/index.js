import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import _get from "lodash/get";

import { update, getOne } from "../../../store/actions/student";

import { getSexes as sexes } from "../../../store/actions/teacher";
import { getPays as pays } from "../../../store/actions/teacher";
import { get as formations } from "../../../store/actions/formation";

import View from "./view";
import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Update = ({ handleClose }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { push, goBack } = useHistory();
  const sexesQuery = useSelector((state) => state.teacher.getSexes);
  const formationQuery = useSelector((state) => state.formation.get);
  const paysQuery = useSelector((state) => state.teacher.getPays);
  const updateQuery = useSelector((state) => state.student.update);
  const studentQuery = useSelector((state) => state.student.getOne);
  const onGoBack = () => goBack();
  useEffect(() => {
    dispatch(sexes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(formations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(pays());
  }, [dispatch]);

  useEffect(() => {
    dispatch(pays());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch]);

  const onUpdate = (data) =>
    dispatch(
      update(
        { id, ...data },
        () => {
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS
          });
          onGoBack();
        },
        (errors) =>
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
            duration: 0
          })
      )
    );

  return (
    <View
      {...{
        sexesQuery,
        formationQuery,
        paysQuery,
        updateQuery,
        studentQuery,
        handleClose,
        onUpdate,
        onGoBack
      }}
    />
  );
};

export default Update;
