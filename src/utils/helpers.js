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
