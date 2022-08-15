import { ref, onActivated, onDeactivated, onMounted, onUnmounted } from "vue";
import { throttle } from "underscore";

export default function useScroll() {
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }, 100);

  onMounted(() => {
    // 监听window窗口的滚动
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    // 移出window窗口的滚动监听
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  // keep alive
  onActivated(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onDeactivated(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
