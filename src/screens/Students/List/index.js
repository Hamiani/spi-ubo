import React from "react";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../../utils/constants";

import View from "./view";

const List = ({ data }) => {
  const { push } = useHistory();

  const onShow = (id) => push(`${PATHS.ETUDIANTS.LIST}/${id}`);

  return <View {...{ data, onShow }} />;
};
export default List;
