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

const rules = {
  ["formation"]: [
    { required: true, message: "Veuillez choisir une formation" },
  ],
  ["annee_Universitaire"]: [
    { required: true, message: "Veuillez choisir une année universitaire" },
  ],
  ["sigle_Promotion"]: [
    {
      required: true,
      message: "Veuillez renseignez un sigle pour cette promotion",
    },
  ],
  ["enseignant"]: [
    { required: true, message: "Veuillez choisir un enseignant" },
  ],
  ["nb_Max_Etudiant"]: [
    {
      required: true,
      message:
        "Veuillez renseignez un nombre maximum d'étudiant pour cette promotion",
    },
  ],
  ["date_Rentree"]: [
    {
      required: true,
      message:
        "Veuillez renseignez un nombre maximum d'étudiant pour cette promotion",
    },
  ],
  // ["date_Reponse_Lp"]: [
  // { required: true, message: "le champ Date réponse LP est requis" },
  // ],
  ["date_Reponse_Lalp"]: [
    { required: true, message: "le champ Date réponse LALP est requis" },
    ({ getFieldValue }) => ({
      validator(_, value) {
        const dateLP = getFieldValue("date_Reponse_Lp");
        if (dateLP !== undefined) {
          if (value > moment(dateLP)) {
            return Promise.resolve();
          }
          return Promise.reject(
            "Le champ Date LALP doit etre infèrieure à la date LP"
          );
        }
        return Promise.resolve();
      },
    }),
  ],
  ["lieu_Rentree"]: [
    { required: true, message: "le champ lieu rentrée est requis" },
  ],
  ["date_Reponse_Lp"]: [
    {
      required: true,
      message: "le champ Date réponse LP est requis",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        const dateRentree = getFieldValue("date_Rentree");
        if (dateRentree !== undefined) {
          if (value > moment(dateRentree)) {
            return Promise.resolve();
          }
          return Promise.reject(
            "Le champ Date LP doit etre infèrieure à la date de rentrée"
          );
        }
        // return Promise.resolve();
      },
    }),
  ],
};

const onSuccessCallBack = () =>
  notification.success({ message: "Ajouté avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const View = ({
  teacherQuery,
  formationsQuery,
  createQuery,
  onCreate,
  sallesQuery,
  handleClose,
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
  const [salle, setSalle] = useState(null);
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
      commentaire,
      nb_Max_Etudiant,
      sigle_Promotion,
    } = values;

    const data = {
      id: {
        annee_Universitaire:
          moment(annee_Universitaire[0]).format("YYYY") +
          "-" +
          moment(annee_Universitaire[1]).format("YYYY"),
        code_Formation: get(formation, "codeFormation"),
      },
      commentaire,
      date_Reponse_Lalp: moment(date_Reponse_Lalp).format(DATE_FORMAT),
      date_Reponse_Lp: moment(date_Reponse_Lp).format(DATE_FORMAT),
      date_Rentree: moment(date_Rentree).format(DATE_FORMAT),
      Lieu_Rentree: salle,
      nb_Max_Etudiant,
      sigle_Promotion,
      enseignant: teacher,
    };
    console.log("data", data);

    onCreate(data, onSuccessCallBack, onErrorCallBack);
  };

  const onSelectTeacher = (id) => {
    const teacher = teacherData.find((el) => get(el, "no_Enseignant") === id);
    setTeacher(teacher);
  };

  const onSelectFormation = (code) => {
    const formation = formationData.find(
      (el) => get(el, "codeFormation") === code
    );
    setFormation(formation);
  };

  const handleCancel = () => {
    handleClose();
    form.resetFields();
  };

  const disabledDate = current => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'year') >= 1;
    // const tooEarly = dates[1] && dates[1].diff(current, 'year') > 1;
    return tooLate;
  };

  return (
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
                    <Option key={cuid()} value={get(teacher, "codeFormation")}>
                      {get(teacher, "nomFormation")}
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
                  onCalendarChange={val => setDates(val)}
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
                label="Enseignant"
                name="enseignant"
                rules={rules["enseignant"]}
              >
                <Select size="large" onSelect={(id) => onSelectTeacher(id)}>
                  {teacherData.map((teacher) => (
                    <Option key={cuid()} value={get(teacher, "no_Enseignant")}>
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
            <Col span={6}>
              <Item
                label="Nombre max d'étudiant"
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
                label="Date Rentree"
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

            <Col span={7}>
              <Item
                label="Date Reponse liste principale"
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
                label="Date Reponse Liste d'attente"
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
          </Row>

          <Row type="flex" justify="space-between">
            <Col span={8}>
              <Item
                label="Lieu de Rentrée"
                name="lieu_Rentree"
                rules={rules["lieu_Rentree"]}
              >
                <Select size="large" onSelect={(value) => setSalle(value)}>
                  {sallesData.map((salle) => (
                    <Option key={cuid()} value={salle}>
                      {salle}
                    </Option>
                  ))}
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
              <Button danger size="small" onClick={handleCancel}>
                ANNULER
              </Button>
            </Col>
            <Col>
              <Button
                loading={createLoading}
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
