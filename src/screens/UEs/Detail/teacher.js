import React from "react";
import get from "lodash/get";

import { Card, Row, Col, Divider, Button, Popover } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import { capitalizeFirstLetter } from "../../../utils/helpers";

import "./style.css";

const heurePopover = (content) => <p>{content}</p>;

const Detail = ({ title, content, length = 1, popover = null }) => (
  <Col span={length}>
    {popover ? (
      <Popover content={heurePopover(popover)} placement="right">
        <Button type="text" className="popover_button" size="large">
          <h3 className="fw-700">{title}</h3>
        </Button>
      </Popover>
    ) : (
      <h3 className="fw-700">{title}</h3>
    )}
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
      title: "Code de l'unité d'enseignement",
      content: get(data, "id.code_Ue"),
      length: 7
    },
    {
      title: "Code formation",
      content: get(data, "id.code_Formation"),
      length: 7
    },
    {
      title: "Désignation",
      content: get(data, "designation"),
      length: 7
    }
  ];
  const ueSecondItems = [
    {
      title: "Nombre d'heures CM",
      popover: "Nombre d'heures cours magistraux",
      content: get(data, "nbh_Cm") + " h",
      length: 15
    },
    {
      title: "Nombre d'heures TP",
      popover: "Nombre d'heures travaux pratiques",
      content: get(data, "nbh_Tp") + " h",
      length: 15
    },
    {
      title: "Nombre d'heures TD",
      popover: "Nombre d'heures travaux dérigés",
      content: get(data, "nbh_Td") + " h",
      length: 15
    },
    {
      title: "Equivalent travaux dirigés",
      content: get(data, "nbh_Etd") + " h",
      length: 15
    }
  ];
  const ueThirdItems = [
    {
      title: "Enseignant responsable",
      content:
        get(data, "enseignant.nom").toUpperCase() +
        " " +
        capitalizeFirstLetter(get(data, "enseignant.prenom")) +
        " | " +
        get(data, "enseignant.email_Ubo"),
      length: 24
    },
    {
      title: "Semestre",
      content: get(data, "semestre"),
      length: 24
    },
    {
      title: "Description",
      content: get(data, "description"),
      length: 24
    }
  ];

  return (
    <div className="container__antd p-top-20">
      <Col span={24}>
        <Card className="card">
          <div justify="space-between">
            <div className="head_bloc">
              <h1 className="h1">
                DÉTAILS DE L'UNITÉ D'ENSEIGNEMENT :
                {" " + get(data, "id.code_Ue")}
              </h1>
              <Button className="back_button" onClick={onGoBack}>
                <ArrowLeftOutlined />
                Retour
              </Button>
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

          <Row type="flex">
            <Col span={10}>
              <Row type="flex" justify="space-between" gutter={[2, 20]}>
                {ueSecondItems.map(
                  ({ title, content, length, popover }, index) => (
                    <Detail
                      key={index}
                      title={title}
                      content={content}
                      length={length}
                      popover={popover}
                    />
                  )
                )}
              </Row>
            </Col>
            <Divider type="vertical" className="divider_height" />
            <Col span={10}>
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
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};

export default View;
