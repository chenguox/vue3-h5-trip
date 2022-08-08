import { defineStore } from "pinia";
import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouseList,
} from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    houselist: [],
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      console.log(res);
      this.categories = res.data;
    },
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage);
      this.houselist.push(...res.data);
      this.currentPage++;
    },
  },
});

export default useHomeStore;
