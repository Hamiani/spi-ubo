import React from "react";
import get from "lodash/get";
import {
  Card,
  Col,
  Row,
  Divider,
  Popconfirm,
  Button,
  Collapse,
  Tag,
  message,
} from "antd";

import { CopyToClipboard } from "react-copy-to-clipboard";

import "./style.css";

import { AiOutlineCopy } from "react-icons/ai";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

const { Panel } = Collapse;

const Detail = ({ title, content, toCopy = false }) => {
  return (
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
};

const View = ({ promotionQuery, onRemove, onGoBack }) => {
  const { idle, data, loading, errors } = promotionQuery;
  // const { loading: removeLoading } = removeQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const promotionsTopItems = [
    {
      title: "Date de Rentrée",
      content: get(data, "date_Rentree"),
    },
    {
      title: "Date de Reponse La lp",
      content: get(data, "date_Reponse_Lalp"),
    },
    {
      title: "Date Reponse Lp",
      content: get(data, "date_Reponse_Lp"),
    },
    {
      title: "Année universitaire",
      content: get(data, "id.annee_Universitaire"),
    },
  ];

  const promotionsBottomItems = [
    {
      title: "Lieu de Rentrée",
      content: get(data, "lieu_Rentree"),
    },
    {
      title: "Numéro Max des étudiants ",
      content: get(data, "nb_Max_Etudiant"),
    },
    {
      title: "Processus de Stage",
      content: get(data, "processus_Stage"),
    },
    {
      title: "Sigle Promotion",
      content: get(data, "sigle_Promotion"),
    },
  ];

  const teacherTopItems = [
    {
      title: "Nom",
      content: get(data, "enseignant.nom"),
      toCopy: true,
    },
    {
      title: "Prénom",
      content: get(data, "enseignant.prenom"),
      toCopy: true,
    },
    {
      title: "Email Personnel",
      content: get(data, "enseignant.email_Perso"),
      toCopy: true,
    },
    {
      title: "Email UBO",
      content: get(data, "enseignant.email_Ubo"),
      toCopy: true,
    },
  ];
  const teacherMiddleItems = [
    {
      title: "Mobile",
      content: get(data, "enseignant.mobile"),
    },
    {
      title: "Telephone",
      content: get(data, "enseignant.telephone"),
    },
    {
      title: "Sexe",
      content: get(data, "enseignant.sexe"),
    },
    {
      title: "Type",
      content: get(data, "enseignant.type"),
    },
  ];

  const teacherBottomItems = [
    {
      title: "Pays",
      content: get(data, "enseignant.pays"),
    },
    {
      title: "Adresse",
      content: get(data, "enseignant.adresse"),
      toCopy: true,
    },
    {
      title: "Code Postal",
      content: get(data, "enseignant.code_Postal"),
    },
    {
      title: "Ville",
      content: get(data, "enseignant.ville"),
    },
  ];

  return (
    <div className="container__antd">
      <Col span={24}>
        <Card className="card">
          <div justify="space-between">
            <div className="head_bloc">
              <h1 className="h1">DÉTAIL</h1>
              <div className="button_bloc">
                <Button className="back_button" onClick={onGoBack}>
                  Retour
                </Button>
                <Popconfirm
                  placement="topRight"
                  title={"Voulez-vous vraiment supprimer cette promotion ?"}
                  onConfirm={() => {}}
                  okText="Confirmer"
                  cancelText="Cancel"
                >
                  <Button className="delete_button">Supprimer</Button>
                </Popconfirm>
              </div>
            </div>
          </div>
          <Divider />
          <Collapse accordion defaultActiveKey={["1"]}>
            <Panel header="Détail de Promotion" key="1">
              <Row type="flex" justify="space-between">
                {promotionsTopItems.map(({ title, content, toCopy }, index) => (
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
                {promotionsBottomItems.map(
                  ({ title, content, toCopy }, index) => (
                    <Detail
                      key={index}
                      title={title}
                      content={content}
                      toCopy={toCopy}
                    />
                  )
                )}
              </Row>
              <Divider />
              <Collapse>
                <Panel header={<Tag color="cyan">Enseignant</Tag>} key="1">
                  <Row type="flex" justify="space-between">
                    {teacherTopItems.map(
                      ({ title, content, toCopy }, index) => (
                        <Detail
                          key={index}
                          title={title}
                          content={content}
                          toCopy={toCopy}
                        />
                      )
                    )}
                  </Row>
                  <Divider />
                  <Row type="flex" justify="space-between">
                    {teacherMiddleItems.map(
                      ({ title, content, toCopy }, index) => (
                        <Detail
                          key={index}
                          title={title}
                          content={content}
                          toCopy={toCopy}
                        />
                      )
                    )}
                  </Row>
                  <Divider />
                  <Row type="flex" justify="space-between">
                    {teacherBottomItems.map(
                      ({ title, content, toCopy }, index) => (
                        <Detail
                          key={index}
                          title={title}
                          content={content}
                          toCopy={toCopy}
                        />
                      )
                    )}
                  </Row>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </div>
  );
};

export default View;
