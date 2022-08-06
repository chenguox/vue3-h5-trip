import gxRequest from "../request";

export function getHomeHotSuggests() {
  return gxRequest.get({
    url: "/home/hotSuggests",
  });
}
