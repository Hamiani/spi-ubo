import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypes as types,
  getPays as pays,
  getSexes as sexes,
  get as teachers,
  getOne,
  update,
} from "../../../store/actions/teacher";
import View from "./view";

import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Create = ({ id, onGoBack }) => {
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
          onGoBack();
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
          dispatch(teachers());
        },
        () => {
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR,
          });
        }
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
