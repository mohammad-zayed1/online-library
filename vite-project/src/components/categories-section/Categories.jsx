import "./categories.css";
import Card from "./card/Card";
import Title from "../landing-page/title/Title";
import data from "./data";

export default function Categories() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        description={item.description}
      />
    );
  });
  console.log(cards);
  return (
    <div id="categories">
      <Title title="Catergories" />
      <div className="categories container">{cards}</div>
    </div>
  );
}
