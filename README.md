# GroceryCo
Test Assignment for Absorb Software

I am maintaining the Shopping Cart for GroceryCo using 3 main classes:
a. Inventory Item Class: This class represent each item in inventory. I used the following data attributes to represent
an item:
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
In the above representation, I have created a discount property whose value has been
uniformed for different kinds of promos using mathematical calculations.

b. Cart Item Class: Defined in inventoryItem.js. This class was required to store references of inventory items.
This class has two major functions for calculating discount.

b. Shopping Cart Class: Represents array of cart Items and manipulating functions like add,remove, give total value for a cart.

c. Store Class: Encapsulates inventory and cart together. This is returned to the controller.

## Managing Discounts
I have represented a discount in json using 3 fields: promo name, min quantity required to add discount and aggregrate % discount
to be applied depending on the min_qty. For example, for "Buy One Get Free" promo - name is as mentioned, mininum quantity
becomes 2 and discount % = 50% of total value.

## Computing Total Prices.
Total Cart value is aggregrated using sale Price of each item in cart retrieved using = Total Price of items added - Discount applied.


## Project Setup
Once cloned, run npm install under project directory.
Use: npm run dev for serving the application locally on localhost:8000

For working demo: https://groceryco.herokuapp.com/#/cart
