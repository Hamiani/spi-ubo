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
  DatePicker,
} from "antd";
import get from "lodash/get";
import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import cuid from "cuid";
import moment from "moment";
import { DATE_FORMAT, DATE_MESSAGES } from "../../../utils/constants";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const rules = {
  ["formation"]: [
    { required: true, message: "Veuillez sélectionner une formation." },
  ],
  ["annee_Universitaire"]: [
    {
      required: true,
      message: "Veuillez sélectionner une année universitaire.",
    },
  ],
  ["sigle_Promotion"]: [
    {
      required: true,
      message: "Veuillez renseigner un sigle pour cette promotion.",
    },
  ],
  ["enseignant"]: [
    {
      required: true,
      message: "Veuillez sélectionner un enseignant responsable.",
    },
  ],
  ["nb_Max_Etudiant"]: [
    {
      required: true,
      message:
        "Veuillez renseigner un nombre maximum d'étudiants pour cette promotion.",
    },
  ],
  ["date_Rentree"]: [
    {
      required: true,
      message: "Veuillez renseigner une date de rentrée.",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        const dateReponseLalp = getFieldValue("date_Reponse_Lalp");
        const dateReponseLp = getFieldValue("date_Reponse_Lp");

        if (dateReponseLalp !== undefined && dateReponseLp !== undefined) {
          const comparator1 = moment(dateReponseLalp).isSameOrAfter(
            moment(value),
            "day"
          );

          const comparator2 = moment(dateReponseLp).isSameOrAfter(
            moment(value),
            "day"
          );
          if (comparator1 || comparator2) {
            return Promise.reject(DATE_MESSAGES.dateRentree);
          }
        }
        return Promise.resolve();
      },
    }),
  ],
  ["date_Reponse_Lalp"]: [
    {
      required: true,
      message: "Veuillez renseigner une date de réponse à la liste principale.",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        const dateRentree = getFieldValue("date_Rentree");
        const dateReponseLp = getFieldValue("date_Reponse_Lp");

        if (dateRentree !== undefined && dateReponseLp !== undefined) {
          const comparator1 = moment(dateRentree).isSameOrBefore(
            moment(value),
            "day"
          );
          const comparator2 = moment(dateReponseLp).isSameOrAfter(
            moment(value),
            "day"
          );
          if (comparator1 || comparator2) {
            return Promise.reject(DATE_MESSAGES.dateReponseLalp);
          }
        }
        return Promise.resolve();
      },
    }),
  ],
  ["lieu_Rentree"]: [
    { required: true, message: "Veuillez sélectionner un lieu de rentrée." },
  ],
  ["date_Reponse_Lp"]: [
    {
      required: true,
      message: "Veuillez renseigner une date de réponse à la liste principale.",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        const dateRentree = getFieldValue("date_Rentree");
        const dateReponseLalp = getFieldValue("date_Reponse_Lalp");

        if (dateRentree !== undefined && dateReponseLalp !== undefined) {
          const comparator1 = moment(dateRentree).isSameOrBefore(
            moment(value),
            "day"
          );
          const comparator2 = moment(dateReponseLalp).isSameOrBefore(
            moment(value),
            "day"
          );
          if (comparator1 || comparator2) {
            return Promise.reject(DATE_MESSAGES.dateReponseLp);
          }
        }
        return Promise.resolve();
      },
    }),
  ],
};

