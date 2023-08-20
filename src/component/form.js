import "../styles/form.css"

const Form=props=>{
    return(
        <div className="input-form">
            <div className="label">Product Name</div>
            <p><input  type="text" placeholder="Product Name"/></p>
            <div className="label">Stock</div>
            <p><input  type="text" placeholder="stock"/></p>
            <div className="label">Price</div>
            <p><input  type="text" placeholder="Price"/></p>
            <div className="label">Category</div>
            <p><input  type="text" placeholder="category"/></p>

            <button type="submit">Add Product</button>

        </div>
    )
}

export default Form