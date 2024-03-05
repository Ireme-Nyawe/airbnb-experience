import Card from "./components/Card";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="cards-container">
        <Card
          img="./src/assets/card-image.png"
          rating="5.0"
          reviewCount="6"
          Country="USA"
          title="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img="./src/assets/bike.jpg"
          rating="6.1"
          reviewCount="9"
          Country="Rwanda"
          title="Group Mountain Biking"
          price="150"
        />
        <Card
          img="./src/assets/teacher.png"
          rating="4.5"
          reviewCount="8"
          Country="Spain"
          title="Learn with teacher mwenyewe"
          price="120"
        />
        <Card
          img="./src/assets/flower.jpg"
          rating="5.1"
          reviewCount="5"
          Country="Italian"
          title="Learn wedding photography
          "
          price="200"
        />
        <Card
          img="./src/assets/students.png"
          rating="3.8"
          reviewCount="3"
          Country="TZ"
          title="Learn academics within class"
          price="100"
        />
      </div>
    </>
  );
}
