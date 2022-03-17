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

const View = ({ promotionQuery, onGoBack }) => {
  const { idle, data, loading, errors } = promotionQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const promotionsTopItems = [
    {
      title: "Code formation",
      content: get(data, "id.code_Formation"),
    },
    {
      title: "Année universitaire",
      content: get(data, "id.annee_Universitaire"),
    },
    {
      title: "Processus de stage",
      content: get(data, "processus_Stage"),
    },
    {
      title: "Sigle promotion",
      content: get(data, "sigle_Promotion"),
    },
  ];
  const promotionsSecondItems = [
    {
      title: "Date de réponse à la liste principale",
      content: get(data, "date_Reponse_Lp"),
    },
    {
      title: "Date de réponse à la liste d'attente",
      content: get(data, "date_Reponse_Lalp"),
    },
    {
      title: "Date de rentrée",
      content: get(data, "date_Rentree"),
    },
    {},
  ];

  const promotionsThirdItems = [
    {
      title: "Numéro maximum d'étudiants ",
      content: get(data, "nb_Max_Etudiant"),
    },
    {
      title: "Lieu de rentrée",
      content: get(data, "lieu_Rentree"),
    },
    {},
    {},
  ];

  const promotionsBottomItems = [
    {
      title: "Commentaire",
      content: get(data, "commentaire"),
    },
    {},
    {},
    {},
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
      title: "Sexe",
      content: get(data, "enseignant.sexe"),
    },
  ];

  const teacherThirdItems = [
    {
      title: "Email personnel",
      content: get(data, "enseignant.email_Perso"),
      toCopy: true,
    },
    {
      title: "Email UBO",
      content: get(data, "enseignant.email_Ubo"),
      toCopy: true,
    },
    {},
  ];
  const teacherSecondItems = [
    {
      title: "Type",
      content: get(data, "enseignant.type"),
    },
  ];

  const teacherFourthItems = [
    {
      title: "Mobile",
      content: get(data, "enseignant.mobile"),
    },
    {
      title: "Téléphone",
      content: get(data, "enseignant.telephone"),
    },
    {},
  ];

  const teacherBottomItems = [
    {
      title: "Adresse",
      content: get(data, "enseignant.adresse"),
      toCopy: true,
    },
    {
      title: "Code postal",
      content: get(data, "enseignant.codePostal"),
    },
    {
      title: "Ville",
      content: get(data, "enseignant.ville"),
    },
    {
      title: "Pays",
      content: get(data, "enseignant.pays"),
    },
  ];
  return (
    <div className="container__antd">
      <Col span={24}>
        <Card className="card">
          <div justify="space-between">
            <div className="head_bloc">
              <h1 className="h1">DÉTAILS PROMOTION</h1>
              <div className="button_bloc_promo">
                <Button className="back_button" onClick={onGoBack}>
                  Retour
                </Button>
              </div>
            </div>
          </div>
          <Divider />
          <Collapse accordion defaultActiveKey={["1"]}>
            <Panel header="Détails Promotion" key="1">
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
                {promotionsSecondItems.map(
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
                {promotionsThirdItems.map(
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
                <Panel header={<Tag color="#419197">Enseignant Responsable</Tag>} key="1">
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
                    {teacherSecondItems.map(
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
                    {teacherThirdItems.map(
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
                    {teacherFourthItems.map(
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
