import React from "react";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../../utils/constants";

import View from "./view";

const List = ({ data }) => {    

    const { push } = useHistory();

    
    const onShow = (no_Etudiant) => push(`${PATHS.ETUDIANTS.LIST}/${no_Etudiant}`);
    
    

    return <View {...{ data, onShow }} />;
}
export default List;
