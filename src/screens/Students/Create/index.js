import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { create } from "../../../store/actions/student";

import {
  getSexes as sexes,
  getPays as pays
} from "../../../store/actions/teacher";
import { getOne } from "../../../store/actions/promotion";

import View from "./view";
import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";
import _get from "lodash/get";

const Create = ({ handleClose }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const sexesQuery = useSelector((state) => state.teacher.getSexes);
  const paysQuery = useSelector((state) => state.teacher.getPays);
  const createQuery = useSelector((state) => state.student.create);

  useEffect(() => {
    dispatch(sexes());
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
            message: DEFAULT_MESSAGES.SUCCESS
          });
          dispatch(getOne(params));
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
        handleClose,
        onCreate,
        createQuery,
        params
      }}
    />
  );
};

export default Create;
