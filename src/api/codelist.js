import request from '@/utils/request'

export function getlist() {
  return request({
    url: '/code/list',
    method: 'get',
  })
}
