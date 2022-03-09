import React, { memo, useState } from "react";
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
  DatePicker,
} from "antd";
import get from "lodash/get";
import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import cuid from "cuid";
import moment from "moment";
import { DATE_FORMAT } from "../../../utils/constants";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const rules = [{ required: true, message: "Le nom est requis" }];

const onSuccessCallBack = () =>
  notification.success({ message: "Ajouté avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const View = ({
  teacherQuery,
  formationsQuery,
  createQuery,
  onCreate,
  onPromotionsClick,
}) => {
  const {
    idle: formationIdle,
    errors: formationErrors,
    loading: formationsLoading,
    data: formationData,
  } = formationsQuery;
  const {
    idle: teacherIdle,
    errors: teacherErrors,
    loading: teacherLoading,
    data: teacherData,
  } = teacherQuery;

  const { loading: createLoading } = createQuery;

  const [teacher, setTeacher] = useState(null);
  const [formation, setFormation] = useState(null);
  const [form] = Form.useForm();

  if (formationIdle || teacherIdle) return <div />;
  if (formationErrors || teacherErrors) return <Unknown />;
  if (formationsLoading || teacherLoading) return <Loading />;

  const onFinish = (values) => {
    const {
      anneeUniversitaire,
      dateReponseLalp,
      dateReponseLp,
      dateRentree,
      ...rest
    } = values;

    const data = {
      dateReponseLalp: moment(dateReponseLalp).format(DATE_FORMAT),
      dateReponseLp: moment(dateReponseLp).format(DATE_FORMAT),
      dateRentree: moment(dateRentree).format(DATE_FORMAT),
      ...rest,
      enseignant: teacher,
      formation,
      id: {
        anneeUniversitaire:
          moment(anneeUniversitaire[0]).format("YYYY") +
          "-" +
          moment(anneeUniversitaire[1]).format("YYYY"),
        codeFormation: get(formation, "codeFormation"),
      },
    };
    onCreate(data, onSuccessCallBack, onErrorCallBack);
  };

  const onSelectTeacher = (id) => {
    const teacher = teacherData.find((el) => get(el, "noEnseignant") === id);
    setTeacher(teacher);
  };

  const onSelectFormation = (code) => {
    const formation = formationData.find(
      (el) => get(el, "codeFormation") === code
    );
    setFormation(formation);
  };

  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <Card className="card">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Row justify="space-between">
                <h1 className="h1 text-start">AJOUTER PROMOTION</h1>
                <Button
                  type="link"
                  className="link_button"
                  onClick={onPromotionsClick}
                >
                  PROMOTIONS
                </Button>
              </Row>

              <Divider className="d_10" />
              <Row justify="space-between">
                <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                  <Item
                    label="Nombre max d'étudiant"
                    name="nbMaxEtudiant"
                    rules={rules}
                  >
                    <InputNumber
                      type="number"
                      size="large"
                      min={0}
                      style={{ width: "100%" }}
                    />
                  </Item>
                  <Item
                    label="Lieu de Rentrée"
                    name="lieuRentree"
                    rules={rules}
                  >
                    <Input size="large" />
                  </Item>
                  <Item
                    label="Processus Stage"
                    name="processusStage"
                    rules={rules}
                  >
                    <Input size="large" />
                  </Item>
                  <Item
                    rules={rules}
                    label="Sigle Promotion"
                    name="siglePromotion"
                  >
                    <Input size="large" />
                  </Item>

                  <Item
                    label="Année Universitaire"
                    name="anneeUniversitaire"
                    rules={rules}
                  >
                    <RangePicker
                      size="large"
                      picker="year"
                      style={{ width: "100%" }}
                    />
                  </Item>
                </Col>

                <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                  <Item label="Date Rentree" name="dateRentree" rules={rules}>
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="Date de Rentree"
                    />
                  </Item>

                  <Item
                    label="Date Reponse La lp"
                    name="dateReponseLalp"
                    rules={rules}
                  >
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="Date Reponse La LP"
                    />
                  </Item>
                  <Item
                    label="Date Reponse LP"
                    name="dateReponseLp"
                    rules={rules}
                  >
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="Date Reponse LP"
                    />
                  </Item>

                  <Item label="Enseignant" name="enseignant" rules={rules}>
                    <Select size="large" onSelect={(id) => onSelectTeacher(id)}>
                      {teacherData.map((teacher) => (
                        <Option
                          key={cuid()}
                          value={get(teacher, "noEnseignant")}
                        >
                          {get(teacher, "nom", "").toUpperCase() +
                            " " +
                            get(teacher, "prenom")}
                        </Option>
                      ))}
                    </Select>
                  </Item>
                  <Item label="Formation" name="formation" rules={rules}>
                    <Select
                      size="large"
                      onSelect={(code) => onSelectFormation(code)}
                    >
                      {formationData.map((teacher) => (
                        <Option
                          key={cuid()}
                          value={get(teacher, "codeFormation")}
                        >
                          {get(teacher, "nomFormation")}
                        </Option>
                      ))}
                    </Select>
                  </Item>
                </Col>
              </Row>

              <Item label="Commentaire" name="commentaire">
                <TextArea rows={3} placeholder="commentaire..." />
              </Item>

              <Row justify="end">
                <Button
                  loading={createLoading}
                  htmlType="submit"
                  size="large"
                  className="create_button"
                >
                  AJOUTER
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default memo(View);
