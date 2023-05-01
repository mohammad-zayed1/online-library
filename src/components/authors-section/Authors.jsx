import "./authors.css";
import Title from "../landing-page/title/Title";
import Author from "./author/Author";
import info from "./info";

export default function Authors() {
  const authorsCards = info.map((item) => {
    return (
      <Author
        key={item.id}
        img={item.img}
        name={item.name}
        position={item.position}
        description={item.description}
      />
    );
  });
  return (
    <div id="authors">
      <Title title="Authors" />
      <div className="authors container">{authorsCards}</div>
    </div>
  );
}
