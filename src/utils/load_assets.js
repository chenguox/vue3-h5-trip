/**
 * 获取图片资源
 * @param {*} imgae
 * @returns
 */
export const getAssetURL = (image) => {
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
