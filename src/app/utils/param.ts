export function setParams(route: string, params: { [key: string]: any }) {
  Object.keys(params).forEach((key) => {
    route = route.replace(`:${key}`, params[key]);
  });
  return route;
}
