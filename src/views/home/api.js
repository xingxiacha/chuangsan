import request from '@/utils/request'

//
export function getAttrsApi() {
  return request({
    url: '/Attrs',
    method: 'get',
    params: {
      pageSize: 99,
    }
  })
}
