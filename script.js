/* =========================================================
   AARYA SWEET - COMPLETE SCRIPT.JS
   ========================================================= */

/* =========================
   PRODUCT DATA
========================= */

const products = [

    // ================= SWEETS =================
    {
        id: 1,
        name: "Kaju Katli",
        price: 499,
        category: "sweets",
        image: "https://www.sanjanafeasts.co.uk/wp-content/uploads/2024/08/How-to-make-kaju-katli-683x1024.jpg.webp"
    },
    {
        id: 2,
        name: "Motichoor Laddoo",
        price: 349,
        category: "sweets",
        image: "https://media.istockphoto.com/id/1212980658/photo/delicious-sweet-laddu-with-a-black-background.jpg?s=612x612&w=0&k=20&c=62wnvaFvHVQL3BRg-6C0EbA4MA7ysbiF6j2qYJCl16Y="
    },
    {
        id: 3,
        name: "Gulab Jamun",
        price: 299,
        category: "sweets",
        image: "https://img.magnific.com/premium-photo/gulab-jamun-indian-sweet-sugar-syrup_466689-52480.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 4,
        name: "Rasgulla",
        price: 299,
        category: "sweets",
        image: "https://media.gettyimages.com/id/2269022798/photo/close-up-of-rasgulla-a-traditional-indian-sweet-served-in-a-bowl-on-a-dark-table-showcasing.jpg?s=612x612&w=0&k=20&c=7JP5R02gebP7gdJeQioYACllqboNnfn5L1Vg4NtBe2c="
    },
    {
        id: 5,
        name: "Kesar Peda",
        price: 399,
        category: "sweets",
        image: "https://www.parsidairyfarm.com/cdn/shop/files/1_KesarPeda_1000x600.jpg?v=1699528047"
    },
    {
        id: 6,
        name: "Soan Papdi",
        price: 249,
        category: "sweets",
        image: "https://m.media-amazon.com/images/I/71S+DoYqy9L.jpg"
    },
    {
        id: 7,
        name: "Milk Barfi",
        price: 349,
        category: "sweets",
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2017/10/milk-powder-burfi-1.jpg"
    },
    {
        id: 8,
        name: "Premium Jalebi",
        price: 299,
        category: "sweets",
        image: "https://media.istockphoto.com/id/817526260/photo/delicious-jalebi-frying-in-oil-pan.jpg?s=612x612&w=0&k=20&c=JsOC0MuLtIadZF4MRjYG9AKBZWAT8l9gDeUWBAqOZR8="
    },

    // ================= DRY FRUITS =================
    {
        id: 9,
        name: "Premium Almonds",
        price: 499,
        category: "dryfruit",
        image: "https://t3.ftcdn.net/jpg/01/34/70/30/360_F_134703018_9uhT1JZtqPNJQVK1C4vHEsgD3w4ysjer.jpg"
    },
    {
        id: 10,
        name: "Royal Cashews",
        price: 649,
        category: "dryfruit",
        image: "https://media.gettyimages.com/id/1465124089/photo/glass-bowl-of-cashew-nuts-over-pink-background-healthy-snack-idea.jpg?s=612x612&w=0&k=20&c=Nr-6_O7S04RZtcG4edtIIWGHdlEd8GEabK8sXIdk3QQ="
    },
    {
        id: 11,
        name: "Premium Pistachio",
        price: 399,
        category: "dryfruit",
        image: "https://media.istockphoto.com/id/1200394561/photo/pistachios.jpg?s=612x612&w=0&k=20&c=li9derHuMZJOnzEZWbxcee-x7E84jFjGJauea0C22N0="
    },
    {
        id: 12,
        name: "Royal Dry Fruit Mix",
        price: 799,
        category: "dryfruit",
        image: "https://media.gettyimages.com/id/1729805246/photo/full-frame-of-assorted-nuts-variety.jpg?s=612x612&w=0&k=20&c=-V3OnrwidVXdkxWlrTjCW3OOU_7QAJomok9jxFfKYKU="
    },

    // ================= NAMKEEN =================
    {
        id: 13,
        name: "Classic Mixture",
        price: 199,
        category: "namkeen",
        image: "https://img.magnific.com/premium-photo/indian-traditional-namkeen-food-mixture-navratna-mix-namkeen-also-know-as-nimco-namkin-mixture-chiwda-nimko-served-bowl-selective-focus_726363-910.jpg?ga=GA1.1.826510048.1792334377&semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 14,
        name: "Spicy Bhujia",
        price: 179,
        category: "namkeen",
        image: "https://thumbs.dreamstime.com/b/indian-spicy-snacks-namkeen-bikaneri-besan-bhujia-white-bowl-made-chickpea-flour-side-view-plate-208211667.jpg"
    },
    {
        id: 15,
        name: "Moong Dal",
        price: 189,
        category: "namkeen",
        image: "https://media.istockphoto.com/id/1291601111/photo/baked-mung-beans-moong-dal.jpg?s=612x612&w=0&k=20&c=9B6l8v5meROkyAFJG1OH49EVQTj64NS_qNFkhHoY4s4="
    },
    {
        id: 16,
        name: "Aloo Bhujia",
        price: 169,
        category: "namkeen",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/09/aloo-bhujia-recipe.jpg"
    },

    // ================= GIFT BOXES =================
    {
        id: 17,
        name: "Royal Diwali Box",
        price: 1299,
        category: "gifts",
        image: "https://thesweetblend.com/cdn/shop/products/Royal-Mithai-Box-Large.jpg?v=1685355619&width=1946"
    },
    {
        id: 18,
        name: "Family Celebration Box",
        price: 999,
        category: "gifts",
        image: "https://static.vecteezy.com/system/resources/thumbnails/018/786/914/small/india-traditional-mix-sweet-food-or-mix-mithai-photo.jpg"
    },
    {
        id: 19,
        name: "Executive Gift Box",
        price: 799,
        category: "gifts",
        image: "https://wowbouquet.com/images/2023/03/A-custom-built-box-with-an-assortment-of-cheeses-dried-fruits-and-chocolate-covered-treats.webp"
    },
    {
        id: 20,
        name: "Sweet Celebration",
        price: 599,
        category: "gifts",
        image: "https://static.vecteezy.com/system/resources/thumbnails/053/410/070/small/traditional-indian-sweets-on-a-clean-white-plate-with-festive-candle-for-celebration-or-dessert-inspiration-free-photo.jpeg"
    }
];


