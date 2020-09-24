let products =[
    {
        name: "Gray T-shirt",
        size: "L",
        color: "Gray",
        price: 900,
        image: "Product1.jpg",
        description: "A good looking gray t-shit"
    },
    {
        name: "Black Sweatshirt",
        size: "M",
        color: "Black",
        price: 1200,
        image: "Product2.jpg",
        description: "Good looking black sweat shirt"
    },
    {
        name: "Blue Striped Dress",
        size: "L",
        color: "Blue & White",
        price: 1500,
        image: "Product3.jpg",
        description: "Beautiful blue striped dress"
    },
    {
        name: "Gray Sweatshirt",
        size: "M",
        color: "Gray",
        price: 1700,
        image: "Product4.jpg",
        description: "Good looking gray sweat shirt for womens"
    },
    {
        name: "Beautiful White Dress",
        size: "L",
        color: "White",
        price: 1400,
        image: "Product5.jpg",
        description: "Good looking nice white dress for women"
    },
    {
        name: "White T-Shirt",
        size: "L",
        color: "White",
        price: 500,
        image: "Product6.jpg",
        description: "Good looking white T-Shirt"
    },
    {
        name: "White Printed T-shirt",
        size: "L",
        color: "White",
        price: 900,
        image: "Product7.jpg",
        description: "Good looking white printed T-shirt",
    },
    {
        name: " Dark Gray Jacket outfit",
        size: "L",
        color: "Dark Gray",
        price: 1500,
        image: "Product8.jpg",
        description: "Men's casual slim jacket outfit"
    },
    {
        name: "White collar T-Shirt",
        size: "L",
        color: "White",
        price: 1000,
        image: "Product9.jpg",
        description: "Good looking white collar T-Shirt"
    },
    {
        name: " Light Gray Jacket outfit",
        size: "L",
        color: "Light Gray",
        price: 1500,
        image: "Product10.jpg",
        description: "Men's casual slim jacket outfit"
    },
    {
        name: "Violet Lace Midi Dress",
        size: "L",
        color: "Royal Violet",
        price: 2000,
        image: "Product11.jpg",
        description: "Royal Blue Flute Hem Lace Midi Dress"
    },
    {
        name: "Basil Floral Dress",
        size: "L",
        color: "Basil",
        price: 1000,
        image: "Product12.jpg",
        description: "Good looking Basil Floral Dress"
    }
];

function displayProduct(product_data, who = "productwrapper")
{
    let productsString="";

    product_data.forEach(function(product_data, index)
    {
        //destructring data 
        let {name, size, color, price, image, description}=product_data;

        if ( who == "productwrapper")
        {
            productsString +=`
        <div class="product">
            <div class="productimage">
                <img src="Product Images/${image}" width=100% />
            </div>
            <h3>${name}</h3>
            <p>Price : ${price}$</p>
            <p>Size : ${size}</p>
            <p>Color : ${color}</p>
            <p>${description}</p>
            <p></p>
                <center>
                    <button onclick="addToCart(${index})">Add to Cart</button>
                </center>
            </p>
        </div>`
        }
        if (who == "cart")
        {
            productsString +=`
        <div class="product">
            <div class="productimage">
                <img src="Product Images/${image}" width=100% />
            </div>
            <h3>${name}</h3>
            <p>Price : ${price}$</p>
            <p>Size : ${size}</p>
            <p>Color : ${color}</p>
            <p>${description}</p>
            <p></p>
                <center>
                    <button onclick="removeFromCart(${index})">Remove From Cart</button>
                </center>
            </p>
        </div>`
        }
    })
    
    document.getElementById(who).innerHTML = productsString;
}

displayProduct(products);

let cart = [];

function searchProduct(search_value)
{
    let searched_products=products.filter(function(product,index)
    {
        let search_string = product.name+" "+product.color+" "+product.description;
        return search_string.toUpperCase().indexOf(search_value.toUpperCase())!=-1;
    })
    displayProduct(searched_products);
}

function filterByPrice()
{
    let minprice = document.getElementById("minprice").value;
    let maxprice = document.getElementById("maxprice").value;

    let filtered_product =[];
    products.forEach(function(product, index)
    {
        if(product.price >= minprice && product.price <= maxprice)
        {
            console.log(product.price);
            filtered_product.push(products[index]);
        }
    });
    console.log(filtered_product);
    displayProduct(filtered_product);
}

let cartcount = 0;
let cartarray = [-1];
let forword = 0;

function addToCart(index)
{
    cartarray.forEach(function(a)
    {
        console.log(a);
        if (a == index)
        {
            forword = 0;
        }
        else{ forword = 1 }
    });
    if (forword == 1)
    {
        cart.push(products[index]);
        displayProduct(cart, "cart")
        cartcount++;
        document.getElementById("cartcount").innerHTML = "<h2>"+cartcount+"<h2>";
        cartarray.push(index);
        console.log(cartarray);
    }
    else
    {
        alert("you cant add product twice");
    }
}

function removeFromCart(index)
{
    cart.splice(index, 1);
    displayProduct(cart, "cart");
    cartcount--;
    document.getElementById("cartcount").innerHTML = "<h2>"+cartcount+"<h2>";
}
