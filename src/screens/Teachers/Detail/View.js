import React from "react";
import get from "lodash/get";
import {
  Card,
  Row,
  Col,
  Divider,
  Popconfirm,
  Button,
  notification,
  message,
} from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

import "./style.css";

const onSuccessCallBack = () =>
  notification.success({ message: "Supprimé avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const Detail = ({ title, content, toCopy = false }) => (
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

const View = ({ teacherQuery, removeQuery, onRemove, onGoBack }) => {
  const { idle, data, loading, errors } = teacherQuery;
  const { loading: removeLoading } = removeQuery;

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
      title: "Email Personnel",
      content: get(data, "email_Perso"),
      toCopy: true,
    },
    {
      title: "Email UBO",
      content: get(data, "email_Ubo"),
      toCopy: true,
    },
  ];

  const teacherMiddleItems = [
    {
      title: "Mobile",
      content: get(data, "mobile"),
    },
    {
      title: "Telephone",
      content: get(data, "telephone"),
    },
    {
      title: "Sexe",
      content: get(data, "sexe"),
    },
    {
      title: "Type",
      content: get(data, "type"),
    },
  ];

  const teacherBottomItems = [
    {
      title: "Pays",
      content: get(data, "pays"),
    },
    {
      title: "Adresse",
      content: get(data, "adresse"),
    },
    {
      title: "Code Postal",
      content: get(data, "codePostal"),
    },
    {
      title: "Ville",
      content: get(data, "ville"),
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
                <h1 className="h1">DÉTAIL DE L'ENSEIGNANT</h1>
                <div className="button_bloc">
                  <Button className="back_button" onClick={onGoBack}>
                    Retour
                  </Button>
                  <Popconfirm
                    placement="topRight"
                    title={"Voulez-vous vraiment supprimer cet enseignant ?"}
                    onConfirm={() =>
                      onRemove(data, onSuccessCallBack, onErrorCallBack)
                    }
                    okText="Confirmer"
                    cancelText="Cancel"
                  >
                    <Button loading={removeLoading} className="delete_button">
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
                />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between">
              {teacherMiddleItems.map(({ title, content, toCopy }, index) => (
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
