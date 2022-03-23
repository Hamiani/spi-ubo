import React from "react";
import get from "lodash/get";
import isNil from "lodash/isNil";
import { Card, Row, Col, Divider, Popconfirm, Button, message, Collapse, Tag } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { removeSpace } from "../../../utils/helpers";
import { SEXES } from "../../../utils/constants";
import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

import List from "../../UEs/List";
import "./style.css";

const { Panel } = Collapse;

const Detail = ({ title, content, toCopy = false, length = 1 }) => (
  <Col xs={24} sm={24} md={12} lg={24 / length} xl={24 / length}>
    <h3 className="fw-700">{title}</h3>
    <div className="copying_bloc">
      <h4 className="fw-500">{content}</h4>
      {toCopy && (
        <CopyToClipboard
          text={content}
          onCopy={() => message.success("Text copié")}
        >
          <AiOutlineCopy className="cursor_pointer copying_icon" size={20} />
        </CopyToClipboard>
      )}
    </div>
  </Col>
);

const View = ({ teacherQuery, onRemove, onUpdate, onGoBack }) => {
  const { idle, data, loading, errors } = teacherQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const teacherTopItems = [
    {
      title: "Prénom",
      content: get(data, "prenom"),
      toCopy: true,
    },
    {
      title: "Nom",
      content: get(data, "nom"),
      toCopy: true,
    },
    {
      title: "Sexe",
      content: get(SEXES, `${get(data, "sexe", "")}.value`, ""),
    },
  ];

  const teacherThirdItems = [
    {
      title: "Email Personnel",
      content: !isNil(get(data, "email_Perso")) ? (
        get(data, "email_Perso")
      ) : (
        <p>
          <i>Non renseigné</i>
        </p>
      ),
      toCopy: !isNil(get(data, "email_Perso")),
    },
    {
      title: "Email UBO",
      content: get(data, "email_Ubo"),
      toCopy: true,
    },
  ];
  const teacherFourthItems = [
    {
      title: "Mobile",
      content: removeSpace(get(data, "mobile", "")),
    },
    {
      title: "Téléphone",
      content: removeSpace(get(data, "telephone", "")),
    },
  ];
  const teacherSecondItems = [
    {
      title: "Type",
      content: get(data, "type"),
    },
  ];

  const teacherFifthItems = [
    {
      title: "Adresse",
      content: get(data, "adresse"),
      toCopy: true,
    },
  ];

  const teacherBottomItems = [
    {
      title: "Code postal",
      content: get(data, "code_Postal"),
    },
    {
      title: "Ville",
      content: get(data, "ville"),
    },
    {
      title: "Pays",
      content: get(data, "pays"),
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
                <h1 className="h1">DÉTAILS DE L'ENSEIGNANT</h1>
                <div className="button_bloc_teacher">
                  <Button className="back_button" onClick={onGoBack}>
                    <ArrowLeftOutlined />
                    Retour
                  </Button>
                  <Button
                    className="create_button"
                    onClick={() => onUpdate(get(data, "no_Enseignant"))}
                  >
                    <EditOutlined />
                    Modifier
                  </Button>
                  <Popconfirm
                    placement="topRight"
                    title={
                      "Êtes-vous sûr de vouloir supprimer cet enseignant ?"
                    }
                    onConfirm={() => onRemove(get(data, "no_Enseignant"))}
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
            <Row type="flex" justify="space-between">
              {teacherTopItems.map(({ title, content, toCopy }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  toCopy={toCopy}
                  length={teacherTopItems.length}
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between">
              {teacherSecondItems.map(({ title, content, toCopy }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  toCopy={toCopy}
                  length={teacherSecondItems.length}
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between">
              {teacherFourthItems.map(({ title, content, toCopy }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  toCopy={toCopy}
                  length={teacherFourthItems.length}
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between">
              {teacherThirdItems.map(({ title, content, toCopy }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  toCopy={toCopy}
                  length={teacherThirdItems.length}
                />
              ))}
            </Row>
            <Divider />
            <Row>
              {teacherFifthItems.map(({ title, content, toCopy }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  toCopy={toCopy}
                  length={teacherFifthItems.length}
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between">
              {teacherBottomItems.map(({ title, content, toCopy }, index) => (
                <Detail
                  key={index}
                  title={title}
                  content={content}
                  toCopy={toCopy}
                  length={teacherBottomItems.length}
                />
              ))}
            </Row>
            <Divider />
            <Collapse >
              <Panel
                  header={
                    <Tag color="#B5D99C">
                      Unité d'enseignement
                    </Tag>
                  }
                  key="1"
              >
                <List />
                  
              </Panel>
            </Collapse>
            
          </Card>
        </div>
      </Col>
    </div>
  );
};

export default View;
