import gxRequest from "../request";

export function getCityAll() {
  return gxRequest.get({
    url: "/city/all",
  });
}
