export default {
    namespaced: true,
    state:{
        siteName: 'About Vuex Store',
    },
    getters:{
        getSiteName(state){
            return state.siteName;
        }
    },
    actions:{
        changeSiteName(context, payload){
            context.commit('changeSiteName', payload);
        }
    }
}