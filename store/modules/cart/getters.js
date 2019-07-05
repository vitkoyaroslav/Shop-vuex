export default {
    productsCount (store){
        return store.items.length;
    },
    productsList (store){
        return store.items;
    },
    totalCartPrice(store){
        return store.items.reduce((sum, product) => sum + (product.price * product.count), 0);
    }
}