const View = ({
  teacherQuery,
  formationsQuery,
  createQuery,
  onCreate,
  sallesQuery,
  handleClose,
  onRetourClick
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
  const {
    idle: sallesIdle,
    errors: sallesErrors,
    laoding: sallesLoading,
    data: sallesData,
  } = sallesQuery;

  const { loading: createLoading } = createQuery;

  const [dates, setDates] = useState([]);
  const [teacher, setTeacher] = useState(null);
  const [formation, setFormation] = useState(null);
  const [form] = Form.useForm();

  if (formationIdle || teacherIdle || sallesIdle) return <div />;
  if (formationErrors || teacherErrors || sallesErrors) return <Unknown />;
  if (formationsLoading || teacherLoading || sallesLoading) return <Loading />;

  const onFinish = (values) => {
    const {
      annee_Universitaire,
      date_Reponse_Lalp,
      date_Reponse_Lp,
      date_Rentree,
      ...rest
    } = values;

    const data = {
      ...rest,
      id: {
        annee_Universitaire:
          moment(annee_Universitaire[0]).format("YYYY") +
          "-" +
          moment(annee_Universitaire[1]).format("YYYY"),
        code_Formation: get(formation, "code_Formation"),
      },
      date_Reponse_Lalp: moment(date_Reponse_Lalp).format(DATE_FORMAT),
      date_Reponse_Lp: moment(date_Reponse_Lp).format(DATE_FORMAT),
      date_Rentree: moment(date_Rentree).format(DATE_FORMAT),
      enseignant: teacher,
    };

    onCreate(data);
  };

  const onSelectTeacher = (id) => {
    const teacher = teacherData.find((el) => get(el, "no_Enseignant") === id);
    setTeacher(teacher);
  };

  const onSelectFormation = (code) => {
    const formation = formationData.find(
      (el) => get(el, "code_Formation") === code
    );
    setFormation(formation);
  };

  const handleCancel = () => {
    handleClose();
    form.resetFields();
  };

  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "year") >= 3;
    return tooLate;
  };
  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <Row justify="space-between">
            <Col>
              <h1 className="h1 text-start">AJOUTER PROMOTION</h1>
            </Col>
          </Row>

          <Divider className="d_10" />
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Row type="flex" justify="space-between">
              <Col span={7}>
                <Item
                  label="Formation"
                  name="formation"
                  rules={rules["formation"]}
                >
                  <Select
                    size="large"
                    onSelect={(code) => onSelectFormation(code)}
                  >
                    {formationData.map((teacher) => (
                      <Option
                        key={cuid()}
                        value={get(teacher, "code_Formation")}
                      >
                        {get(teacher, "nom_Formation")}
                      </Option>
                    ))}
                  </Select>
                </Item>
              </Col>
              <Col span={7}>
                <Item
                  label="Année Universitaire"
                  name="annee_Universitaire"
                  rules={rules["annee_Universitaire"]}
                >
                  <RangePicker
                    size="large"
                    picker="year"
                    style={{ width: "100%" }}
                    disabledDate={disabledDate}
                    onCalendarChange={(val) => setDates(val)}
                  />
                </Item>
              </Col>
              <Col span={7}>
                <Item
                  rules={rules["sigle_Promotion"]}
                  label="Sigle Promotion"
                  name="sigle_Promotion"
                >
                  <Input size="large" />
                </Item>
              </Col>
            </Row>

            <Row type="flex" justify="start" gutter={[80, 0]}>
              <Col span={12}>
                <Item
                  label="Enseignant Responsable"
                  name="enseignant"
                  rules={rules["enseignant"]}
                >
                  <Select size="large" onSelect={(id) => onSelectTeacher(id)}>
                    {teacherData.map((teacher) => (
                      <Option
                        key={cuid()}
                        value={get(teacher, "no_Enseignant")}
                      >
                        {get(teacher, "nom", "").toUpperCase() +
                          " " +
                          get(teacher, "prenom") +
                          "  | " +
                          get(teacher, "email_Ubo")}
                      </Option>
                    ))}
                  </Select>
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  label="Nombre maximum d'étudiants"
                  name="nb_Max_Etudiant"
                  rules={rules["nb_Max_Etudiant"]}
                >
                  <InputNumber
                    type="number"
                    size="large"
                    min={0}
                    style={{ width: "100%" }}
                  />
                </Item>
              </Col>
            </Row>

            <Row type="flex" justify="space-between">
              <Col span={7}>
                <Item
                  label="Date de réponse à liste principale"
                  name="date_Reponse_Lp"
                  rules={rules["date_Reponse_Lp"]}
                  validateFirst
                >
                  <DatePicker
                    size="large"
                    style={{ width: "100%" }}
                    placeholder="Date Reponse liste principale"
                  />
                </Item>
              </Col>
              <Col span={7}>
                <Item
                  label="Date de réponse à la liste d'attente"
                  name="date_Reponse_Lalp"
                  rules={rules["date_Reponse_Lalp"]}
                  validateFirst
                >
                  <DatePicker
                    size="large"
                    style={{ width: "100%" }}
                    placeholder="Date Reponse Liste d'attente"
                  />
                </Item>
              </Col>
              <Col span={7}>
                <Item
                  label="Date de rentrée"
                  name="date_Rentree"
                  rules={rules["date_Rentree"]}
                  validateFirst
                >
                  <DatePicker
                    size="large"
                    style={{ width: "100%" }}
                    placeholder="Date de Rentree"
                  />
                </Item>
              </Col>
            </Row>

            <Row type="flex" justify="space-between">
              <Col span={8}>
                <Item
                  label="Lieu de Rentrée"
                  name="lieu_Rentree"
                  rules={rules["lieu_Rentree"]}
                >
                  <Select size="large">
                    {sallesData.map((salle) => (
                      <Option key={cuid()} value={get(salle, "code")}>
                        {get(salle, "signification")}
                      </Option>
                    ))}
                    x
                  </Select>
                </Item>
              </Col>
            </Row>

            <Row type="flex" justify="space-between">
              <Col span={24}>
                <Item label="Commentaire" name="commentaire">
                  <TextArea rows={3} placeholder="commentaire..." />
                </Item>
              </Col>
            </Row>

            <Row justify="end" gutter={[8, 8]}>
              <Col>
                <Button className="back_button" onClick={onRetourClick}>
                  Retour
                </Button>
              </Col>
              <Col>
                <Button
                  loading={createLoading}
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
    </div>
  );
};

export default memo(View);
