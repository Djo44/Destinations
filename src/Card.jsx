import React, { useState } from "react";

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [text, setText] = useState(true);

  return (
    <div className='card w-full bg-base-100 shadow-xl my-11'>
      <figure>
        <img src={image} alt={name} className='max-h-26 w-full' />
      </figure>
      <div className='card-body gap-6'>
        <div className='flex justify-between'>
          <h2 className='card-title mr-11'>{name}</h2>
          <h2 className='bg-blue-300 py-1 px-4 font-semibold rounded-md my-auto'>{`$${price}`}</h2>
        </div>
        <p>
          {text ? `${info.substring(0, 200)}...` : info}{" "}
          <button className='text-blue-800 font-extrabold text-lg ml-2' onClick={() => setText(!text)}>
            {text ? "Read More" : "Show Less"}
          </button>
        </p>
        <div className='justify-end card-actions'>
          <button className='btn btn-primary mx-auto' onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
