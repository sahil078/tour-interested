import {useState} from "react";

function Card({ id, image, info, price, name, removeTour }) {
    const [Readmore, setReadmore] = useState(false);
    const desc = Readmore ? info :`${info.substring(0, 100)}...`;

    function readmoreHandler() {
        setReadmore(!Readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt=""></img>
            <div className="tour-details">
            <div className="tour-info">
                <h4 className="tour-price">{price}</h4>
                <h3 className="tour-name">{name}</h3>
            </div>
            <div className="description">
                {desc}
                <span className="read-more" onClick={readmoreHandler}>
                    {Readmore ? "Show less" : "Read more"}
                </span>
            </div>
            </div>

            <button className="btn" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;
