import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <>
      {product?.map((productItem, productIndex) => {
        return (
          <div
            className="flex justify-center items-center"
            key={productItem.id}
          >
            <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
              <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl hover:shadow-teal-400 duration-300">
                <div className="prod-title">
                  <p className="text-2xl uppercase text-gray-900 font-bold">
                    {productItem.title}
                  </p>
                  <p className="uppercase text-sm text-gray-400">
                    {productItem.description}
                  </p>
                </div>
                <div className="prod-img">
                  <img src={productItem.image} alt={productItem.title} />
                </div>
                <div className="prod-info grid gap-10">
                  <div>
                    <ul className="flex flex-row justify-center items-center">
                      <li className="mr-4 last:mr-0">
                        <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#blue"
                            className="block w-6 h-6 bg-blue-900 rounded-full"
                          />
                        </span>
                      </li>
                      <li className="mr-4 last:mr-0">
                        <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#yellow"
                            className="block w-6 h-6 bg-yellow-500 rounded-full"
                          />
                        </span>
                      </li>
                      <li className="mr-4 last:mr-0">
                        <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#red"
                            className="block w-6 h-6 bg-red-500 rounded-full"
                          />
                        </span>
                      </li>
                      <li className="mr-4 last:mr-0">
                        <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#green"
                            className="block w-6 h-6 bg-green-500 rounded-full"
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">${productItem.price}</p>
                    <button 
                    onClick={() => addToCart(productItem)}  // () => addToCart(productItem) means which product is click that will be add in add to cart 
                    className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
