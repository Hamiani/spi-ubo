import React from "react";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../../utils/constants";

import View from "./view";

const List = ({ data }) => {    

    const { push } = useHistory();

    
    const onShow = ({ code_Formation, code_ue }) => push(`${PATHS.UES.LIST}/${code_Formation}/${code_ue}`);


    return <View {...{ data, onShow }} />;
}
export default List;

List.defaultProps = {
  data: [],
  type: DEFAULT,
  onShow: () => {},
  onShowTeacher: () => {},
  onShowUeDetail: () => {},
};

List.prototypes = {
  data: PropTypes.object.isRequired,
  onShowTeacher: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};
