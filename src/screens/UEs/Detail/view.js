import React from "react";

import { Card, Row, Col, Divider, Popconfirm, Button, message } from "antd";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

const Detail = ({ title, content, length = 1 }) => (
  <Col span={length}>
    <h3 className="fw-700">{title}</h3>
    <div className="copying_bloc">
      <h4 className="fw-500">{content}</h4>
    </div>
  </Col>
);

const View = () => {
  const ueItems = [
    {
      title: "Code unité d'enseignement",
      content: "code UE",
      length: 7,
    },
    {
      title: "Code formation",
      content: "M2DOSI",
      length: 7,
    },
    {
      title: "Désignation",
      content: "Désignation M2DOSI",
      length: 7,
    },
    {
      title: "nombre d'heure cours magistraux",
      content: "42 h",
      length: 5,
    },
    {
      title: "nombre d'heure travaux pratique",
      content: "42 h",
      length: 5,
    },
    {
      title: "nombre d'heure travaux dérigés",
      content: "42 h",
      length: 5,
    },
    {
      title: "nombre d'heure ETD",
      content: "42 h",
      length: 5,
    },
    {
      title: "Nom",
      content: "SALIOU",
      length: 8,
    },
    {
      title: "Prénom",
      content: "Philippe",
      length: 8,
    },
    {
      title: "Description",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      length: 24,
    },
  ];

  const ueTopItems = [
    {
      title: "Code unité d'enseignement",
      content: "code UE",
      length: 7,
    },
    {
      title: "Code formation",
      content: "M2DOSI",
      length: 7,
    },
    {
      title: "Désignation",
      content: "Désignation M2DOSI",
      length: 7,
    },
  ];
  const ueSecondItems = [
    {
      title: "nombre d'heure cours magistraux",
      content: "42 h",
      length: 5,
    },
    {
      title: "nombre d'heure travaux pratique",
      content: "42 h",
      length: 5,
    },
    {
      title: "nombre d'heure travaux dérigés",
      content: "42 h",
      length: 5,
    },
    {
      title: "nombre d'heure ETD",
      content: "42 h",
      length: 5,
    },
  ];
  const ueThirdItems = [
    {
      title: "Nom",
      content: "SALIOU",
      length: 8,
    },
    {
      title: "Prénom",
      content: "Philippe",
      length: 8,
    },
  ];
  const ueBottomItems = [
    {
      title: "Description",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
                  <Button
                    className="back_button"
                    onClick={() => console.log("go back!")}
                  >
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
