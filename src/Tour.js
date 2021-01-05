import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return <article className="single-tour">
    <img src={image} alt="tour-pic" />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {
          // If readMore is false show 200 characters, else show the whole text
          readMore ? info : `${info.substring(0, 200)}...`
        }
        {/* If user click on this button then change the state of the readMore to opiste value. If is true then set to be false */}
        <button onClick={() => setReadMore(!readMore)}>
          {
            readMore ? 'Show less' : 'Show more'
          }
        </button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        not interested
      </button>
    </footer>
  </article>
};

export default Tour;