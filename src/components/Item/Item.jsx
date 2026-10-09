import "./Item.css";
export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="card">
      <div className="card-img-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p className="card-description">{description}</p>
        <div className="card-price-badge">
          <span className="price-symbol">$</span>
          <span className="price-number">{price}</span>
        </div>
      </div>

      {/* Podemos usar children y reutilizar este componente */}
      {children}
    </article>
  );
};
