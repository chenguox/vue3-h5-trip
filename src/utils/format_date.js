import dayjs from "dayjs";

/**
 * 处理日期格式
 * @param {*} date
 * @param {*} formatStr
 * @returns
 */
export function formatMonthDay(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr);
}

/**
 * 获取两个日期相差的天数
 * @param {*} startDate
 * @param {*} endDate
 * @returns
 */
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}

/**
 * 获取 date 日期后几天
 * @param {*} date
 * @param {*} day
 * @returns
 */
export function getAfterDay(date, day) {
  return dayjs(date).add(day, "day");
}
