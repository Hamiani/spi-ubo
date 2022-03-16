import React, { memo, useState } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Form,
  Select,
  Divider,
  InputNumber,
} from "antd";
import cuid from "cuid";
import { isValidPhoneNumber } from "libphonenumber-js";
import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import { hasNumber, hasSpecialCharacters } from "../../../utils/helpers";
import get from "lodash/get";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

const rules = {
  ["lastName"]: [
    { required: true, message: "Le nom est requis" },
    () => ({
      validator(_, value) {
        if (hasNumber(value)) {
          return Promise.reject("Le nom ne doit pas contenir des numéros");
        }
        if (hasSpecialCharacters(value)) {
          return Promise.reject(
            "Le nom ne doit pas contenir des caractères spéciaux"
          );
        }
        return Promise.resolve();
      },
    }),
  ],
  ["firstName"]: [
    { required: true, message: "Le prénom est requis" },
    () => ({
      validator(_, value) {
        if (hasNumber(value)) {
          return Promise.reject("Le prénom ne doit pas contenir des numéros");
        }
        if (hasSpecialCharacters(value)) {
          return Promise.reject(
            "Le prénom ne doit pas contenir des caractères spéciaux"
          );
        }
        return Promise.resolve();
      },
    }),
  ],
  ["emailPerso"]: [
    { required: false, message: "Email est requis", type: "email" },
  ],
  ["email_Ubo"]: [
    { required: true, message: "Email est requis", type: "email" },
    () => ({
      validator(_, value) {
        const regex = new RegExp("@univ-brest.fr*$", "i");
        if (!regex.test(value)) {
          return Promise.reject(
            "l'email ubo doit respecter la forme nom.prénom@univ-brest.fr"
          );
        }
        return Promise.resolve();
      },
    }),
  ],
  ["codePostale"]: [{ required: true, message: "Code postal est requis" }],
  ["pays"]: [{ required: true, message: "veuillez choisir un pays" }],
  ["ville"]: [
    { required: true, message: "la ville est requise" },
    () => ({
      validator(_, value) {
        if (hasNumber(value)) {
          return Promise.reject("La ville ne doit pas contenir des numéros");
        }
        if (hasSpecialCharacters(value)) {
          return Promise.reject(
            "La ville ne doit pas contenir des caractères spéciaux"
          );
        }
        return Promise.resolve();
      },
    }),
  ],
  ["adresse"]: [{ required: true, message: "l'adresse est requise" }],
  ["codePostal"]: [{ required: true, message: "le code postal est requise" }],
  ["type"]: [{ required: true, message: "le type est requise" }],
  ["phone"]: [
    {
      required: true,
      message: "Le numéro de télephone est requis",
    },
    () => ({
      validator(_, value) {
        if (isValidPhoneNumber(value)) {
          return Promise.resolve();
        }
        return Promise.reject("Le numéro de télephone est invalide");
      },
    }),
  ],
};

const View = ({
  createQuery,
  onCreate,
  handleClose,
  typesQuery,
  paysQuery,
  sexesQuery,
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

  const { loading } = createQuery;
  const [form] = Form.useForm();

  const [typeEnseignant, setTypeEnseignant] = useState(null);

  if (sexesIdle || paysIdle || typesIdle) return <div />;
  if (sexesErrors || paysErrors || typesErrors) return <Unknown />;
  if (sexesLoading || paysLoading || typesLoading) return <Loading />;

  const onFinish = (data) =>
    onCreate({
      no_Enseignant: Math.floor(1000 + Math.random() * 9000),
      ...data,
    });

  const handleCancel = () => {
    handleClose();
    form.resetFields();
  };

  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ sexe: "H" }}
        >
          <Row
            style={{ marginBottom: 0 }}
            justify="space-between"
            align="center"
          >
            <Col>
              <h1 className="h1">AJOUTER ENSEIGNANT</h1>
            </Col>
          </Row>

          <Divider className="d_10" />
          <Row type="flex" justify="space-between">
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
            <Col span={4}>
              <Item label="Sexe" name="sexe">
                <Select>
                  {sexesData.map((s) => (
                    <Option key={get(s, "code")} value={get(s, "abreviation")}>
                      {get(s, "signification")}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
          </Row>

          <Row type="flex" justify="space-between">
            <Col span={22}>
              <Item
                label="Type enseignant"
                name="type"
                value={typeEnseignant}
                rules={rules["type"]}
              >
                <Select
                  size="large"
                  onSelect={(code) => setTypeEnseignant(code)}
                >
                  {typesData.map((type) => (
                    <Option key={cuid()} value={get(type, "code")}>
                      {get(type, "signification")}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
          </Row>

          <Row type="flex" justify="space-between">
            <Col span={11}>
              <Item
                label="Email personnel"
                name="email_Perso"
                rules={rules["emailPerso"]}
                validateFirst
              >
                <Input size="large" />
              </Item>
            </Col>
            <Col span={11}>
              <Item
                label="Email UBO"
                name="email_Ubo"
                rules={rules["email_Ubo"]}
                validateFirst
              >
                <Input size="large" />
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
              >
                <InputNumber
                  type="number"
                  size="large"
                  style={{ width: "100%" }}
                  min={0}
                />
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
              <Button className="back_button" onClick={handleCancel}>
                Retour
              </Button>
            </Col>
            <Col>
              <Button
                loading={loading}
                htmlType="submit"
                className="create_button"
              >
                Valider
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default memo(View);
