export default function Card({img, rating, reviews, country, title, price}){
    return (
        <div className="card">
            <img src={img} alt="car-image" className="card-image"/>
            <div className="card-details">
                <img src="./src/assets/star.png" alt="star" className="card-star" />
                <span>{rating}</span>
                <span className="gray">({reviews})</span>
                <span className="gray">-{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">from ${price}</span>/person</p>
        </div>
    )
}