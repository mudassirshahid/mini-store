import React, { useEffect, useState } from "react";

function ApiCall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const fetchData = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(`${BASE_URL}/todos`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong. Please try again.</div>;
  }

  return (
    <>
      <h2 className="text-center">API Call</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((item) => (
            <li key={item?.id}>
              <p>User ID: {item?.userId}</p>
              <p>Title: {item?.title}</p>
              <p>Completed: {item?.completed ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ApiCall;
