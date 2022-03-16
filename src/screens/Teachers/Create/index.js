import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, get } from "../../../store/actions/teacher";
import { getTypes as types } from "../../../store/actions/teacher";
import { getPays as pays } from "../../../store/actions/teacher";
import { getSexes as sexes } from "../../../store/actions/teacher";

import View from "./View";
import { DEFAULT_MESSAGES, TYPES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

const Create = ({ handleClose }) => {
  const dispatch = useDispatch();
  const createQuery = useSelector((state) => state.teacher.create);
  const typesQuery = useSelector((state) => state.teacher.getTypes);
  const paysQuery = useSelector((state) => state.teacher.getPays);
  const sexesQuery = useSelector((state) => state.teacher.getSexes);

  useEffect(() => {
    dispatch(types());
  }, [dispatch]);

  useEffect(() => {
    dispatch(pays());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sexes());
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
        createQuery,
        onCreate,
        handleClose,
        typesQuery,
        paysQuery,
        sexesQuery,
      }}
    />
  );
};

export default Create;
