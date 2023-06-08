import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CssTest() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Link to="/" className="">
        <button className="bg-gray-500 p-4 m-4 rounded-md">Homepage</button>
      </Link>
      <div className="p-[4%] flex flex-wrap gap-1 after:grow-[999999999]">
        {data?.map((item, index) => {
          return (
            <div
              className="relative grow h-[150px] overflow-hidden"
              key={index}
            >
              <img
                className="h-[150px] min-w-full min-h-full object-cover align-bottom"
                src={item.download_url}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CssTest;
