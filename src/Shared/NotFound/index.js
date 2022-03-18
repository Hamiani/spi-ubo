import React from "react";
import { Button, Card, Result } from "antd";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { PATHS } from "../../utils/constants";
import "./style.css";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="notFound">
      <Card title={<h1 className="text-center">Page non trouvée</h1>}>
        <Result
          status="404"
          title="404"
          subTitle="Désolé, la page que vous avez visité n'existe pas."
          extra={
            <Button
              className="text-center back_button"
              onClick={() => history.push(PATHS.HOME)}
            >
              <ArrowLeftOutlined />
              Retour
            </Button>
          }
        />
      </Card>
    </div>
  );
};

export default NotFound;
