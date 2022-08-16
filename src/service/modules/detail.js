import gxRequest from "../request";

export function getDetailInfos(houseId) {
  return gxRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
