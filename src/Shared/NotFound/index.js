import React from "react";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import "./style.css";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="notFound">
      <Card title={<h1 className='text-center'>Page Not Found</h1>}>
        <Button className="text-center" type="link" onClick={() => history.push(PATHS.HOME)}>
          Go back to home
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
