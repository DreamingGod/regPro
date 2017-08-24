import {postWithoutAuth} from '../../frame/ajax'
import {interUrl} from '../../frame/interfaceSet'
/**
 * 获取未注册用户 只渲染五条
 * @param dispatch
 */
export const getInfo = ({ dispatch }, phone) => {
  return new Promise((resolve, reject) => {
    postWithoutAuth(
      {
        url: interUrl['getInfo_withoutLogin'],
        data: {
          phone
        }
      }
    ).then(
      Info => {
        console.log(Info)
        resolve(Info)
      },
      err => {
        console.warn(err)
        reject(err)
      }
    )
  })
}
