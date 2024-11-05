import React from 'react';
import { ProductData } from './ProductData';


const ProductList = () => {
  return (
    <div id="scart">
      <br /><br /><br />
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <table className="table">
              <thead>
                <tr>
                  <th> </th>
                  <th className="product-name">Product Name</th>
                  <th className="product-brand">Brand</th>
                  <th className="product-stock">Stock</th>
                  <th className="product-sales">Sales</th>
                  <th className="product-price">Price</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {ProductData.map((product) => (
                  <tr key={product.id}>
                    <td><input type="checkbox" /></td>
                    <td><img src={product.icon } alt={product.icon} /> {product.icon}</td>
                    <td>{product.brand}</td>
                    <td>{product.stock}</td>
                    <td>{product.sales}</td>
                    <td>{product.price}</td>
                    <td>
                      {/* Add your options here */}
                      <button></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

