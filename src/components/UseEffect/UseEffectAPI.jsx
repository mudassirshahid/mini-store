import React, { useState, useEffect } from "react";

// Fetch API Using Hooks
function UseEffect() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  const [color, setColor] = useState("#fff");
  const [swapColor, setswapColor] = useState(false);

  const BASE_URL = "https://dummyjson.com";

  const fetchData = async () => {
    // loading
    setloading(true);
    setTimeout(async () => {
      try {
        // Using fetch method
        const response = await fetch(`${BASE_URL}/products?limit=10`);
        const posts = await response.json();
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        setError(error);
      } finally {
        setloading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong please try again</div>;
  }

  const handleBgColor = () => {
    setColor(swapColor ? "#fff" : "#000")
    setswapColor(!swapColor)

  }

  return (
    <>
      <div className="flex flex-col justify-center items-center" style={{background: color, color: swapColor ? '#fff' : '#000'}}>
        <button className="bg-slate-600 text-slate-50 px-3 py-1 rounded-md my-2" onClick={handleBgColor}>{swapColor ? "Light mode" : "Dark mode"}</button>
        <h2 className="text-3xl">Data Fetching</h2>
        <div>
          {loading ? (
            "DATA LOADING..."
          ) : (
            <>
              <h3 className="text-center">Total: {posts?.total}</h3>
              <h4 className="text-center">Limit: {posts?.limit}</h4>
              <ul>
                {posts?.products?.map((post, index) => (
                  <li key={index} className="flex flex-col gap-3 justify-center text-center items-center border rounded-md p-2 my-5">
                   <img src={post.images[0]} className="w-32"/>
                    <p>ID: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Stock: {post.stock}</p>
                    <p>Price: {post.price}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UseEffect;


