import React, { useState } from 'react';

function Card({ id, image, info, price, name,removeTours }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}.....`;
                    
    function readmorehandler() {
        setReadmore(!readmore);
    }


    return (
        <div className="card">
            <img src={image} alt={name} className="image" />
            <div className="tour-info">
                <h3 className="tour-price">{price}</h3>
                <h3 className="tour-name">{name}</h3>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmorehandler}>
                    {readmore ? 'Show less' : 'Read more'}
                </span>
            </div>
            <button className='btn-read' onClick={()=>removeTours(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;
