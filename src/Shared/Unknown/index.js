import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Button, Result } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { PATHS } from "../../utils/constants";

const Unknown = () => {
  const { push } = useHistory();
  return (
    <Row justify="center" align="middle">
      <Result
        status="500"
        title="500"
        subTitle="Désolé, quelque chose s'est mal passé."
        extra={
          <Button className="back_button" onClick={() => push(PATHS.HOME)}>
            <ArrowLeftOutlined />
            Retour
          </Button>
        }
      />
    </Row>
  );
};

export default Unknown;
