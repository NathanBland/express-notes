import Vue from 'vue'
import dayjs from 'dayjs'
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('formatDate', (value) => {
  const date = dayjs(+value)
  return date.$D ? dayjs(+value).format('YYYY-MM-DD hh:mm:ss a') : value
})
