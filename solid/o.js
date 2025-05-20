"use strict";
/*class Order {
  private lineItems: any[];
  private shipping: string;

  constructor(lineItems: any[], shipping: string) {
    this.lineItems = lineItems;
    this.shipping = shipping;
  }

  getTotal(): number {
    Lógica para calcular el total
    return 100; ejemplo
  }

  getShippingCost(): number {
    if (this.shipping === "ground") {
      if (this.getTotal() > 100) {
        return 0;
      }
      return Math.max(10, this.getTotal() * 0.1);
    } else if (this.shipping === "air") {
      return Math.max(20, this.getTotal() * 0.25);
    }
    return 0;
  }
}
*/
class GroundShipping {
    getCost(order) {
        if (order.getTotal() > 100) {
            return 0;
        }
        return Math.max(10, order.getTotal() * 0.1);
    }
}
class AirShipping {
    getCost(order) {
        return Math.max(20, order.getTotal() * 0.25);
    }
}
class Order {
    constructor(lineItems, shipping) {
        this.lineItems = lineItems;
        this.shipping = shipping;
    }
    getTotal() {
        //Lógica para calcular el total
        return 100; //ejemplo
    }
    getShippingCost() {
        return this.shipping.getCost(this);
    }
}
//Uso
const groundShipping = new GroundShipping();
const order = new Order([], groundShipping);
console.log(order.getShippingCost());
