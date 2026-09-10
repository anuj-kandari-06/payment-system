const addBtn = document.getElementById("addBtn");
const buyBtn = document.getElementById("buyBtn");
const payBtn = document.getElementById("payBtn");
const message = document.getElementById("message");

addBtn.addEventListener("click", function () {
    addBtn.innerHTML = "Adding..";
    message.innerHTML = "Adding product to cart..";
    setTimeout(function () {
        addBtn.classList.add("hidden");
        buyBtn.classList.remove("hidden");
        message.innerHTML = "Product add to cart successfully";
    }, 2000);
});

buyBtn.addEventListener("click", function () {
    buyBtn.innerHTML = "Processing..";
    message.innerHTML = "Processing your order..";
    setTimeout(function () {
        buyBtn.classList.add("hidden");
        payBtn.classList.remove("hidden");
        message.innerHTML = "Your order is reday, please make payment..";
    }, 2000);
});

payBtn.addEventListener("click", function () {
    payBtn.innerHTML = "wating..";
    payBtn.disabled = true;
    message.innerHTML = "Processing payment..";
    setTimeout(function () {
        payBtn.innerHTML = "Pay Now";
        // payBtn.innerHTML.add("hidden");
        message.innerHTML = "Payment successfully completed..";
    }, 3000);
});