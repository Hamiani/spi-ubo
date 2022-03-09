import React, { memo } from "react";
import {
  Row,
  Col,
  Card,
  Input,
  Button,
  Form,
  Select,
  Divider,
  InputNumber,
  notification,
} from "antd";
import { isValidPhoneNumber } from "libphonenumber-js";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

const rules = {
  ["lastName"]: [{ required: true, message: "Le nom est requis" }],
  ["firsName"]: [{ required: true, message: "Le prénom est requis" }],
  ["email"]: [{ required: true, message: "Email est requis", type: "email" }],
  ["codePostale"]: [{ required: true, message: "Code postal est requis" }],
  ["pays"]: [{ required: true, message: "2 premières lettres !", max: 2 }],
  ["ville"]: [{ required: true, message: "la ville est requise" }],
  ["adresse"]: [{ required: true, message: "l'adresse est requise" }],
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

const onSuccessCallBack = () =>
  notification.success({ message: "Ajouté avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const View = ({ createQuery, onCreate, onTeachersClick }) => {
  const { loading } = createQuery;
  const [form] = Form.useForm();
  const onFinish = (data) =>
    onCreate(
      { noEnseignant: Math.floor(1000 + Math.random() * 9000), ...data },
      onSuccessCallBack,
      onErrorCallBack
    );

  return (
    <div className="container__antd p-top-20">
      <Row type="flex" justify="center">
        <Col span={24}>
          <div>
            <Card className="card">
              <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                initialValues={{ sexe: "H" }}
              >
                <Row justify="space-between">
                  <Col>
                    <h1 className="h1 text-start">AJOUTER ENSEIGNANTS</h1>
                  </Col>
                  <Col>
                    <Button
                      type="link"
                      className="link_button"
                      onClick={onTeachersClick}
                    >
                      ENSEIGNANTS
                    </Button>
                  </Col>
                </Row>

                <Divider className="d_10" />
                <Row type="flex" justify="space-between">
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Item label="Nom" name="nom" rules={rules["lastName"]}>
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Email personnel"
                      name="emailPerso"
                      rules={rules["email"]}
                    >
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Mobile"
                      name="mobile"
                      rules={rules["phone"]}
                      validateFirst
                    >
                      <Input size="large" />
                    </Item>
                    <Item
                      rules={rules["codePostale"]}
                      label="Code Postale"
                      name="codePostal"
                    >
                      <InputNumber
                        type="number"
                        size="large"
                        style={{ width: "100%" }}
                      />
                    </Item>
                    <Item label="Pays" name="pays" rules={rules["pays"]}>
                      <Input size="large" max="2" />
                    </Item>
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

                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Item
                      name="prenom"
                      label="Prénom"
                      rules={rules["firsName"]}
                    >
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Email UBO"
                      name="emailUbo"
                      rules={rules["email"]}
                    >
                      <Input size="large" />
                    </Item>
                    <Item
                      label="Télephone"
                      name="telephone"
                      validateFirst
                      rules={rules["phone"]}
                    >
                      <Input size="large" />
                    </Item>
                    <Item label="Ville" name="ville" rules={rules["ville"]}>
                      <Input size="large" />
                    </Item>
                    <Item label="Type" name="type">
                      <Input size="large" />
                    </Item>
                  </Col>
                </Row>

                <Item label="Adresse" name="adresse" rules={rules["adresse"]}>
                  <TextArea rows={3} />
                </Item>
                <Row justify="end">
                  <Button
                    loading={loading}
                    htmlType="submit"
                    size="large"
                    className="create_button"
                  >
                    AJOUTER
                  </Button>
                </Row>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(View);
