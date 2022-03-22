import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import _get from "lodash/get";
import {
  getTypes as types,
  getPays as pays,
  getSexes as sexes,
  get as teachers,
  getOne,
  update,
} from "../../../store/actions/teacher";
import View from "./view";

import { DEFAULT_MESSAGES, PATHS, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Create = () => {
  const { id } = useParams();
  const { push, goBack } = useHistory();
  const onGoBack = () => goBack();
  const dispatch = useDispatch();
  const updateQuery = useSelector((state) => state.teacher.update);
  const typesQuery = useSelector((state) => state.teacher.getTypes);
  const paysQuery = useSelector((state) => state.teacher.getPays);
  const sexesQuery = useSelector((state) => state.teacher.getSexes);
  const teacherQuery = useSelector((state) => state.teacher.getOne);

  useEffect(() => {
    dispatch(types());
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
          push(PATHS.TEACHERS.LIST);
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
          dispatch(teachers());
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
        typesQuery,
        paysQuery,
        sexesQuery,
        teacherQuery,
      }}
    />
  );
};

export default Create;
