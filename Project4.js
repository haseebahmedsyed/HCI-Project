window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector('.popup-window').style.display = "block";
    }, 1000);
});

document.querySelector('#close-btn-of-popup-window').addEventListener("click", () => {
    document.querySelector('.popup-window-container').style.display = "none";
    document.querySelector('#body').style.overflow = "scroll";
});

document.querySelector('#lets-go-btn-popup-window').addEventListener("click", () => {
    document.querySelector('.popup-window-container').style.display = "none";
    document.querySelector('#body').style.overflow = "scroll";
});

const openSearch = () => {
    let div = document.getElementById("search-icon-hidden-div");
    div.style.top = "0px";
}

const closeSearch = () => {
    let div = document.getElementById("search-icon-hidden-div");
    div.style.top = "-100vh";
}

const orderNow = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("emailAddress").value;
    let phone = document.getElementById("phone-no").value;
    let foodName = document.getElementById("food-name").value;
    let quantity = document.getElementById("quantity").value;
    let addBeverage = document.getElementById("additional-beverage").value;
    let resAddress = document.getElementById("res-address").value;

    if (name === "" || email === "" || phone === "" || foodName === "" || quantity === "" || addBeverage === "" || resAddress === "")
    {
        swal("Order Not Placed!", "You Did Not Give The Required Information!", "error");
    }
    else
    {
        swal("Success!", "Your Order Has Been Placed!", "success");
        document.getElementById("name").value = "";
        document.getElementById("emailAddress").value = "";
        document.getElementById("phone-no").value = "";
        document.getElementById("food-name").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("additional-beverage").value = "";
        document.getElementById("res-address").value = "";
    }
}