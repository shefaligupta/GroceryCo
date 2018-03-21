/**
 * Inventory Item Class.
 * @param good
 * @constructor
 */
function InventoryItem(good) {
    this.id = good.id;
    this.name = good.name;
    this.reg_price = good.reg_price;
    this.max_qty = good.max_qty;
    this.available_qty = good.available_qty;
    this.discount = good.discount || false;
}

/**
 *
 * @param item
 * @return {*}
 * @constructor
 */
function CartItem(item) {
    // Maintaining the cart Item as a copy of inventory item for further manipulation.
    var cItem = angular.copy(item);

    // Adding instance methods on the fly.

    /**
     * This function calculates discount up to two decimal places
     * on an item based on its qty added in the cart.
     * @return {float}
     */
    cItem.calculateDiscount = function() {
        var disc = 0;
        if (this.discount) {
            var discMultiple = Math.floor(this.available_qty / this.discount.min_qty);
            if (discMultiple > 0) {
                // Explained in detail in readme
                disc = discMultiple * this.reg_price * this.discount.value * this.discount.min_qty;
            }
        }
        return disc.toFixed(2);
    };

    /**
     * This function returns sale price of items added to the cart based on its qty.
     * @return {number}
     */
    cItem.salePrice = function() {
        var totalPrice = this.available_qty * this.reg_price;
        var totalDiscount = this.calculateDiscount();
        return totalPrice - totalDiscount;
    };

    return cItem;
}
