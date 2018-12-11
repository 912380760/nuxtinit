import Vue from 'vue'
// 格式化成想要的格式 例子：new Date() | time('hh:mm:ss')
export function time(date, fmt = "yyyy-MM-dd hh:mm:ss") {
  date = typeof date == 'string' ? new Date(date.replace(/-/g, "/")) : new Date();
  if (!date.getFullYear()) return "";
  let o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ?
        o[k] :
        ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}


let filters = {
  time,
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
export default filters
