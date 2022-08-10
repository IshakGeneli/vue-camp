import { createStore } from "vuex";

const store = createStore({
    state: {
        person:{
            name: "John Doe",
            age: 30
        },
        theme: "light",
        permissions: ["admin", "user"],
        itemList: [
            { id: 1, title: "Masa", type: "mobilya" },
            { id: 2, title: "Sandalye", type: "mobilya" },
            { id: 3, title: "TV", type: "elektronik" },
            { id: 4, title: "Monitor", type: "elektronik" },
            { id: 5, title: "Bardak", type: "plastik" }
          ]
    },
    getters:{
        _getElectronics(state){
            return state.itemList.filter(item => item.type === "elektronik");
        },
        _activeUser(state){
            const user ={
                ...state.person,
            }
            delete user.age;
            return user;
        },
        _getPermissions(state){
            return state.permissions;
        }
    },
    mutations:{
        _setTheme(state, theme){
            state.theme = theme;
        },
        _addPermission(state, permission){
            state.permissions.push(permission);
        }
    },
    actions:{
        _setTheme(context, theme){
            context.commit("_setTheme", theme);
        },
        _addPermission(context, permission){
            context.commit("_addPermission", permission);
        }
    }
})

export default store;