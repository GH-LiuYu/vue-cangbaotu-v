import request from '@/utils/request'

export function getlist() {
  return request({
    url: '/code/list',
    method: 'get',
  })
}

export function choose(data) {
  return request({
    url: '/code/choose',
    method: 'post',
    data
  })
}

export function getTime() {
  return request({
    url: '/code/time',
    method: 'get',
  })
}

