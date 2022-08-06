import { defineStore } from "pinia";
import { getHomeHotSuggests } from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
  },
});

export default useHomeStore;
