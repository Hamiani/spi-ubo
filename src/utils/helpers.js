import isEmpty from "lodash/isEmpty";
import { notification } from "antd";

export const openNotification = ({ type = "info", message = "" }) => {
  notification[type]({
    message,
    style: {
      width: 400,
      background: "#f0f0f0",
      borderRadius: "0.7em",
    },
  });
};

export const MapRoutes = (routes, Layout) =>
  routes.map(({ component: Component, ...rest }) => ({
    component: Layout(Component),
    ...rest,
  }));

export const isEvenNumber = (num) => num % 2 === 0;

export const isAuthenticated = (authorization) => {
  const { accessToken, user } = authorization;
  return !!accessToken && !isEmpty(user);
};

export const hasNumber = (myString) => /\d/.test(myString);
export const hasSpecialCharacters = (myString) =>
  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(myString);

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

export const removeSpace = (myString) =>
  myString && myString.replace(/\s/g, "");
