import request from '@/utils/request'

//
export function getArticleApi(data) {
  return request({
    url: '/diagram' + '/' + data,
    method: 'get',
    params: data
  })
}
export function getAttrsApi(data) {
  return request({
    url: '/Attrs' + '/' + data,
    method: 'get',
  })
}
