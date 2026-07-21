const food = document.getElementById("food");
const quantity = document.getElementById("quantity");

const itemTotal = document.getElementById("itemTotal");
const delivery = document.getElementById("delivery");
const totalPay = document.getElementById("totalPay");

function updatePrice() {

    let price = Number(food.value);
    let qty = Number(quantity.value);

    let itemPrice = price * qty;
    let deliveryCharge = 25;
    let finalPrice = itemPrice + deliveryCharge;

    itemTotal.innerHTML = "₹" + itemPrice;
    delivery.innerHTML = "₹" + deliveryCharge;
    totalPay.innerHTML = "₹" + finalPrice;
}
food.addEventListener("change", updatePrice);
quantity.addEventListener("input", updatePrice);

updatePrice();