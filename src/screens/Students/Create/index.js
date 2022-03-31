import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { create, get } from "../../../store/actions/student";

import { getSexes as sexes } from "../../../store/actions/teacher";
import { getPays as pays } from "../../../store/actions/teacher";
import { get as formations } from "../../../store/actions/formation";

import View from "./view";
import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";
import _get from "lodash/get";

const Create = ({ handleClose }) => {
  const dispatch = useDispatch();
  const sexesQuery = useSelector((state) => state.teacher.getSexes);
  const formationQuery = useSelector((state) => state.formation.get);
  const paysQuery = useSelector((state) => state.teacher.getPays);
  const createQuery = useSelector((state) => state.student.create);

  useEffect(() => {
    dispatch(sexes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(formations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(pays());
  }, [dispatch]);


  const onCreate = (data) =>
    dispatch(
      create(
        data,
        () => {
          handleClose();
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
          dispatch(get());
        },
        (errors) =>
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
            duration: 0,
          })
      )
    );

  return <View {...{ sexesQuery, formationQuery, paysQuery, handleClose, onCreate, createQuery }} />;
};

export default Create;
