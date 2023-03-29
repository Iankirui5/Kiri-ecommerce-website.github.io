let carts = document.querySelectorAll('.btn add to cart');
let product = [
    {
        name:"Mens Wear",
        tag: "menswear",
        price:3500.00,
        incart:1
    },
    {
        name: "Ladies Wear",
        tag: "ladieswear",
        price: 2800.00,
        incart: 5
    },
    {
        name: "Ladies Footwear",
        tag: "ladiesfootwear",
        price: 500.00,
        incart: 7
    },
    {
        name: "Jewelry",
        tag: "jewelry",
        price: 1300.00,
        incart: 6
    },
    {
        name: "Kitenge",
        tag: "kitenge",
        price: 2000.00,
        incart: 8
    },
    {
        name: "House Decor",
        tag: "housedecor",
        price: 1300.00,
        incart: 2
    },
    {
        name: "African Crafted Tables",
        tag: "africancraftedtables",
        price: 1800.00,
        incart: 3
    },
    {
        name: "Mens Footwear",
        tag: "mensfootwear",
        price: 2500.00,
        incart: 4
    }
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(product[i]);
        totalCost(product[i])
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
         }
    }
function cartNumbers(product){
    console.log("The product clicked is",product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
}

    function setItems(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {
            console.log("not null");
            if (cartItems[product.tag] !== undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }
            cartItems[product.tag].incart += 1;
        } else {
            product.incart = 1;
            cartItems = {
                [product.tag]: product
            }
        }
        localStorage.setItem("productsIncart", JSON.stringify
            (cartItems));
    }

    function totalCost(product) {
        let cartCost = localStorage.getItem(totalCost);
        if (cartCost != null) {
            cartCost = parse(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        } else {
            localStorage.setItem("totalCost", product.price);
        }
    }

    
    function displaycart() {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector
            ("product container"); {
            // productContainer.innerHTML = '';
            console.log(productContainer);
            Object.values(cartItems).map(item => {
                productContainer.innerHTMl +=`
                    <div class="product">
                        <button class="remove-btn" onclick="removeItem(this)">Remove</button>
                        <img src="./image/Ksh{item.tag}.jpg"/>
                            <span>Ksh{item.name}</span>
                    </div> 
                    <div class="price">Ksh(item.price)</div>
                    <div class="quantity">
                    <ion-icon class="decrease"
                    name="arrow-dropleft-circle"</ion-icon>
                    <span>Ksh(item.incart)</span>
                    <ion-icon class="increase"
                    name="arrow-dropright-circle"</ion-icon>
                    </div>
                    <div class="total">
                    KshKsh(item.incart * item.price),00
                    </div>`
                    ;                 
            });
            productContainer.innerHtMl+=
                `<div clas="basketTotalContainer">
                    <h4 class="basketTotalTitle">
                        Basket Total
                    </h4>
                    <h4 class="basketTotal"> KshKsh{cartCost},00</h4>`
        }
    
    }
    onLoadCartNumbers();
    displaycart();

