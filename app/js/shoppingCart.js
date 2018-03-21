/**
 * Shopping Cart Class.
 * @constructor
 */
function ShoppingCart() {

    this.items = [];

    /**
     * Find if item to be added is already present in cart.
     * @param item
     * @return Returns the index of the item, if found in the cart.
     */
    ShoppingCart.prototype.ifItemInCart = function(item) {
        for (var i in this.items) {
            if (this.items[i].id === item.id) {
                return i;
            }
        }
        return -1;
    };

    /**
     * Add item to cart.
     * @param item
     */
    ShoppingCart.prototype.addItem = function(item) {
        var _found = this.ifItemInCart(item);
        if (_found !== -1) {
            this.items[_found].available_qty = Math.min(
                this.items[_found].available_qty + item.available_qty,
                item.max_qty);
        } else {
            this.items.push(CartItem(item));
        }
    };

    /**
     * Remove item from cart.
     * @param item
     */
    ShoppingCart.prototype.removeItem = function(item) {
        var _found = this.ifItemInCart(item);
        if (_found !== -1) {
            this.items[_found].available_qty = Math.max(
                this.items[_found].available_qty - item.available_qty, 0);
            if (this.items[_found].available_qty === 0) {
                this.items.splice(_found, 1);
            }
        }
    };

    /**
     * Calculate the total cart value = amount payable by
     * user (subtracting the discount).
     * @return {number}
     */
    ShoppingCart.prototype.totalValue = function() {
        var _val = 0;
        for (var i in this.items) {
            _val += this.items[i].salePrice();
        }
        return _val;
    };

    /**
     * Enable/Disable add button.
     * @param item
     * @returns {boolean}
     */
    ShoppingCart.prototype.keepAdding = function (item) {
        var _found = this.ifItemInCart(item);
        return _found > -1 && this.items[_found].available_qty >= item.max_qty;
    };

    /**
     * Enable/Disable Remove button.
     * @param item
     * @returns {boolean}
     */
    ShoppingCart.prototype.keepRemoving = function (item) {
        var _found = this.ifItemInCart(item);
        return !(_found > -1 && this.items[_found].available_qty >= 0);
    };
}
