/**
 * Store Class.
 *
 * This will be a singleton instance for the store.
 * @param {Object} goods JSON from static JSON.
 * @constructor
 */
function Store(goods) {
    this.items = [];
    this.cart = new ShoppingCart();
    goods.forEach(function(good) {
        this.items.push(new InventoryItem(good));
    }.bind(this));
}
