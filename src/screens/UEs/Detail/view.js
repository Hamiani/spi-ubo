import React from "react";
import get from "lodash/get";

import { Card, Row, Col, Divider, Popconfirm, Button, message } from "antd";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import { capitalizeFirstLetter } from "../../../utils/helpers";

const Detail = ({ title, content, length = 1 }) => (
  <Col span={length}>
    <h3 className="fw-700">{title}</h3>
    <div className="copying_bloc">
      <h4 className="fw-500">{content}</h4>
    </div>
  </Col>
);

const View = ({ ueQuery, onGoBack }) => {
  const { idle, data, loading, errors } = ueQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const ueTopItems = [
    {
      title: "Code unité d'enseignement",
      content: get(data, "id.code_Ue"),
      length: 7,
    },
    {
      title: "Code formation",
      content: get(data, "id.code_Formation"),
      length: 7,
    },
    {
      title: "Désignation",
      content: get(data, "designation"),
      length: 7,
    },
  ];
  const ueSecondItems = [
    {
      title: "nombre d'heure cours magistraux",
      content: get(data, "nbh_Cm")  + " h",
      length: 5,
    },
    {
      title: "nombre d'heure travaux pratique",
      content: get(data, "nbh_Tp")  + " h",
      length: 5,
    },
    {
      title: "nombre d'heure travaux dérigés",
      content: get(data, "nbh_Td")  + " h",
      length: 5,
    },
    {
      title: "nombre d'heure ETD",
      content: get(data, "nbh_Etd")  + " h",
      length: 5,
    },
  ];
  const ueThirdItems = [
    {
      title: "Nom",
      content: get(data, "enseignant.nom").toUpperCase(),
      length: 8,
    },
    {
      title: "Prénom",
      content: capitalizeFirstLetter(get(data, "enseignant.prenom")),
      length: 8,
    },
  ];
  const ueBottomItems = [
    {
      title: "Description",
      content: get(data, "description"),
      length: 24,
    },
  ];

  return (
    <div className="container__antd">
      <Col span={24}>
        <div className="m-top-10" />
        <div>
          <Card className="card">
            <div justify="space-between">
              <div className="head_bloc">
                <h1 className="h1">DÉTAILS DE L'UNITÉ D'ENSEIGNEMENT</h1>
                <div className="button_bloc_teacher">
                  <Button className="back_button" onClick={onGoBack}>
                    <ArrowLeftOutlined />
                    Retour
                  </Button>
                  <Button
                    className="create_button"
                    onClick={() => console.log("modifier")}
                  >
                    <EditOutlined />
                    Modifier
                  </Button>
                  <Popconfirm
                    placement="topRight"
                    title={
                      "Êtes-vous sûr de vouloir supprimer cet enseignant ?"
                    }
                    onConfirm={() => console.log("supprimer")}
                    okText="Oui"
                    cancelText="Annuler"
                  >
                    <Button className="delete_button">
                      <DeleteOutlined />
                      Supprimer
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </div>
            <Divider />
            <Row type="flex" justify="space-between" gutter={[2, 20]}>
              {ueTopItems.map(({ title, content, length }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  length={length}
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between" gutter={[2, 20]}>
              {ueSecondItems.map(({ title, content, length }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  length={length}
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="start" gutter={[2, 20]}>
              {ueThirdItems.map(({ title, content, length }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  length={length}
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between" gutter={[2, 20]}>
              {ueBottomItems.map(({ title, content, length }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  length={length}
                />
              ))}
            </Row>
          </Card>
        </div>
      </Col>
    </div>
  );
};

export default View;
