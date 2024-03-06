import Card from "./components/Card";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import data from "./components/data";

export default function App() {
  const Cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
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
