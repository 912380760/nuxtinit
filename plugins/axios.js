import {
  Message
} from 'element-ui';
// import qs from 'qs';
export default function ({
  $axios,
  redirect
}) {
  // $axios.onRequest(config => {
  //   if (config.method == 'get') {
  //     config.url = `${config.url}?${qs.stringify(config.params, { arrayFormat: 'repeat' })}`;
  //     delete config.params;
  //   }
  //   return config;
  // })
  $axios.onResponse(response => {
    return response.data;
  })

  $axios.onError(error => {
    Message({
      message: '请求失败，请稍后重试',
      type: 'error',
      showClose: true,
    })
  })
}
