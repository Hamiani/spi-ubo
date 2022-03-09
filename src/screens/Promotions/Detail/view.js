import React from "react";
import get from "lodash/get";
import {
  Card,
  Col,
  Row,
  Divider,
  Popconfirm,
  Button,
  notification,
  Collapse,
  Tag,
} from "antd";
import { EyeOutlined } from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

const { Panel } = Collapse;

const Detail = ({ title, content }) => (
  <Col xs={24} sm={24} md={12} lg={6} xl={6}>
    <h3 className="fw-700">{title}</h3>
    <h5 className="fw-500">{content}</h5>
  </Col>
);

const onSuccessCallBack = () =>
  notification.success({ message: "Supprimé avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const View = ({
  promotionQuery,
  onRemove,
  onGoBack,
  onShowFormation,
  onShowTeacher,
}) => {
  const { idle, data, loading, errors } = promotionQuery;
  // const { loading: removeLoading } = removeQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const formationsTopItems = [
    {
      title: "Code",
      content: get(data, "formation.codeFormation"),
    },
    {
      title: "Début De L'accréditation",
      content: get(data, "formation.debutAccreditation"),
    },
    {
      title: "Diplôme",
      content: get(data, "formation.diplome"),
    },
    {
      title: "Double Diplôme",
      content: get(data, "formation.doubleDiplome"),
    },
  ];

  const formationsBottomItems = [
    {
      title: "Fin De L'accréditation",
      content: get(data, "formation.finAccreditation"),
    },
    {
      title: "Numéro des Années ",
      content: get(data, "formation.n0Annee"),
    },
    {
      title: "Nom De La Formation",
      content: get(data, "formation.nomFormation"),
    },
    {
      title: "",
      content: null,
    },
  ];

  const promotionsTopItems = [
    {
      title: "Date de Rentrée",
      content: get(data, "dateRentree"),
    },
    {
      title: "Date de Reponse La lp",
      content: get(data, "dateReponseLalp"),
    },
    {
      title: "Date Reponse Lp",
      content: get(data, "dateReponseLp"),
    },
    {
      title: "Année universitaire",
      content: get(data, "id.anneeUniversitaire"),
    },
  ];

  const promotionsBottomItems = [
    {
      title: "Lieu de Rentrée",
      content: get(data, "lieuRentree"),
    },
    {
      title: "Numéro Max des étudiants ",
      content: get(data, "nbMaxEtudiant"),
    },
    {
      title: "Processus de Stage",
      content: get(data, "processusStage"),
    },
    {
      title: "Sigle Promotion",
      content: get(data, "siglePromotion"),
    },
  ];

  const teacherTopItems = [
    {
      title: "Nom",
      content: get(data, "enseignant.nom"),
    },
    {
      title: "Prénom",
      content: get(data, "enseignant.prenom"),
    },
    {
      title: "Email Personnel",
      content: get(data, "enseignant.emailPerso"),
    },
    {
      title: "Email UBO",
      content: get(data, "enseignant.emailUbo"),
    },
    ,
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
    },
    {
      title: "Code Postal",
      content: get(data, "enseignant.codePostal"),
    },
    {
      title: "Ville",
      content: get(data, "enseignant.ville"),
    },
  ];

  /*   const formationExtra = (id) => (
    <EyeOutlined
      onClick={(e) => {
        onShowFormation(id);
        e.stopPropagation();
      }}
    />
  );

  const teacherExtra = (id) => (
    <EyeOutlined
      onClick={(e) => {
        onShowTeacher(id);
        e.stopPropagation();
      }}
    />
  ); */

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
                  onConfirm={() =>
                    onRemove(data, onSuccessCallBack, onErrorCallBack)
                  }
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
                {promotionsTopItems.map(({ title, content }, index) => (
                  <Detail key={index} title={title} content={content} />
                ))}
              </Row>
              <Divider />
              <Row type="flex" justify="space-between">
                {promotionsBottomItems.map(({ title, content }, index) => (
                  <Detail key={index} title={title} content={content} />
                ))}
              </Row>
              <Collapse>
                <Panel
                  header={<Tag color="pink">Formation</Tag>}
                  key="1"
                  //  extra={formationExtra(get(data, "formation.codeFormation"))}
                >
                  <Row type="flex" justify="space-between">
                    {formationsTopItems.map(({ title, content }, index) => (
                      <Detail key={index} title={title} content={content} />
                    ))}
                  </Row>
                  <Divider />
                  <Row type="flex" justify="space-between">
                    {formationsBottomItems.map(({ title, content }, index) => (
                      <Detail key={index} title={title} content={content} />
                    ))}
                  </Row>
                </Panel>
                <Panel
                  header={<Tag color="cyan">Enseignant</Tag>}
                  key="2"
                  // extra={teacherExtra(get(data, "enseignant.noEnseignant"))}
                >
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
