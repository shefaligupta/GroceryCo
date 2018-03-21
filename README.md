# GroceryCo
Test Assignment for Absorb Software

I am maintaining the Store for GroceryCo using 4 main object types:
**a. Inventory Items:** This class represents items in inventory. I used the following data attributes to instantiate
an item:

```
{
  "id":"12345",
  "name":"Apple(s)",
  "reg_price":"1.25",
  "max_qty":20,
  "available_qty":1,
  "discount":{
    "promo":"On Sale Price",
    "min_qty":1,
    "value":0.1
  }
}
```

In the above representation, I have created a discount property which has been explained later.

**b. Cart Items:** Defined in inventoryItem.js. This class stores copies of inventory items
with additional instance methods. These methods help calculating prices and applicable discounts.

**c. Shopping Cart:** Represents array of cart Items and manipulating functions like
add, remove, compute total value for a cart.

**d. Store Class:** Encapsulates inventory and cart together.

## Managing Discounts

This is where things get interesting. I represent all available discount types just using two properties:
`min quantity` required to apply discount and `% value` discount to be applied.

For example, for "Buy One Get Free" promo, discount can be represented as:

```
"discount": {
  "promo": "BOGO",
  "min_qty": 2,
  "value": 0.5
}
```

Calculation will be as simple as:

`Discount = floor(qty_in_cart/min_qty) X min_qty X reg_price X disc_value`

## Computing Total Prices.
Total Cart value is calculated using `salePrice` of each item in the cart minus the discounts.


## Project Setup
Once cloned, run npm install under project directory.

for serving the application locally on `localhost:8000`:

`$ npm run dev`

For working demo: https://groceryco.herokuapp.com/#/cart