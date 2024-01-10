import {getUserList} from '../services/user'

export default {
  namespace: 'global',
  state: {
    userList: []
  },

  effects: {
    *getUser({payload},{call,put}){
      const response = yield call(getUserList,payload)
      yield put({
        type: 'queryList',
        payload: response
      })
    }
  },

  reducers: {
    queryList(state,action){
      return {
        ...state,
        userList: action.payload
      }
    }
  },

  subscriptions: {
    onClick({dispatch}){
      console.log('onClick');
    }
  }
}
