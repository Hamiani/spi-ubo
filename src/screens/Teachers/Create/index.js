import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, get } from "../../../store/actions/teacher";
import View from "./View";
import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Create = ({ handleClose }) => {
  const dispatch = useDispatch();
  const createQuery = useSelector((state) => state.teacher.create);

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
        () => {
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR,
          });
        }
      )
    );

  return <View {...{ createQuery, onCreate, handleClose }} />;
};

export default Create;
