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
    // 预定须知
    orderRules: {},
    // 位置周边
    positionModule: {},
    // 价格说明
    introductionModule: {},
    // 产品价格
    product: {},
  }),
  actions: {
    async fetchDetailInfosData(houseId) {
      const res = await getDetailInfos(houseId);
      this.setDetialInfoData(res.data.mainPart);
      this.setDetailPriceData(res.data.pricePart);
      return true;
    },
    setDetialInfoData(data) {
      const { topModule, dynamicModule, introductionModule } = data;
      const partOne = topModule;
      this.swipeData = partOne.housePicture.housePics;
      this.houseName = partOne.houseName;
      this.houseTags = partOne.houseTags;
      this.commentBrief = partOne.commentBrief;
      this.nearByPosition = partOne.nearByPosition;
      const partTwo = dynamicModule;
      this.houseFacility = partTwo.facilityModule.houseFacility;
      this.landlordModule = partTwo.landlordModule;
      this.commentModule = partTwo.commentModule;
      this.orderRules = partTwo.rulesModule.orderRules;
      this.positionModule = partTwo.positionModule;
      const partThree = introductionModule;
      this.introductionModule = partThree;
    },
    setDetailPriceData(data) {
      this.product = data.priceModule.product;
    },
  },
});

export default useDetailStore;
