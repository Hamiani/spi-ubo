import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../../store/actions/teacher";
import { getTypes as types } from "../../../store/actions/teacher";
import { getPays as pays } from "../../../store/actions/teacher";
import { getSexes as sexes } from "../../../store/actions/teacher";

import View from "./View";

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

  const onCreate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      create(
        data,
        () => {
          onSuccessCallBack();
          handleClose();
        },
        () => onErrorCallBack()
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
