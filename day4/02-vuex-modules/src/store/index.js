import { createStore } from "vuex";
import contact from "./modules/contact";
import about from "./modules/about";

const store = createStore({
    state:{
        siteName: 'Vuex Store',
    },
    modules:{
        contact,
        about,
    }
});

export default store;