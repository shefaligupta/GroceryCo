function Store (goods){

    this.items = [];
    this.cart = new ShoppingCart();

    goods.forEach(function (good) {
        this.items.push(new InventoryItem(good));
    }.bind(this));

}