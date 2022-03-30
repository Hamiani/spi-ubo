import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Form, Select, Divider, Card, DatePicker } from "antd";
import cuid from "cuid";
import get from "lodash/get";
import { isValidPhoneNumber } from "libphonenumber-js";
import { CheckOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import { hasSpecialCharacters, hasNumber } from "../../../utils/helpers";

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
        },
      }),
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
        },
      }),
    ],
    ["phone"]: [
      {
        required: false,
        message: "Ce champs est obligatoire.",
      },
      () => ({
        validator(_, value) {
          if (isValidPhoneNumber(value)) {
            return Promise.resolve();
          }
          return Promise.reject(
            "Le format du numéro de téléphone est invalide, exemple +33123456789"
          );
        },
      }),
    ],
    ["emailPerso"]: [
      {
        required: true,
        message: "Le format de l'email est invalide.",
        type: "email",
      },
    ],
    ["email_Ubo"]: [
      {
        required: false,
        message: "Ce champs est obligatoire.",
        type: "email",
      },
      () => ({
        validator(_, value) {
          const regex = new RegExp("@univ-brest.fr*$", "i");
          if (!regex.test(value)) {
            return Promise.reject(
              "L'email UBO doit respecter la forme nom.prénom@univ-brest.fr."
            );
          }
          return Promise.resolve();
        },
      }),
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
        },
      }),
    ],
    ["pays"]: [{ required: true, message: "Ce champs est obligatoire." }],
    ["ville"]: [{ required: true, message: "Ce champs est obligatoire." }],
    ["adresse"]: [{ required: true, message: "Ce champs est obligatoire." }],
    ["sexe"]: [{ required: true, message: "Ce champs est obligatoire." }],
    ["dateNaissance"]: [
      { required: true, message: "Ce champs est obligatoire." },
    ],
    ["lieuNaissance"]: [
      { required: true, message: "Ce champs est obligatoire." },
    ],
    ["nationalite"]: [{ required: true, message: "Ce champs est obligatoire." }],
    ["codeFormation"]: [
      { required: true, message: "Ce champs est obligatoire." },
    ],
    ["universiteOrigine"]: [
      { required: true, message: "Ce champs est obligatoire." },
    ],
    ["groupeTp"]: [{ required: false }],
    ["groupeAnglais"]: [{ required: false }],
  };
  


const View = ({
  updateQuery,
  onUpdate,
  onGoBack,
  paysQuery,
  sexesQuery,
  formationQuery,
  studentQuery
}) => {
    const {
        idle: sexesIdle,
        errors: sexesErrors,
        loading: sexesLoading,
        data: sexesData,
      } = sexesQuery;
      const {
        idle: formationIdle,
        errors: formationErrors,
        loading: formationLoading,
        data: formationData,
      } = formationQuery;
      const {
        idle: paysIdle,
        errors: paysErrors,
        loading: paysLoading,
        data: paysData,
      } = paysQuery;
      const {
        idle: studentIdle,
        errors: studentErrors,
        loading: studentLoading,
        data: student,
      } = studentQuery;

    

  const { loading } = updateQuery;
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form, student]);

  if (sexesIdle || formationIdle || paysIdle || studentIdle) return <div />;
  if (sexesErrors || formationErrors || paysErrors || studentErrors) return <Unknown />;
  if (sexesLoading || formationLoading || paysLoading || studentLoading ) return <Loading />;

  const onFinish = ({ nom, ...values }) =>
    onUpdate({
      id: get(student, "no_Etudiant"),
      no_Etudiant: get(student, "no_Etudiant"),
      nom: nom.toUpperCase(),
      ...values,
    });
  const handleCancel = () => {
    onGoBack();
  };
  const pays = paysData.find((p) => p.code === get(student, "pays")) || {};
  const sexe = sexesData.find((p) => p.code === get(student, "sexe")) || {};
  const formations = formationData.find((p) => p.code === get(student, "code_Formation")) || {};
  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        <Card className="card">
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
          <Form
            form={form}
            name={`form-${get(student, "no_Etudiant")}`}
            key={get(student, "no_Etudiant")}
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              adresse: get(student, "adresse"),
              dateNaissance : get(student,"date_Naissance"),
              lieuNaissance : get(student,"lieu_Naissance"),
              nationalite : get(student,"nationalite"),
              formation : get(student,"code_formation",""),
              universiteOrigine : get(student,"universite_origine"),
              groupeTp : get(student,"groupe_Tp"),
              groupeAnglais : get(student,"groupe_Anglais"),
              code_Postal: get(student, "code_Postal"),
              email_Perso: get(student, "email_Perso"),
              email_Ubo: get(student, "email_Ubo"),
              mobile: get(student, "mobile"),
              nom: get(student, "nom"),
              pays: get(pays, "code", ""),
              prenom: get(student, "prenom"),
              sexe: get(sexe, "code", ""),
              telephone: get(student, "telephone"),
              ville: get(student, "ville"),
            }}
            scrollToFirstError
          >
            <Row type="flex" justify="space-between">
              <Col span={9}>
                <Item name="prenom" label="Prénom" rules={rules["firstName"]}>
                  <Input size="large" />
                </Item>
              </Col>
              <Col span={9}>
                <Item label="Nom" name="nom" rules={rules["lastName"]}>
                  <Input size="large" />
                </Item>
              </Col>
              
              <Col span={4}>
                <Item label="Sexe" name="sexe" rules={rules["sexe"]}>
                  <Select>
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
            
            <Divider className="d_10" />

            <Row type="flex" justify="space-between">
              <Col span={5}>
                <Item
                  label="Date de naissance"
                  name="date_Naissance"
                  rules={rules["dateNaissance"]}
                  style={{ alignItems: "start" }}
                >
                  <DatePicker size="large" />
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
                  name="email_Perso"
                  rules={rules["email"]}
                >
                  <Input size="large" />
                </Item>
              </Col>
              <Col span={11}>
                <Item label="Email UBO" name="email_Ubo" rules={rules["email"]}>
                  <Input disabled size="large" />
                </Item>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col span={11}>
                <Item
                  label="Mobile"
                  name="mobile"
                  rules={rules["phone"]}
                  validateFirst
                >
                  <Input size="large" />
                </Item>
              </Col>
              <Col span={11}>
                <Item
                  label="Télephone"
                  name="telephone"
                  validateFirst
                  rules={rules["phone"]}
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
                  <Input type="number" size="large" />
                </Item>
              </Col>
              <Col span={7}>
                <Item label="Ville" name="ville" rules={rules["ville"]}>
                  <Input size="large" />
                </Item>
              </Col>
              <Col span={7}>
                <Item label="Pays" name="pays" rules={rules["pays"]}>
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
              <Col span={9}>
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
              <Col span={6}>
                <Item
                  label="Groupe TP"
                  name="groupe_Tp"
                  rules={rules["groupeTp"]}
                >
                  <Input size="large" />
                </Item>
              </Col>
              <Col span={6}>
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
                  name="universite_origine"
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
                  loading={loading}
                  htmlType="submit"
                  className="create_button"
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
