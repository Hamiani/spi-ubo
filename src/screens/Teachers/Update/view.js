import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Form, Select, Divider, Card } from "antd";
import cuid from "cuid";
import get from "lodash/get";
import isNil from "lodash/isNil";

import { isValidPhoneNumber } from "libphonenumber-js";
import { CheckOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import { hasNumber } from "../../../utils/helpers";

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
  ["emailPerso"]: [
    {
      required: false,
      message: "Le format de l'email est invalide.",
      type: "email",
    },
  ],
  ["email_Ubo"]: [
    {
      required: true,
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
  ["pays"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["ville"]: [{ required: true, message: "La ville est obligatoire." }],
  ["adresse"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["codePostal"]: [
    { required: true, message: "Ce champs est obligatoire." },
    () => ({
      validator(_, value) {
        if (value.length > 10) {
          return Promise.reject("La code postal doit contenir 10 chiffres.");
        }
        return Promise.resolve();
      },
    }),
  ],
  ["type"]: [{ required: true, message: "Ce champs est obligatoire." }],
  ["phone"]: [
    {
      required: true,
      message: "Ce champs est obligatoire.",
    },
    () => ({
      validator(_, value) {
        if (isValidPhoneNumber(value)) {
          return Promise.resolve();
        }
        return Promise.reject("Le format du numéro de téléphone est invalide.");
      },
    }),
  ],
  ["sexe"]: [
    {
      required: true,
      message: "Ce champs est obligatoire.",
    },
  ],
};

const View = ({
  updateQuery,
  onUpdate,
  onGoBack,
  typesQuery,
  paysQuery,
  sexesQuery,
  teacherQuery,
}) => {
  const {
    idle: typesIdle,
    errors: typesErrors,
    loading: typesLoading,
    data: typesData,
  } = typesQuery;

  const {
    idle: paysIdle,
    errors: paysErrors,
    loading: paysLoading,
    data: paysData,
  } = paysQuery;

  const {
    idle: sexesIdle,
    errors: sexesErrors,
    loading: sexesLoading,
    data: sexesData,
  } = sexesQuery;

  const {
    idle: teacherIdle,
    errors: teacherErrors,
    loading: teacherLoading,
    data: teacher,
  } = teacherQuery;

  const { loading } = updateQuery;
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form, teacher]);

  const [disabled, setDisabled] = useState(true);

  if (sexesIdle || paysIdle || typesIdle || teacherIdle) return <div />;
  if (sexesErrors || paysErrors || typesErrors || teacherErrors)
    return <Unknown />;
  if (sexesLoading || paysLoading || typesLoading || teacherLoading)
    return <Loading />;

  const onFinish = ({ nom, ...values }) =>
    onUpdate({
      id: get(teacher, "no_Enseignant"),
      no_Enseignant: get(teacher, "no_Enseignant"),
      nom: nom.toUpperCase(),
      ...values,
    });

  const onFieldsChange = (fields) => {
    const controlledFields = fields.map((e) =>
      e.name[0] === "email_Perso"
        ? {
            ...e,
            required: false,
          }
        : {
            ...e,
            required: true,
          }
    );
    setDisabled(
      controlledFields.some(
        ({ errors, value, required }) =>
          (required && (errors.length > 0 || isNil(value))) || errors.length > 0
      )
    );
  };

  const pays = paysData.find((p) => p.code === get(teacher, "pays")) || {};
  const sexe = sexesData.find((p) => p.code === get(teacher, "sexe")) || {};
  const type = typesData.find((p) => p.code === get(teacher, "type")) || {};
  return (
    <div className="container__antd p-top-20">
      <Col span={24}>
        <Row type="flex" justify="center">
          <Col span={24}>
            <Card className="card">
              <Row
                style={{ marginBottom: 0 }}
                justify="space-between"
                align="center"
              >
                <Col>
                  <h1 className="h1">MODIFIER UN ENSEIGNANT</h1>
                </Col>
              </Row>

              <Divider className="d_10" />
              <Form
                form={form}
                name={`form-${get(teacher, "no_Enseignant")}`}
                key={get(teacher, "no_Enseignant")}
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                  adresse: get(teacher, "adresse"),
                  code_Postal: get(teacher, "code_Postal"),
                  email_Perso: get(teacher, "email_Perso"),
                  email_Ubo: get(teacher, "email_Ubo"),
                  mobile: get(teacher, "mobile"),
                  nom: get(teacher, "nom"),
                  pays: get(pays, "code", ""),
                  prenom: get(teacher, "prenom"),
                  sexe: get(sexe, "code", ""),
                  telephone: get(teacher, "telephone"),
                  type: get(type, "code", ""),
                  ville: get(teacher, "ville"),
                }}
                scrollToFirstError
                onFieldsChange={(_, fields) => onFieldsChange(fields)}
              >
                <Row type="flex" justify="space-between">
                  <Col span={9}>
                    <Item
                      name="prenom"
                      label="Prénom"
                      rules={rules["firstName"]}
                    >
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

                <Row type="flex" justify="space-between">
                  <Col span={24}>
                    <Item
                      label="Type enseignant"
                      name="type"
                      rules={rules["type"]}
                    >
                      <Select size="large">
                        {typesData.map((type) => (
                          <Option key={cuid()} value={get(type, "code")}>
                            {get(type, "code", "")}
                            <span style={{ paddingRight: 10, paddingLeft: 10 }}>
                              |
                            </span>
                            {get(type, "signification", "")}
                          </Option>
                        ))}
                      </Select>
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
                      rules={rules["phone"]}
                    >
                      <Input size="large" />
                    </Item>
                  </Col>
                </Row>
                <Row type="flex" justify="space-between">
                  <Col span={11}>
                    <Item
                      label="Email UBO"
                      name="email_Ubo"
                      rules={rules["email_Ubo"]}
                    >
                      <Input disabled size="large" />
                    </Item>
                  </Col>
                  <Col span={11}>
                    <Item
                      label="Email personnel"
                      name="email_Perso"
                      rules={rules["emailPerso"]}
                    >
                      <Input size="large" />
                    </Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Item
                      label="Adresse"
                      name="adresse"
                      rules={rules["adresse"]}
                    >
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

                <Row justify="end" gutter={[8, 8]}>
                  <Col>
                    <Button className="back_button" onClick={onGoBack}>
                      <ArrowLeftOutlined />
                      Retour
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      loading={loading}
                      disabled={disabled}
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
      </Col>
    </div>
  );
};

export default View;
