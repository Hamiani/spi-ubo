import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import _get from "lodash/get";

import { update, getOne } from "../../../store/actions/student";

import { getSexes as sexes } from "../../../store/actions/teacher";
import { getPays as pays } from "../../../store/actions/teacher";

import View from "./view";
import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Update = () => {
  const { id, ...params } = useParams();
  const dispatch = useDispatch();
  const { goBack } = useHistory();
  const sexesQuery = useSelector((state) => state.teacher.getSexes);
  const paysQuery = useSelector((state) => state.teacher.getPays);
  const updateQuery = useSelector((state) => state.student.update);
  const studentQuery = useSelector((state) => state.student.getOne);
  const onGoBack = () => goBack();

  useEffect(() => {
    dispatch(sexes());
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
        paysQuery,
        updateQuery,
        studentQuery,
        onUpdate,
        onGoBack,
        params
      }}
    />
  );
};

export default Update;
