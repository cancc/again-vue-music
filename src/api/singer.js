import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
// import axios from 'axios'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    uin: 0,
    needNewCode: 0,
    format: 'jsonp'
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk: 2017300010,
    hostUin: 0,
    inCharset: 'utf8',
    outCharset: 'utf8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    order: 'listen',
    begin: 0,
    num: 100,
    format: 'jsonp',
    songstatus: 1,
    singermid: singerId
  })

  return jsonp(url, data, options)
}




