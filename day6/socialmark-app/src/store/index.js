import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });
const store = createStore({
    state: {
        user: null,
    },
    getters:{
        _isAuthenticated(state){
           return state.user !== null
        },
        _getUser(state){
            const user = state.user
            delete user?.password
            return user
        }
    },
    mutations:{
        setUser(state, user){
            state.user = user
        },
        clearUser(state){
            state.user = null
        }
    },
    actions:{
        setUser(context, user){
            context.commit('setUser', user)
        },
        clearUser(context){
            context.commit('clearUser')
        }
    },
    plugins: [createPersistedState({
        key: "user",
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
      }),]
})

export default store;