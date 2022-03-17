import React from "react";
import get from "lodash/get";
import isNil from "lodash/isNil";
import { Card, Row, Col, Divider, Popconfirm, Button, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

import "./style.css";

const Detail = ({ title, content, toCopy = false, length }) => (
  <Col xs={24} sm={24} md={12} lg={6} xl={6}>
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

const View = ({ teacherQuery, onRemove, onGoBack }) => {
  const { idle, data, loading, errors } = teacherQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const teacherTopItems = [
    {
      title: "Nom",
      content: get(data, "nom"),
      toCopy: true,
    },
    {
      title: "Prénom",
      content: get(data, "prenom"),
      toCopy: true,
    },
    {
      title: "Sexe",
      content: get(data, "sexe"),
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
    {},
  ];
  const teacherFourthItems = [
    {
      title: "Mobile",
      content: get(data, "mobile"),
    },
    {
      title: "Telephone",
      content: get(data, "telephone"),
    },
    {},
  ];
  const teacherSecondItems = [
    {
      title: "Type",
      content: get(data, "type"),
    },
  ];

  const teacherBottomItems = [
    {
      title: "Adresse",
      content: get(data, "adresse"),
      toCopy: true,
    },
    {
      title: "Code Postal",
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
                <div className="button_bloc">
                  <Button className="back_button" onClick={onGoBack}>
                    Retour
                  </Button>
                  <Popconfirm
                    placement="topRight"
                    title={"Voulez-vous vraiment supprimer cet enseignant ?"}
                    onConfirm={() => onRemove(get(data, "no_Enseignant"))}
                    okText="Confirmer"
                    cancelText="Cancel"
                  >
                    <Button className="delete_button">Supprimer</Button>
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
