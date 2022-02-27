/* eslint-disable no-unreachable */
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Header from "./Header";

function App() {
  const url = "https://course-api.com/react-tours-project";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTour = data.filter((item) => item.id !== id);
    setData(newTour);
    console.log(data);
  };

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTimeout(() => {
        setData(data);
        setLoading(false);
      }, 500);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => getData(), []);
  console.log(data);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (data.length === 0) {
    return (
      <div className='flex align-center justify-center flex-col'>
        <Header />
        <button className='btn btn-primary mx-auto' onClick={() => getData()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <Cards data={data} removeTour={removeTour} />
    </>
  );
}

export default App;