/* =========================
   CART & WISHLIST
========================= */

let cart = JSON.parse(localStorage.getItem("aaryaCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("aaryaWishlist")) || [];


/* =========================
   DOM ELEMENTS
========================= */

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");

const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(filter = "all") {

    if (!productGrid) return;

    let filteredProducts = products;

    if (filter !== "all") {
        filteredProducts = products.filter(
            product => product.category === filter
        );
    }

    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {

        productGrid.innerHTML = `
            <div class="empty-products">
                <h3>No products found</h3>
                <p>Please try another category.</p>
            </div>
        `;

        return;
    }

    filteredProducts.forEach(product => {

        const isLiked = wishlist.includes(product.id);

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=85'"
                >

                <button
                    class="wishlist-btn ${isLiked ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    title="Add to Wishlist"
                >
                    ${isLiked ? "♥" : "♡"}
                </button>

                <span class="product-badge">
                    ${product.category === "gifts" ? "Gift" :
                      product.category === "dryfruit" ? "Premium" :
                      product.category === "namkeen" ? "Fresh" : "Popular"}
                </span>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>

                <h3>${product.name}</h3>

                <div class="product-bottom">

                    <div class="product-price">
                        ₹${product.price}
                    </div>

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        <span>+</span> Add
                    </button>

                </div>

            </div>
        `;

        productGrid.appendChild(card);
    });
}


/* =========================
   CATEGORY NAME
========================= */

function getCategoryName(category) {

    const names = {
        sweets: "Indian Sweet",
        dryfruit: "Dry Fruit",
        namkeen: "Namkeen",
        gifts: "Diwali Gift"
    };

    return names[category] || "Special";
}


/* =========================
   ADD TO CART
========================= */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;

    const existing = cart.find(
        item => item.id === productId
    );

    if (existing) {

        existing.qty += 1;

    } else {

        cart.push({
            ...product,
            qty: 1
        });

    }

    saveCart();

    showToast(`${product.name} added to cart 🛒`);

    renderCart();
}


/* =========================
   REMOVE FROM CART
========================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    renderCart();

    showToast("Item removed from cart");
}


/* =========================
   CHANGE QUANTITY
========================= */

function changeQty(productId, change) {

    const item = cart.find(
        product => product.id === productId
    );

    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {

        cart = cart.filter(
            product => product.id !== productId
        );

    }

    saveCart();

    renderCart();
}


/* =========================
   SAVE CART
========================= */

function saveCart() {

    localStorage.setItem(
        "aaryaCart",
        JSON.stringify(cart)
    );

    updateCartCount();
}


/* =========================
   UPDATE CART COUNT
========================= */

function updateCartCount() {

    const totalItems = cart.reduce(
        (total, item) => total + item.qty,
        0
    );

    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}


/* =========================
   RENDER CART
========================= */

function renderCart() {

    if (!cartItems) return;

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">🛒</div>

                <h3>Your cart is empty</h3>

                <p>Add some delicious sweets!</p>

            </div>

        `;

        if (cartTotal) {
            cartTotal.textContent = "₹0";
        }

        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.qty;

        total += itemTotal;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                onerror="this.src='https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&q=80'"
            >

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>₹${item.price}</p>

                <div class="qty-controls">

                    <button
                        onclick="changeQty(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span>${item.qty}</span>

                    <button
                        onclick="changeQty(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${item.id})"
            >
                ×
            </button>

        `;

        cartItems.appendChild(cartItem);
    });

    if (cartTotal) {

        cartTotal.textContent =
            `₹${total.toLocaleString("en-IN")}`;

    }

    updateCartCount();
}


/* =========================
   OPEN CART
========================= */

function openCart() {

    if (cartDrawer) {
        cartDrawer.classList.add("active");
    }

    if (cartOverlay) {
        cartOverlay.classList.add("active");
    }

    document.body.classList.add("no-scroll");
}


/* =========================
   CLOSE CART
========================= */

function closeCartDrawer() {

    if (cartDrawer) {
        cartDrawer.classList.remove("active");
    }

    if (cartOverlay) {
        cartOverlay.classList.remove("active");
    }

    document.body.classList.remove("no-scroll");
}


/* =========================
   CART BUTTON EVENTS
========================= */

if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
}

if (closeCart) {
    closeCart.addEventListener("click", closeCartDrawer);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartDrawer);
}


/* =========================
   WISHLIST
========================= */

function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist = wishlist.filter(
            id => id !== productId
        );

        showToast("Removed from wishlist");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist ❤️");
    }

    localStorage.setItem(
        "aaryaWishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();

    const activeFilter =
        document.querySelector(".filter.active");

    renderProducts(
        activeFilter
            ? activeFilter.dataset.filter
            : "all"
    );
}


/* =========================
   WISHLIST COUNT
========================= */

function updateWishlistCount() {

    if (wishlistCount) {

        wishlistCount.textContent =
            wishlist.length;

    }
}


/* =========================
   FILTER BUTTONS
========================= */

const filterButtons =
    document.querySelectorAll(".filter");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.dataset.filter || "all";

        renderProducts(filter);

        const sweetsSection =
            document.getElementById("sweets");

        if (sweetsSection) {

            sweetsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   SEARCH
========================= */

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        if (searchPanel) {

            searchPanel.classList.add("active");

        }

        if (searchInput) {

            setTimeout(() => {
                searchInput.focus();
            }, 200);

        }

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", () => {

        searchPanel.classList.remove("active");

        if (searchInput) {
            searchInput.value = "";
        }

        if (searchResults) {
            searchResults.innerHTML = "";
        }

    });

}


/* =========================
   SEARCH INPUT
========================= */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const value =
            searchInput.value
                .toLowerCase()
                .trim();

        if (!searchResults) return;

        if (!value) {

            searchResults.innerHTML = "";

            return;
        }

        const results =
            products.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(value)
            );

        if (results.length === 0) {

            searchResults.innerHTML = `

                <div class="search-empty">

                    <h3>No product found</h3>

                    <p>Try searching for sweets, dry fruits or gifts.</p>

                </div>

            `;

            return;
        }

        searchResults.innerHTML = results.map(product => `

            <div
                class="search-result"
                onclick="addToCart(${product.id})"
            >

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <h4>${product.name}</h4>

                    <p>₹${product.price}</p>

                </div>

                <span>+</span>

            </div>

        `).join("");

    });

}


/* =========================
   MOBILE MENU
========================= */

if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


/* Close mobile menu after clicking link */

if (mobileMenu) {

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}


/* =========================
   TOAST
========================= */

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================
   COUPON COPY
========================= */

const couponButtons =
    document.querySelectorAll(".copy-coupon");

couponButtons.forEach(button => {

    button.addEventListener("click", () => {

        const code =
            button.dataset.code ||
            button.textContent.trim();

        navigator.clipboard.writeText(code)
            .then(() => {

                showToast(
                    `Coupon ${code} copied 🎟️`
                );

            })
            .catch(() => {

                showToast("Coupon copied 🎟️");

            });

    });

});


/* =========================
   COUNTDOWN
   DIWALI - 8 NOVEMBER 2026
========================= */

const targetDate =
    new Date(
        2026,
        10,
        8,
        23,
        59,
        59
    ).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        targetDate - now;

    if (difference <= 0) {

        const days =
            document.getElementById("days");

        const hours =
            document.getElementById("hours");

        const minutes =
            document.getElementById("minutes");

        const seconds =
            document.getElementById("seconds");

        if (days) days.textContent = "00";
        if (hours) hours.textContent = "00";
        if (minutes) minutes.textContent = "00";
        if (seconds) seconds.textContent = "00";

        return;
    }

    const daysValue =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const hoursValue =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );

    const minutesValue =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );

    const secondsValue =
        Math.floor(
            (difference / 1000) % 60
        );


    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");


    if (days) {

        days.textContent =
            String(daysValue).padStart(2, "0");

    }

    if (hours) {

        hours.textContent =
            String(hoursValue).padStart(2, "0");

    }

    if (minutes) {

        minutes.textContent =
            String(minutesValue).padStart(2, "0");

    }

    if (seconds) {

        seconds.textContent =
            String(secondsValue).padStart(2, "0");

    }
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   FAQ
========================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item =
            question.parentElement;

        const answer =
            item.querySelector(".faq-answer");

        const isOpen =
            item.classList.contains("active");


        document
            .querySelectorAll(".faq-item")
            .forEach(faq => {

                faq.classList.remove("active");

            });


        if (!isOpen) {

            item.classList.add("active");

        }

    });

});


/* =========================
   SCRATCH CARD
========================= */

const scratchCover =
    document.getElementById("scratchCover");

if (scratchCover) {

    scratchCover.addEventListener("click", () => {

        scratchCover.classList.add("revealed");

        showToast(
            "Congratulations! You won a Diwali surprise 🎉"
        );

    });

}


/* =========================
   GIFT BUILDER
========================= */

const builderBtn =
    document.getElementById("builderBtn");

if (builderBtn) {

    builderBtn.addEventListener("click", () => {

        showToast(
            "Your custom Diwali hamper is being prepared 🎁"
        );

    });

}


/* =========================
   WHATSAPP CHECKOUT
========================= */

const checkoutBtn =
    document.getElementById("checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            showToast(
                "Your cart is empty 🛒"
            );

            return;
        }


        let message =
            "🪔 *AARYA SWEET - DIWALI ORDER* 🪔\n\n";


        let total = 0;


        cart.forEach(item => {

            const itemTotal =
                item.price * item.qty;

            total += itemTotal;

            message +=
                `🍬 ${item.name} x ${item.qty} - ₹${itemTotal}\n`;

        });


        message +=
            `\n💰 *Total: ₹${total}*\n\n`;

        message +=
            "I want to place this order from Aarya Sweet. 🪔";


        const whatsappNumber =
            "918271586670";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCartDrawer();

        if (searchPanel) {
            searchPanel.classList.remove("active");
        }

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

    }

});


/* =========================
   INITIAL LOAD
========================= */

renderProducts();

renderCart();

updateCartCount();

updateWishlistCount();


console.log(
    "🪔 Aarya Sweet website loaded successfully!"
);