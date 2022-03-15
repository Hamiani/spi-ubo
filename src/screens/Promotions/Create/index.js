import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { get as formations } from "../../../store/actions/formation";
import { get as teachers } from "../../../store/actions/teacher";
import { getSalles as salles } from "../../../store/actions/promotion";
import { create } from "../../../store/actions/promotion";

import View from "./view";
import { PATHS } from "../../../utils/constants";

const Create = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const formationsQuery = useSelector((state) => state.formation.get);
  const teacherQuery = useSelector((state) => state.teacher.get);
  const onPromotionsClick = () => push(PATHS.PROMOTIONS.LIST);
  const createQuery = useSelector((state) => state.promotion.create);
  const sallesQuery = useSelector((state) => state.promotion.getSalles);

  const onCreate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      create(
        data,
        () => {
          onPromotionsClick();
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );

  useEffect(() => {
    dispatch(formations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(teachers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(salles());
  }, [dispatch]);

  return (
    <View
      {...{
        teacherQuery,
        onPromotionsClick,
        formationsQuery,
        onCreate,
        createQuery,
        sallesQuery,
        handleClose,
      }}
    />
  );
};

export default Create;
