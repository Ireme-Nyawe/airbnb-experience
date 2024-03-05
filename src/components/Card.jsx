export default function Card(){
    return (
        <div className="card">
            <img src="./src/assets/card-image.png" alt="car-image" className="card-image"/>
            <div className="card-details">
                <img src="./src/assets/star.png" alt="star" className="card-star" />
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">-USA</span>
            </div>
            <p>Life lessons with kate zeran</p>
            <p><span className="bold">from $136</span>/person</p>
        </div>
    )
}