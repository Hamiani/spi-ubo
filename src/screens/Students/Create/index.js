import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSexes as sexes } from "../../../store/actions/teacher";
import { getPays as pays } from "../../../store/actions/teacher";
import { get as formations } from "../../../store/actions/formation";

import View from "./view";

const Create = ({ handleClose }) => {
  const dispatch = useDispatch();
  const sexesQuery = useSelector((state) => state.teacher.getSexes);
  const formationQuery = useSelector((state) => state.formation.get);
  const paysQuery = useSelector((state) => state.teacher.getPays);

  useEffect(() => {
    dispatch(sexes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(formations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(pays());
  }, [dispatch]);

  return <View {...{ sexesQuery, formationQuery, paysQuery, handleClose }} />;
};

export default Create;
