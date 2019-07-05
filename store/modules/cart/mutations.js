import {ADD_TO_CART, CHANGE_COUNT, REMOVE_FROM_CART} from "./mutation-types";

export default {
    [ADD_TO_CART] (store, product){
        const index = store.items.findIndex(p => p.id === product.id);
        if (index !== -1) {
            store.items.splice(index, 1, Object.assign({}, store.item[index], {count: store.item[index].count + 1}))
        } else {
            store.items.push(product);
        }
    },
    [REMOVE_FROM_CART] (store, id){
        const index = store.items.findIndex(p =>  p.id == id);
        store.items.splice(index, 1);
    },
    [CHANGE_COUNT](store, {id, count}){
        const index = store.items.findIndex(p => p.id == id);
        store.items.splice(index, 1, Object.assign({}, store.items[index], {count}))
    }
}