export function ProductsNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" name="name"/>
        </div>
        <div>
          Price: <input type="text" name="price"/>
        </div>
        <div>
          Description: <input type="text" name="description"/>
        </div>
        <div>
          Supplier ID: <input type="text" name="supplier_id"/>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}