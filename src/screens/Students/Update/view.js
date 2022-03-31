import React, { useEffect, useState } from "react";

import {
  Row,
  Col,
  Input,
  Button,
  Form,
  Select,
  Divider,
  Card,
  DatePicker
} from "antd";
import "moment/locale/fr";
import locale from "antd/es/date-picker/locale/fr_FR";
import { CheckOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import { hasNumber } from "../../../utils/helpers";
import get from "lodash/get";
import isNil from "lodash/isNil";
import cuid from "cuid";

import { isValidPhoneNumber } from "libphonenumber-js";

import "./style.css";
import moment from "moment";
import { DATE_FORMAT } from "../../../utils/constants";
import { isEmpty } from "lodash";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

const rules = {
  ["lastName"]: [
    { required: true, message: "Ce champs est obligatoire." },
    () => ({
      validator(_, value) {
        if (hasNumber(value)) {
          return Promise.reject(
            "Le nom ne peut pas contenir des caractères numériques."
          );
        }
        return Promise.resolve();
      }
    })
  ],
  ["firstName"]: [
    { required: true, message: "Ce champs est obligatoire." },
    () => ({
      validator(_, value) {
        if (hasNumber(value)) {
          return Promise.reject(
            "Le prénom ne peut pas contenir des caractères numériques."
          );
        }
        return Promise.resolve();
      }
    })
  ],
  ["phone"]: [
    {
      required: true,
      message: "Ce champs est obligatoire."
    },
    () => ({
      validator(_, value) {
        if (isValidPhoneNumber(value)) {
          return Promise.resolve();
        }
        return Promise.reject(
          "Le format du numéro de téléphone est invalide, exemple +33123456789"
        );
      }
    })
  ],
  ["telephone"]: [
    {
      required: false
    },
    () => ({
      validator(_, value) {
        if (!value) return Promise.resolve();
        if (isValidPhoneNumber(value)) {
          return Promise.resolve();
        }
        return Promise.reject(
          "Le format du numéro de téléphone est invalide, exemple +33123456789"
        );
      }
    })
  ],
  ["emailPerso"]: [
    {
      required: false,
      message: "Le format de l'email est invalide.",
      type: "email"
    }
  ],
  ["email_Ubo"]: [
    {
      required: false,
      message: "Le format de l'email est invalide.",
      type: "email"
    },
    () => ({
      validator(_, value) {
        if (!value) return Promise.resolve();
        const regex = new RegExp("@univ-brest.fr*$", "i");
        if (!regex.test(value)) {
          return Promise.reject(
            "L'email UBO doit respecter la forme nom.prénom@univ-brest.fr."
          );
        }
        return Promise.resolve();
      }
    })
  ],
  ["codePostal"]: [
    { required: true, message: "Ce champs est obligatoire." },
    () => ({
      validator(_, value) {
        if (value.length > 10) {
          return Promise.reject(
            "La code postal ne peut pas dépasser 10 caractères."
          );
        }
        return Promise.resolve();
      }
    })
  ],
  ["pays"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["ville"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["adresse"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["sexe"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["dateNaissance"]: [
    { required: true, message: "Ce champs est obligatoire." }
  ],
  ["lieuNaissance"]: [
    { required: true, message: "Ce champs est obligatoire." }
  ],
  ["nationalite"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["codeFormation"]: [
    { required: true, message: "Ce champs est obligatoire." }
  ],
  ["universiteOrigine"]: [
    { required: true, message: "Ce champs est obligatoire." }
  ],
  ["groupeTp"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["groupeAnglais"]: [
    { required: true, message: "Ce champs est obligatoire." }
  ],
  ["anneeUniversitaire"]: [
    { required: true, message: "Ce champs est obligatoire." }
  ]
};

const UpdateForm = ({
  student,
  paysData,
  formationData,
  sexesData,
  onUpdate,
  updateQuery,
  onGoBack
}) => {
  const { loading } = updateQuery;
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState(false);

  const onFieldsChange = (fields) => {
    const controlledFields = fields.map((e) =>
      e.name[0] === "email_Ubo" ||
      e.name[0] === "telephone" ||
      e.name[0] === "email"
        ? {
            ...e,
            required: false
          }
        : {
            ...e,
            required: true
          }
    );
    const emails = fields.filter(
      (e) => e.name[0] === "email_Ubo" || e.name[0] === "email"
    );

    setDisabled(
      controlledFields.some(
        ({ errors, value, required }) =>
          (required && (errors.length > 0 || isNil(value))) || errors.length > 0
      )
    );
    setEmail(
      emails.filter(({ value }) => isEmpty(value) || isNil(value)).length === 2
    );
  };

  const onFinish = ({ date_Naissance, ...rest }) => {
    onUpdate({
      date_Naissance: date_Naissance.format(DATE_FORMAT),
      ...rest
    });
  };
  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <Card className="card">
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              scrollToFirstError
              initialValues={{
                code_Formation: get(student, "code_Formation", ""),
                annee_Universitaire: get(student, "annee_Universitaire", ""),
                nom: get(student, "nom", ""),
                prenom: get(student, "prenom", ""),
                sexe: get(student, "sexe", ""),
                date_Naissance: moment(get(student, "date_Naissance")).locale(
                  "fr"
                ),
                lieu_Naissance: get(student, "lieu_Naissance", ""),
                nationalite: get(student, "nationalite", ""),
                telephone: get(student, "telephone", ""),
                mobile: get(student, "mobile", ""),
                email: get(student, "email", ""),
                email_Ubo: get(student, "email_Ubo", ""),
                adresse: get(student, "adresse", ""),
                code_Postal: get(student, "code_Postal", ""),
                ville: get(student, "ville", ""),
                pays_Origine: get(student, "pays_Origine", ""),
                universite_Origine: get(student, "universite_Origine", ""),
                groupe_Tp: get(student, "groupe_Tp", ""),
                groupe_Anglais: get(student, "groupe_Anglais", "")
              }}
              onFieldsChange={(_, fields) => onFieldsChange(fields)}
            >
              <Row
                style={{ marginBottom: 0 }}
                justify="space-between"
                align="center"
              >
                <Col>
                  <h1 className="h1">MODIFIER UN ETUDIANT</h1>
                </Col>
              </Row>

              <Divider className="d_10" />

              <Row type="flex" justify="space-between">
                <Col span={9}>
                  <Item
                    name="prenom"
                    label="Prénom"
                    rules={rules["firstName"]}
                    validateFirst
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={9}>
                  <Item
                    label="Nom"
                    name="nom"
                    rules={rules["lastName"]}
                    validateFirst
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={4}>
                  <Item label="Sexe" name="sexe" rules={rules["sexe"]}>
                    <Select size="large">
                      {sexesData.map((s) => (
                        <Option
                          key={get(s, "code")}
                          value={get(s, "abreviation")}
                        >
                          {get(s, "signification")}
                        </Option>
                      ))}
                    </Select>
                  </Item>
                </Col>
              </Row>

              <Row type="flex" justify="space-between">
                <Col span={5}>
                  <Item
                    label="Date de naissance"
                    name="date_Naissance"
                    rules={rules["dateNaissance"]}
                    style={{ alignItems: "start" }}
                  >
                    <DatePicker
                      locale={locale}
                      size="large"
                      format={DATE_FORMAT}
                    />
                  </Item>
                </Col>
                <Col span={8}>
                  <Item
                    label="Lieu de naissance"
                    name="lieu_Naissance"
                    rules={rules["lieuNaissance"]}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={8}>
                  <Item
                    label="Nationalité"
                    name="nationalite"
                    rules={rules["lieuNaissance"]}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <Item
                    label="Email personnel"
                    name="email"
                    rules={rules["emailPerso"]}
                    validateFirst
                    extra={email && "Un email au moins doit être fourni"}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={11}>
                  <Item
                    label="Email UBO (nom.prénom@univ-brest.fr)"
                    name="email_Ubo"
                    rules={rules["email_Ubo"]}
                    validateFirst
                    extra={email && "Un email au moins doit être fourni"}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
              </Row>

              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <Item
                    label="Mobile (exemple : +33 6 25 14 98 52)"
                    name="mobile"
                    rules={rules["phone"]}
                    validateFirst
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={11}>
                  <Item
                    label="Téléphone (exemple : +33 6 25 14 98 52)"
                    name="telephone"
                    validateFirst
                    rules={rules["telephone"]}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Item label="Adresse" name="adresse" rules={rules["adresse"]}>
                    <TextArea rows={4} showCount />
                  </Item>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={7}>
                  <Item
                    label="Code postal"
                    name="code_Postal"
                    rules={rules["codePostal"]}
                    validateFirst
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={7}>
                  <Item label="Ville" name="ville" rules={rules["ville"]}>
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={7}>
                  <Item label="Pays" name="pays_Origine" rules={rules["pays"]}>
                    <Select size="large">
                      {paysData.map((p) => (
                        <Option key={cuid()} value={get(p, "code")}>
                          {get(p, "signification")}
                        </Option>
                      ))}
                    </Select>
                  </Item>
                </Col>
              </Row>

              <Row type="flex" justify="space-between">
                <Col span={5}>
                  <Item
                    label="Formation"
                    name="code_Formation"
                    rules={rules["codeFormation"]}
                  >
                    <Select size="large">
                      {formationData.map((item) => (
                        <Option
                          key={cuid()}
                          value={get(item, "code_Formation")}
                        >
                          {get(item, "code_Formation")}
                        </Option>
                      ))}
                    </Select>
                  </Item>
                </Col>
                <Col span={5}>
                  <Item
                    label="Année Universitaire"
                    name="annee_Universitaire"
                    rules={rules["anneeUniversitaire"]}
                    extra={"exemple : 2020-2021"}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={5}>
                  <Item
                    label="Groupe TP"
                    name="groupe_Tp"
                    rules={rules["groupeTp"]}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
                <Col span={5}>
                  <Item
                    label="Groupe anglais"
                    name="groupe_Anglais"
                    rules={rules["groupeAnglais"]}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
              </Row>

              <Row>
                <Col span={12}>
                  <Item
                    label="Université d'origine"
                    name="universite_Origine"
                    rules={rules["universiteOrigine"]}
                  >
                    <Input size="large" />
                  </Item>
                </Col>
              </Row>

              <Row justify="end" gutter={[8, 8]}>
                <Col>
                  <Button className="back_button" onClick={onGoBack}>
                    <ArrowLeftOutlined />
                    Retour
                  </Button>
                </Col>
                <Col>
                  <Button
                    htmlType="submit"
                    className="create_button"
                    disabled={disabled || email}
                    loading={loading}
                  >
                    <CheckOutlined />
                    Valider
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const View = ({
  sexesQuery,
  formationQuery,
  paysQuery,
  onUpdate,
  updateQuery,
  studentQuery,
  onGoBack
}) => {
  const {
    idle: sexesIdle,
    errors: sexesErrors,
    loading: sexesLoading,
    data: sexesData
  } = sexesQuery;
  const {
    idle: formationIdle,
    errors: formationErrors,
    loading: formationLoading,
    data: formationData
  } = formationQuery;
  const {
    idle: paysIdle,
    errors: paysErrors,
    loading: paysLoading,
    data: paysData
  } = paysQuery;

  const {
    idle: studentIdle,
    errors: studentErrors,
    loading: studentLoading,
    data: student
  } = studentQuery;

  if (sexesIdle || formationIdle || paysIdle || studentIdle) return <div />;
  if (sexesErrors || formationErrors || paysErrors || studentErrors)
    return <Unknown />;
  if (sexesLoading || formationLoading || paysLoading || studentLoading)
    return <Loading />;

  return (
    <UpdateForm
      {...{
        student,
        paysData,
        formationData,
        sexesData,
        onUpdate,
        updateQuery,
        onGoBack
      }}
    />
  );
};

export default View;
