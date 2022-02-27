import React from "react";
import Card from "./Card";
import Header from "./Header";

const Cards = ({ data, removeTour }) => {
  return (
    <>
      <Header />
      <div className='container mx-auto flex flex-col align-center justify-center max-w-lg '>
        <div className='mx-auto '>
          {data.map((data) => {
            return <Card key={data.id} {...data} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
