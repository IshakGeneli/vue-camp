export default {
    namespaced: true,
    state:{
        siteName: 'Contact Vuex Store',
    },
    getters:{
        getSiteName(state){
            return state.siteName;
        }
    },
    mutations:{
        changeSiteName(state, payload){
            state.siteName = payload;
        }
    },
    actions:{
        changeSiteName(context, payload){
            context.commit('changeSiteName', payload);
        }
    }
}