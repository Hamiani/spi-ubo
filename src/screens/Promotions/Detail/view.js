import React, { useState } from "react";
import get from "lodash/get";
import isNil from "lodash/isNil";
import {
  Card,
  Modal,
  Col,
  Row,
  Divider,
  Button,
  Collapse,
  Tag,
  message,
} from "antd";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

import {
  capitalizeFirstLetter,
  formatDate,
  removeSpace,
} from "../../../utils/helpers";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import UesList from "../../UEs/List";
import UeDetail from "../../UEs/Detail";
import "./style.css";
import {
  DATE_FORMAT,
  SEXES,
  PROCESSUS_STAGE,
  DETAIL_TYPES,
} from "../../../utils/constants";
import moment from "moment";
import List from "../../Students/List";
import Create from "../../Students/Create";

const { Panel } = Collapse;

const Detail = ({ title, content, toCopy = false, length = 1 }) => {
  return (
    <Col xs={24} sm={24} md={12} lg={24 / length} xl={24 / length}>
      <h3 className="fw-700">
        {title}
        {toCopy && (
          <CopyToClipboard
            text={content}
            onCopy={() => message.success("Text copié")}
          >
            <AiOutlineCopy className="cursor_pointer copying_icon" size={20} />
          </CopyToClipboard>
        )}
      </h3>
      <h4 className="fw-500">{content}</h4>
    </Col>
  );
};

