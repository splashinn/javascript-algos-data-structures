// inventoryProgram.js
// (C) 2014 splashinn
// Manages an inventory of products

(function () {
    "use strict";

    function Product(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    Product.prototype = {
        add : function (count) {
            this.quantity += count === 0 || count ? count : 1;
        },

        remove : function (count) {
            this.quantity -= count === 0 || count ? count : 1;
        },

        setPrice : function (value) {
            this.price = value;
        },

        toString : function () {
            return this.name;
        }
    };

    function Inventary() {
        this.items = Array.prototype.slice.call(arguments);
    }

    Inventory.prototype = {
        add : function (item) {
            this.items.push(item);
        },

        remove : function (item) {
            var index = this.items.indexOf(item);

            if (index > -1) {
                this.items.splice(index, 1);
            }
        },

        getTotalPrice : function () {
            var sum = this.items.reduce(function (previousValue, currentValue, index, array) {
                return previousValue + currentValue.price * currentValue.quantity;
            }, 0);

            return sum;
        }
    };

    var peaches = new Product(0, "peaches", 5, 5000),
        carrots = new Product(1, "carrots", 2, 10000),
        bananas = new Product(2, "bananas", 6, 3000),
        inventory = new Inventory(peaches, carrots, bananas);

    return inventory.getTotalPrice();
}());
