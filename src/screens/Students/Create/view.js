import React, { useState } from "react";

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
import isEmpty from "lodash/isEmpty";
import cuid from "cuid";

import { isValidPhoneNumber } from "libphonenumber-js";

import "./style.css";
import { DATE_FORMAT } from "../../../utils/constants";
import moment from "moment";

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
      message: "Ce champs est obligatoire.",
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
  ["anneeUniversitaire"]: [
    { required: true, message: "Ce champs est obligatoire." }
  ]
};

const View = ({
  sexesQuery,
  formationQuery,
  paysQuery,
  handleClose,
  onCreate,
  createQuery
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

  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState(true);

  const { loading } = createQuery;

  if (sexesIdle || formationIdle || paysIdle) return <div />;
  if (sexesErrors || formationErrors || paysErrors) return <Unknown />;
  if (sexesLoading || formationLoading || paysLoading) return <Loading />;

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
    onCreate({
      date_Naissance: moment(date_Naissance).format("DD/MM/YY"),
      ...rest
    });
    setTimeout(() => {
      form.resetFields();
    }, 3000);
  };

  const handleCancel = () => {
    handleClose();
    form.resetFields();
  };

  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        <Card className="card">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            scrollToFirstError
            onFieldsChange={(_, fields) => onFieldsChange(fields)}
          >
            <Row
              style={{ marginBottom: 0 }}
              justify="space-between"
              align="center"
            >
              <Col>
                <h1 className="h1">AJOUTER UN ETUDIANT</h1>
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
                    format={DATE_FORMAT}
                    locale={locale}
                    size="large"
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
                  label="Email UBO (exemple : nom.prénom@univ-brest.fr)"
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
                  <TextArea rows={3} />
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
                    {formationData.map((f) => (
                      <Option key={cuid()} value={get(f, "code_Formation")}>
                        {get(f, "code_Formation")}
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
                <Item label="Groupe TP" name="groupe_Tp">
                  <Input size="large" />
                </Item>
              </Col>
              <Col span={5}>
                <Item label="Groupe anglais" name="groupe_Anglais">
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
                <Button className="back_button" onClick={handleCancel}>
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
  );
};

export default View;
