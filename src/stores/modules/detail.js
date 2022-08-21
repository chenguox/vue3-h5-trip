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
      console.log(this.commentBrief);
    },
  },
});

export default useDetailStore;
