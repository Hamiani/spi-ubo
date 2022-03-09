import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Button, Result } from "antd";

import { PATHS } from "../../utils/constants";

const Unknown = () => {
  const { push } = useHistory();
  return (
    <Row justify="center" align="middle">
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button className="back_button" onClick={() => push(PATHS.HOME)}>
            BACK TO HOME
          </Button>
        }
      />
    </Row>
  );
};

export default Unknown;
