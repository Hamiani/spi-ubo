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
} from "antd";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

const onSuccessCallBack = () =>
  notification.success({ message: "Supprimé avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const Detail = ({ title, content }) => (
  <Col xs={24} sm={24} md={12} lg={6} xl={6}>
    <h3 className="fw-700">{title}</h3>
    <h5 className="fw-500">{content}</h5>
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
    },
    {
      title: "Prénom",
      content: get(data, "prenom"),
    },
    {
      title: "Email Personnel",
      content: get(data, "emailPerso"),
    },
    {
      title: "Email UBO",
      content: get(data, "emailUbo"),
    },
    ,
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
              {teacherTopItems.map(({ title, content }, index) => (
                <Detail key={index} title={title} content={content} />
              ))}
            </Row>
            <Divider />
            <Row type="flex" justify="space-between">
              {teacherBottomItems.map(({ title, content }, index) => (
                <Detail key={index} title={title} content={content} />
              ))}
            </Row>
          </Card>
        </div>
      </Col>
    </div>
  );
};

export default View;
