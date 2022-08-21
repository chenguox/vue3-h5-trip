import { defineStore } from "pinia";
import { getDetailInfos } from "@/service";

const useDetailStore = defineStore("detail", {
  state: () => ({
    // 轮播图数据
    swipeData: [],
    // 详情标题
    houseName: "",
    // 详情标签
    houseTags: [],
    // 详情评论
    commentBrief: {},
    // 详情周边
    nearByPosition: {},
    // 房屋设施
    houseFacility: {},
    // 房东介绍
    landlordModule: {},
    // 热门评论
    commentModule: {},
  }),
  actions: {
    async fetchDetailInfosData(houseId) {
      const res = await getDetailInfos(houseId);
      const {
        housePicture,
        houseName,
        houseTags,
        commentBrief,
        nearByPosition,
      } = res.data.mainPart.topModule;
      this.swipeData = housePicture.housePics;
      this.houseName = houseName;
      this.houseTags = houseTags;
      this.commentBrief = commentBrief;
      this.nearByPosition = nearByPosition;
      const { facilityModule, landlordModule, commentModule } =
        res.data.mainPart.dynamicModule;
      this.houseFacility = facilityModule.houseFacility;
      this.landlordModule = landlordModule;
      this.commentModule = commentModule;
      console.log(this.commentBrief);
    },
  },
});

export default useDetailStore;
