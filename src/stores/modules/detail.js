import { defineStore } from "pinia";
import { getDetailInfos } from "@/service";

const useDetailStore = defineStore("detail", {
  state: () => ({
    datailInfos: {},
  }),
  actions: {
    async fetchDetailInfosData(houseId) {
      const res = await getDetailInfos(houseId);
      console.log(res);
      this.datailInfos = res.data;
    },
  },
});

export default useDetailStore;
