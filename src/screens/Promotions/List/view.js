import React from "react";
import { Col, Card, Row, Divider, Button, Avatar, Badge, Tag } from "antd";
import { IoSchoolSharp } from "react-icons/io5";
import get from "lodash/get";
import { EyeOutlined } from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

const actions = ({ onShow, filter }) => [
  <Button
    onClick={() => onShow(filter)}
    icon={<EyeOutlined />}
    className="edit_button"
  >
    Afficher
  </Button>,
];
const View = ({ promotionsQuery, onShow, onCreate }) => {
  const { idle, data, loading, errors } = promotionsQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  return (
    <div className="container__antd p-top-20">
      <div className="head_bloc">
        <h1 className="h1">LES PROMOTIONS</h1>
        <Button type="link" className="link_button" onClick={onCreate}>
          Ajouter Promotion
        </Button>
      </div>
      <Divider />
      <Row justify="center" align="middle" gutter={16}>
        {data.map((promotion, index) => (
          <Col span={6} key={index}>
            <Card
              title={
                <div className="text-center">
                  <Badge
                    status="processing"
                    size="default"
                    count={promotion.nbMaxEtudiant}
                  >
                    <Avatar
                      icon={<IoSchoolSharp />}
                      shape="circle"
                      size="large"
                    />
                  </Badge>
                </div>
              }
              actions={actions({ filter: get(promotion, "id"), onShow })}
            >
              <Row justify="space-between">
                <Col>Année universitaire</Col>
                <Col>
                  <Tag className="tag" color="#419197">
                    {get(promotion, "id.anneeUniversitaire")}
                  </Tag>
                </Col>
              </Row>
              <Row justify="space-between" className="p-top-10">
                <Col>Formation</Col>
                <Col>
                  <Tag className="tag" color="#419197">
                    {get(promotion, "id.codeFormation")}
                  </Tag>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default View;
