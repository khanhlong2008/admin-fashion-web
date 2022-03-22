/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Table from '../components/table/Table';

const ProductTableHead = ['', 'category', 'title', 'price', 'quantity'];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{index}</td>
    <td>{item.category}</td>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td>{item.quantity}</td>
  </tr>
);


const Products = () => {
  const [dataTableM, setDataTableM] = useState([]);
  const [dataTableF, setDataTableF] = useState([]);

  useEffect(async () => {
    await fetch('http://localhost:5000/fashionapp/product_male')
      .then(reponse => reponse.json())
      .then(data => {
        setDataTableM(data.product);
        // console.log(data.product);
      });
    await fetch('http://localhost:5000/fashionapp/product_female')
      .then(reponse => reponse.json())
      .then(data => {
        setDataTableF(data.product);
        // console.log(data.product);
      });
  }, []);

  return (
    <div>
      <h2 className="page-header">Products Male</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                id="table"
                limit="10"
                headData={ProductTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={dataTableM}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="page-header">Products Female</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="3"
                headData={ProductTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={dataTableF}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
