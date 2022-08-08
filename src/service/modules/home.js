import gxRequest from "../request";

export function getHomeHotSuggests() {
  return gxRequest.get({
    url: "/home/hotSuggests",
  });
}

export function getHomeCategories() {
  return gxRequest.get({
    url: "/home/categories",
  });
}

export function getHomeHouseList(currentPage) {
  return gxRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
