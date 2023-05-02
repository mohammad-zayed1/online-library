export default function Book() {
  return (
    <div
      className="book  overflow-hidden "
      style={{
        width: "200px",
        "border-radius": "10px",
        "background-color": "#EBECEC",
      }}
    >
      <div className="img-book bg-danger p-3 d-flex justify-content-center align-items-center">
        <img src="./img/book.png" alt="book" />
      </div>
      <div className="book-info d-flex flex-column p-2">
        <div className="title-book mb-2">
          <b>Tilte:</b> When We Believed in Mermaids: A Novel by{" "}
          <span className="text-danger fw-semibold"> Barbara O&#39;Neal </span>{" "}
        </div>
        <div className="rate-book mb-2">
          <b>Rate:</b> 4.0 / 5 <i className="fa-solid fa-star text-warning"></i>
        </div>
        <div className="price-book mb-2">
          <b>Price:</b> 7.5$
        </div>
        <div className="add-to-cart mb-2 mt-2 align-self-center py-1 px-2 bg-dark text-light rounded-1 ">
          Add to cart +
        </div>
      </div>
    </div>
  );
}
