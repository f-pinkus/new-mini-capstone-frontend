export function ProductsIndex({products}) {
  return (
    <div>
      <h1>{products.length} Products</h1>

      {products.map((product) => {
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} />
          <p>{product.description}</p>
          <h5>{product.price}</h5>
          <h6>{product.supplier_id}</h6>
        </div>
      })}
    </div>
  );
}