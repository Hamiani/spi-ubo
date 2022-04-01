import React from "react";
import get from "lodash/get";
import isNil from "lodash/isNil";
import { Card, Row, Col, Divider, Popconfirm, Button, message } from "antd";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
import { removeSpace, formatDate } from "../../../utils/helpers";
import { SEXES, DATE_FORMAT } from "../../../utils/constants";
import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import moment from "moment";

const Detail = ({ title, content, toCopy = false, length = 1 }) => (
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
const NonRenseigne = () => (
  <p>
    <i>Non renseigné</i>
  </p>
);

const View = ({ studentQuery, onRemove, onGoBack, onUpdate }) => {
  const { idle, data, loading, errors } = studentQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  const teacherTopItems = [
    {
      title: "Prénom",
      content: get(data, "prenom"),
      toCopy: true
    },
    {
      title: "Nom",
      content: get(data, "nom"),
      toCopy: true
    },
    {
      title: "Sexe",
      content: get(SEXES, `${get(data, "sexe", "")}.value`, "")
    }
  ];

  const teacherEighthItems = [
    {
      title: "Date de naissance",
      content: moment(formatDate(get(data, "date_Naissance"))).format(
        DATE_FORMAT
      )
    },
    {
      title: "Nationalité",
      content: get(data, "nationalite")
    }
  ];

  const teacherThirdItems = [
    {
      title: "Email Personnel",
      content: !isNil(get(data, "email_Perso")) ? (
        get(data, "email_Perso")
      ) : (
        <NonRenseigne />
      ),
      toCopy: !isNil(get(data, "email_Perso"))
    },
    {
      title: "Email UBO",
      content: !isNil(get(data, "email_Ubo")) ? (
        get(data, "email_Ubo")
      ) : (
        <NonRenseigne />
      ),
      toCopy: true
    }
  ];
  const teacherFourthItems = [
    {
      title: "Mobile",
      content: removeSpace(get(data, "mobile", ""))
    },
    {
      title: "Téléphone",
      content: !isNil(get(data, "telephone")) ? (
        get(data, "telephone")
      ) : (
        <NonRenseigne />
      )
    }
  ];

  const teacherSixthItems = [
    {
      title: "Formation",
      content: removeSpace(get(data, "code_Formation", ""))
    },
    {
      title: "Année universitaire",
      content: removeSpace(get(data, "annee_Universitaire", ""))
    },
    {
      title: "Université d'origine",
      content: get(data, "universite_Origine", "")
    }
  ];
  const teacherSeventhItems = [
    {
      title: "Groupe TP",
      content: !isNil(get(data, "groupe_Tp")) ? (
        get(data, "groupe_Tp")
      ) : (
        <NonRenseigne />
      )
    },
    {
      title: "Groupe anglais",
      content: !isNil(get(data, "groupe_Anglais")) ? (
        get(data, "groupe_Anglais")
      ) : (
        <NonRenseigne />
      )
    }
  ];

  const teacherFifthItems = [
    {
      title: "Adresse",
      content: get(data, "adresse"),
      toCopy: true
    }
  ];

  const teacherBottomItems = [
    {
      title: "Code postal",
      content: get(data, "code_Postal")
    },
    {
      title: "Ville",
      content: get(data, "ville")
    },
    {
      title: "Pays d'origine",
      content: get(data, "pays_Origine")
    },
    {
      title: "Lieu de naissance",
      content: get(data, "lieu_Naissance")
    }
  ];

  return (
    <div className="container__antd p-top-20">
      <Col span={24}>
        <Card className="card">
          <div justify="space-between">
            <div className="head_bloc">
              <h1 className="h1">DÉTAILS DE L'ÉTUDIANT</h1>
              <div className="button_bloc_teacher">
                <Button className="back_button" onClick={onGoBack}>
                  <ArrowLeftOutlined />
                  Retour
                </Button>
                <Button
                  className="create_button"
                  onClick={() =>
                    onUpdate({
                      id: get(data, "no_Etudiant"),
                      code_Formation: get(data, "code_Formation"),
                      annee_Universitaire: get(data, "annee_Universitaire")
                    })
                  }
                >
                  <EditOutlined />
                  Modifier
                </Button>
                <Popconfirm
                  placement="topRight"
                  title={"Êtes-vous sûr de vouloir supprimer cet étudiant ?"}
                  onConfirm={() => onRemove(get(data, "no_Etudiant"))}
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
            {teacherEighthItems.map(({ title, content, toCopy }, index) => (
              <Detail
                key={index}
                title={title}
                content={content}
                toCopy={toCopy}
                length={teacherEighthItems.length}
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
            {teacherSixthItems.map(({ title, content, toCopy }, index) => (
              <Detail
                key={index}
                title={title}
                content={content}
                toCopy={toCopy}
                length={teacherSixthItems.length}
              />
            ))}
          </Row>
          <Divider />

          <Row>
            {teacherSeventhItems.map(({ title, content, toCopy }, index) => (
              <Detail
                key={index}
                title={title}
                content={content}
                toCopy={toCopy}
                length={teacherSeventhItems.length}
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
        </Card>
      </Col>
    </div>
  );
};

export default View;
