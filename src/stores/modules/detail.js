import { defineStore } from "pinia";
import { getDetailInfos } from "@/service";

const useDetailStore = defineStore("detail", {
  state: () => ({
    // 轮播图数据
    swipeData: [],
  }),
  actions: {
    async fetchDetailInfosData(houseId) {
      const res = await getDetailInfos(houseId);
      this.swipeData = res.data.mainPart.topModule.housePicture.housePics;
    },
  },
});

export default useDetailStore;
