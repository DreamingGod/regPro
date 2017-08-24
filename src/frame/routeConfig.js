/**
 * Created by yanqing on 2017/8/16.
 */
// import { sync } from 'vuex-router-sync'
// import {setRouterHook} from './pageTransAnimation'
// import store from '../vuex/store'

/**
 *
 * @param router
 */
export function configRouter (router) {
  // const commit = store.commit || store.dispatch
  // setRouterHook(router, commit)
  //
  // // 同步store的路由状态
  // sync(store, router)
  console.log(router)
  router.map({
    '/': { // 主页面课程导航页
      component: require('../views/Content.vue')
    }
  })
  router.redirect({
    '': '/'
  })
}
