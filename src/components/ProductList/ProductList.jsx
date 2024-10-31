import React, { lazy, Suspense, useState } from "react";
// import ProductCard from "./ProductCard";
import CartList from "./CartList";
const ProductCard = lazy(() => import('./ProductCard'))

const ProductList = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Laptop Backpack",
      price: 109,
      description: "A cool laptop backpack",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: 3.9,
    },
    {
      id: 2,
      title: "Casual T-Shirt for Men",
      price: 22,
      description: "Slim-fitting style, t-shoty for men",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: 4.1,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55,
      description: "Great outerwear jackets for spring, autumn, or winter.",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15,
      description: "An aweome shirt for men",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "A very cool jewlery for women",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: 3.9,
    },
    {
      id: 6,
      title: "Gold-plated Earrings",
      price: 100,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: 1.9,
    },
  ]);

  const [cart, setCart] = useState(() => {
    // Load cart from localStorage or set to an empty array
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showCart, setShowCart] = useState(false)

  // const addToCart = (data) => {
  //   // console.log(data);
  //   setCart([...cart, { ...data, quantity: 1 }]); // [...cart , data] means set all values of cart , + as well as the value that comes when click data value that will add after onclick. And initial value of quantity will be 1. Here quntity role is key
  // };

  // const addToCart = (data) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === data.id);
  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === data.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, { ...data, quantity: 1 }];
  //     }
  //   });
  // };
  
  const addToCart = (data) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === data.id);
      if (existingProduct) {
        const updatedCart = prevCart.map((item) =>
          item.id === data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const newCart = [...prevCart, { ...data, quantity: 1 }];
        // Save new cart to localStorage
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }
    });
  };

  const handleShow = (value) => {
    setShowCart(value)
  }
  return (
    <>
    <div className="flex flex-col gap-2 items-center">
      <h2 onClick={() => handleShow(false)} className="text-2xl font-bold cursor-pointer  ">Products</h2>
      <div onClick={() => handleShow(true)} className="flex justify-center items-center text-xl gap-1 font-semibold leading-6 text-gray-900">
        <button className="bg-emerald-300 px-5 py-3 rounded">Cart <sup>{cart.length}</sup></button>
      </div>
      </div>
      {
  showCart ? (
    <CartList cart={cart} />
  ) : (
    <Suspense fallback={'Please Wait...'}>
      <ProductCard product={product} addToCart={addToCart} />
    </Suspense>
  )
}
    </>
  );
};

export default ProductList;
