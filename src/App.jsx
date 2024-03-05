import Card from "./components/Card";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import data from "./components/data";

export default function App() {
  const Cards = data.map((item) => {
    return (
      <Card
        img={item.img}
        rating={item.rating}
        reviews={item.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        key={item.id}
        openspots={item.openspots}
      />
    );
  });
  return (
    <>
      <Nav />
      <Hero />
      <div className="cards-container">{Cards}</div>
    </>
  );
}
