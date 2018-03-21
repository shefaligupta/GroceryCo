


function ShoppingCart(){

    this.items = [];

    ShoppingCart.prototype.ifItemInCart = function(item){
        for (var i in this.items) {
            if (this.items[i].id === item.id) {
                return i;
            }
        }
        return -1;
    };

    ShoppingCart.prototype.addItem = function(item){

        var _found = this.ifItemInCart(item);
        if(_found !== -1){
            this.items[_found].available_qty = Math.min(this.items[_found].available_qty + item.available_qty,item.max_qty);
        } else{
            this.items.push(CartItem(item));
        }
    };

    ShoppingCart.prototype.removeItem = function(item){
        var _found = this.ifItemInCart(item);
        if(_found !== -1){
            this.items[_found].available_qty = Math.max(this.items[_found].available_qty - item.available_qty,0);
            if(this.items[_found].available_qty === 0){
                this.items.splice(_found,1);
            }
        }
    };

    ShoppingCart.prototype.totalValue = function(){
        var _val = 0;
        for (var i in this.items) {
            _val += this.items[i].salePrice();
        }
        console.log(_val);
        return _val;
    };
}