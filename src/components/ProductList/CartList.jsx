import React, { useEffect, useState } from "react";

const CartList = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const handleIncrease = () => {
    const _CART = CART.map((item, index) => {
      return cartIndex === index
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    setCART(_CART);
  };

  return (
    <div>
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div
            className="container mx-auto max-w-sm w-full p-4 sm:w-1/2"
            key={cartItem?.id}
          >
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl hover:shadow-teal-400 duration-300">
              <div className="prod-title sm:text-left text-center">
                <p className="text-base uppercase text-gray-900 font-bold">
                  {cartItem?.title}
                </p>
                <p className="uppercase text-sm text-gray-400">
                  {cartItem?.description}
                </p>
              </div>
              <div className="prod-img flex sm:flex-row flex-col sm:gap-0 gap-2 items-center justify-between mt-3">
                <img src={cartItem?.image} alt={cartItem?.title} width={50} />
                <button
                  className="border px-2 bg-slate-200 rounded-md"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIndex === index
                        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  -
                </button>
                <p className="font-bold text-base">{cartItem?.quantity}</p>
                <button
                  className="border px-2 bg-slate-200 rounded-md"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIndex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </button>
                <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-base">
                  Price: ${cartItem?.price}
                </p>
                <p className="font-bold text-base">
                  Total: ${cartItem?.price * cartItem?.quantity}
                </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center text-2xl my-5">
        <p>
          Total: $
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default CartList;
