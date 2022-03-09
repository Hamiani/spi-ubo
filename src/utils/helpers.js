import isEmpty from "lodash/isEmpty";

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
