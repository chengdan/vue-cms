import Vue from "vue";
import VueX from "vuex";
Vue.use(VueX);

function getCartsFormLocalStorage() {
    var carts = localStorage.getItem("cartinfo");
    carts = carts ? JSON.parse(carts) : []
    return carts;
}

function saveToLocalStorage(carts) {
    localStorage.setItem("cartinfo",JSON.stringify(carts))
}
export default new VueX.Store({
    state:{
        carts:getCartsFormLocalStorage()
    },
    mutations:{
        addToCarts(state,cart){
            var temp = state.carts.filter(v=>v.id == cart.id);
            if(temp.length > 0){
                temp[0].count += cart.count;
            }else {
                state.carts.push(cart);
            }
            saveToLocalStorage(state.carts);
        }
    },
    getters:{
        totalCount(state){
            var result = 0;
            state.carts.forEach(v=>{
                result += v.count
            })
            return result;
        },
        getIds(state){
            return state.carts.map(v=>v.id).join(",");
        },
        getCountById :(state,getters) => (id) =>{
            var temp = state.carts.filter(v=> v.id == id);
            if(temp.length > 0){
                return temp[0].count;
            }else {
                return 0;
            }
        },
        updateCarts:(state, getters) => (carts) =>{
            state.carts = carts.map(v =>{
                return {id:v.id,count:v.count}
            });
            saveToLocalStorage(state.carts);
        }
    }
})