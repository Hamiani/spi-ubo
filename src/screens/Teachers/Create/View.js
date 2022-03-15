import React, { memo } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Form,
  Select,
  Divider,
} from "antd";
import { isValidPhoneNumber } from "libphonenumber-js";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

const rules = {
  ["lastName"]: [{ required: true, message: "Le nom est requis" }],
  ["firsName"]: [{ required: true, message: "Le prénom est requis" }],
  ["emailPerso"]: [
    { required: true, message: "Email est requis", type: "email" },
  ],
  ["emailUBO"]: [
    { required: false, message: "Email est requis", type: "email" },
  ],
  ["codePostale"]: [{ required: true, message: "Code postal est requis" }],
  ["pays"]: [{ required: true, message: "2 premières lettres !", max: 2 }],
  ["ville"]: [{ required: true, message: "la ville est requise" }],
  ["adresse"]: [{ required: true, message: "l'adresse est requise" }],
  ["codePostal"]: [{ required: true, message: "le code postal est requise" }],
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

const View = ({ createQuery, onCreate, handleClose }) => {
  const { loading } = createQuery;
  const [form] = Form.useForm();

  const onFinish = (data) => onCreate(data);

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
              <Item label="Nom" name="nom" rules={rules["lastName"]}>
                <Input size="large" />
              </Item>
            </Col>
            <Col span={9}>
              <Item name="prenom" label="Prénom" rules={rules["firsName"]}>
                <Input size="large" />
              </Item>
            </Col>
            <Col span={4}>
              <Item label="Sexe" name="sexe">
                <Select>
                  <Option key="H" value="H">
                    Homme
                  </Option>
                  <Option key="F" value="F">
                    Femme
                  </Option>
                </Select>
              </Item>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col span={11}>
              <Item
                label="Email personnel"
                name="emailPerso"
                rules={rules["email"]}
              >
                <Input size="large" />
              </Item>
            </Col>
            <Col span={11}>
              <Item label="Email UBO" name="emailUbo" rules={rules["email"]}>
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
                name="codePostal"
                rules={rules["codePostal"]}
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
                <Input size="large" max="2" />
              </Item>
            </Col>
          </Row>

          <Row justify="end" gutter={[8, 8]}>
            <Col>
              <Button danger size="small" onClick={handleCancel}>
                ANNULER
              </Button>
            </Col>
            <Col>
              <Button
                loading={loading}
                htmlType="submit"
                type="primary"
                size="small"
              >
                VALIDER
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default memo(View);
