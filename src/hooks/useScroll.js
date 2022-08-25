import { ref, onActivated, onDeactivated, onMounted, onUnmounted } from "vue";
import { throttle } from "underscore";

export default function useScroll(elRef) {
  let el = window;

  const isReachBottom = ref(false); // 是否到达底部

  const clientHeight = ref(0); // 元素的高度（内容+内边距）
  const scrollTop = ref(0); // 滚动部分的高度
  const scrollHeight = ref(0); // 整个可滚动的区域高度

  // 节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }, 100);

  // 监听滚动
  onMounted(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", scrollListenerHandler);
  });
  onActivated(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", scrollListenerHandler);
  });

  // 移除滚动监听
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });
  onDeactivated(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
