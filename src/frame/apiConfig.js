/**
 * Created by yanqing on 2017/8/16.
 */

import {SEVER_URL} from '/serverConfig'

const apiUrl = {

}

export const getUrl = (urlPath, server = SEVER_URL, urlMap = apiUrl) => server + urlMap[urlPath]


