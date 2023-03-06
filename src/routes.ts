export interface IRoute {
  path: string;
  name: string;
  onModal?: boolean;
  onModalAndNavbar?: boolean;
  outMenu?: boolean;
  soon?: boolean;
  forAdmins?: boolean;
  new?: boolean;
}
export const routeNames = {
  home: "/",
};

export const routes: {} = {};

const getRoutesArr = () => {
  const arr: IRoute[] = [];
  for (const key in routes) {
    /* @ts-ignore */
    arr.push(routes[key]);
  }
  return arr;
};

export const routesArr: IRoute[] = getRoutesArr();

export const getWebUrl = (path = "") => {
  return `${window.location.origin + path}`;
};

export const isActiveRoute = (routeName: string, location: string) => {
  if (routeName === "/") {
    return location === routeName;
  }
  return location.includes(routeName);
};