const View = ({ promotionQuery, onGoBack, onShowTeacher }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const { idle, data, loading, errors } = promotionQuery;
  const [detail, setDetail] = useState({ visible: false, filter: null });
  const uesData = get(data, "uniteEnseignementSet", []);

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const showModal = () => {
    setVisible(true);
  };

  const handleOK = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

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
      content: get(PROCESSUS_STAGE, `${get(data, "processus_Stage")}.VALUE`),
    },
    {
      title: "Sigle promotion",
      content: get(data, "sigle_Promotion"),
    },
  ];
  const promotionsSecondItems = [
    {
      title: "Date de réponse à la liste principale",
      content: moment(formatDate(get(data, "date_Reponse_Lp", ""))).format(
        DATE_FORMAT
      ),
    },
    {
      title: "Date de réponse à la liste d'attente",
      content: moment(formatDate(get(data, "date_Reponse_Lalp", ""))).format(
        DATE_FORMAT
      ),
    },
    {
      title: "Date de rentrée",
      content: moment(formatDate(get(data, "date_Rentree", ""))).format(
        DATE_FORMAT
      ),
    },
  ];

  const promotionsThirdItems = [
    {
      title: "Numéro maximum d'étudiants",
      content: get(data, "nb_Max_Etudiant"),
    },
    {
      title: "Lieu de rentrée",
      content: get(data, "lieu_Rentree"),
    },
  ];

  const promotionsBottomItems = [
    {
      title: "Commentaire",
      content: !isNil(get(data, "commentaire")) ? (
        get(data, "commentaire")
      ) : (
        <p>
          <i>Non renseigné</i>
        </p>
      ),
    },
  ];

  const teacherTopItems = [
    {
      title: "Nom",
      content: get(data, "enseignant.nom", "").toUpperCase(),
      toCopy: true,
    },
    {
      title: "Prénom",
      content: capitalizeFirstLetter(get(data, "enseignant.prenom", "")),
      toCopy: true,
    },
    {
      title: "Sexe",
      content: get(SEXES, `${get(data, "enseignant.sexe", "")}.value`, ""),
    },
  ];

  const teacherThirdItems = [
    {
      title: "Email personnel",
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
      content: get(data, "enseignant.email_Ubo"),
      toCopy: true,
    },
  ];
  const teacherSecondItems = [
    {
      title: "Type",
      content: get(data, "enseignant.type.signification"),
    },
  ];

  const teacherFourthItems = [
    {
      title: "Mobile",
      content: removeSpace(get(data, "enseignant.mobile", "")),
    },
    {
      title: "Téléphone",
      content: removeSpace(get(data, "enseignant.telephone", "")),
    },
  ];
  const teacherFifthItems = [
    {
      title: "Adresse",
      content: get(data, "enseignant.adresse"),
      toCopy: true,
    },
  ];

  const teacherBottomItems = [
    {
      title: "Code postal",
      content: get(data, "enseignant.code_Postal"),
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
  const onShowUeDetail = (filter) => setDetail({ visible: true, filter });
  const onHideUeDetail = () => setDetail({ ...detail, visible: false });

  const etudiantData = get(data, "etudiantSet", []);
  return (
    <div className="container__antd">
      <Col span={24}>
        <Card className="card">
          <div justify="space-between">
            <div className="head_bloc">
              <h1 className="h1">DÉTAILS DE LA PROMOTION</h1>
              <div className="button_bloc_promo">
                <Button className="back_button" onClick={onGoBack}>
                  <ArrowLeftOutlined />
                  Retour
                </Button>
              </div>
            </div>
          </div>
          <Divider />
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Détails Promotion" key="1">
              <Row type="flex" justify="space-between">
                {promotionsTopItems.map(({ title, content, toCopy }, index) => (
                  <Detail
                    key={index}
                    title={title}
                    content={content}
                    toCopy={toCopy}
                    length={promotionsTopItems.length}
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
                      length={promotionsSecondItems.length}
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
                      length={promotionsThirdItems.length}
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
                      length={promotionsBottomItems.length}
                    />
                  )
                )}
              </Row>
              <Divider />
              <Collapse accordion>
                <Panel
                  header={
                    <Tag color="#419197">
                      Enseignant Responsable :{" "}
                      {capitalizeFirstLetter(
                        get(data, "enseignant.prenom", "")
                      ) +
                        " " +
                        get(data, "enseignant.nom", "").toUpperCase()}
                    </Tag>
                  }
                  key="1"
                >
                  <Row type="flex" justify="space-between">
                    {teacherTopItems.map(
                      ({ title, content, toCopy }, index) => (
                        <Detail
                          key={index}
                          title={title}
                          content={content}
                          toCopy={toCopy}
                          length={teacherTopItems.length}
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
                          length={teacherSecondItems.length}
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
                          length={teacherThirdItems.length}
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
                          length={teacherFourthItems.length}
                        />
                      )
                    )}
                  </Row>
                  <Divider />
                  <Row type="flex" justify="space-between">
                    {teacherFifthItems.map(
                      ({ title, content, toCopy }, index) => (
                        <Detail
                          key={index}
                          title={title}
                          content={content}
                          toCopy={toCopy}
                          length={teacherFifthItems.length}
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
                          length={teacherBottomItems.length}
                        />
                      )
                    )}
                  </Row>
                </Panel>
                <Panel
                  header={<Tag color="#419197">Unité d'enseignement</Tag>}
                  key="2"
                >
                  <UesList
                    {...{
                      data: uesData,
                      type: DETAIL_TYPES.PROMOTION,
                      onShowTeacher,
                    }}
                  />
                </Panel>
              </Collapse>
              <Divider />
              <Collapse>
                <Panel
                  header={<Tag color="#B5D99C">Liste des étudiants</Tag>}
                  key="1"
                >
                  <Button
                    className="create_button"
                    onClick={showModal}
                  >
                    <PlusOutlined />
                    Ajouter Etudiant
                  </Button>
                  <Modal
                    style={{ top: 20 }}
                    visible={visible}
                    onOk={handleOK}
                    onCancel={handleCancel}
                    confirmLoading={confirmLoading}
                    footer={null}
                    closable={false}
                    width={1200}
                    bodyStyle={{ padding: 30 }}
                    maskClosable={false}
                  >
                    <Create handleClose={handleCancel} />
                  </Modal>
                  <List data={etudiantData} />
                </Panel>
              </Collapse>
              <Divider />
              <Collapse>
                <Panel
                  header={<Tag color="#B5D99C">Liste des étudiants</Tag>}
                  key="1"
                >
                  <List data={etudiantData} />
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </Card>
      </Col>
      <UeDetailModal {...{ onHideUeDetail, detail }} />
    </div>
  );
};

export default View;
