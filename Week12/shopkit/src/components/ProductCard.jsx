import styles from "./ProductCard.module.css";
function ProductCard({ name, price, description }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>${price}</h4>
      <button>View Product</button>
    </div>
  );
}
export default ProductCard;