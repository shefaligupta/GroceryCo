//This is item class

function InventoryItem(good){

    this.id = good.id;
    this.name = good.name;
    this.reg_price = good.reg_price;
    this.max_qty = good.max_qty;
    this.available_qty = good.available_qty;
    this.discount = good.discount || false;
}

function CartItem(item){

    var cItem = angular.copy(item);

    cItem.calculateDiscount = function(){
        var disc = 0;
        if(this.discount){
            var discMultiple = Math.floor(this.available_qty/this.discount.min_qty);
            if(discMultiple > 0) {
                disc = discMultiple * this.reg_price * this.discount.value * this.discount.min_qty;
            }
        }
        return disc.toFixed(2);
    };

    cItem.salePrice = function(){
        var totalPrice = this.available_qty * this.reg_price;
        var totalDiscount = this.calculateDiscount();
        return totalPrice - totalDiscount;
    };

    return cItem;
}