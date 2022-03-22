/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useEffect } from 'react';
import './index.css';
import Table from '../table/Table-flashSale';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function Flashsale() {
  const [data_list_product, setData_list_product] = useState([]);
  const [reportType, setReportType] = useState('male');

  useEffect(async () => {
    switch (reportType) {
      case 'male':
        await fetch('http://localhost:5000/fashionapp/product_male')
          .then(reponse => reponse.json())
          .then(data => {
            setData_list_product(data.product);
          });
        break;
      case 'female':
        await fetch('http://localhost:5000/fashionapp/product_female')
          .then(reponse => reponse.json())
          .then(data => {
            setData_list_product(data.product);
          });
        break;
    }
  }, [reportType]);
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
  // console.log(data_list_product_wommen)
  return (
    <div className="profile-container">
      <div>
        {/* <h2 className="page-header" style={{ textAlign: 'center' }}>
          Products Female
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <TableMale
                  limit='4'
                  headData={ProductTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={data_list_product_wommen}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <h2 className="page-header" style={{ textAlign: 'center' }}>
          Products {reportType}
        </h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <ButtonGroup aria-label="outlined primary button group">
                  <Button
                    variant={reportType === 'male' ? 'contained' : ''}
                    onClick={() => setReportType('male')}
                  >
                    Male
                  </Button>
                  <Button
                    variant={reportType === 'female' ? 'contained' : ''}
                    onClick={() => setReportType('female')}
                  >
                    Female
                  </Button>
                </ButtonGroup>
                <Table
                  limit="4"
                  headData={ProductTableHead}
                  reportType={reportType}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={data_list_product}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

  /* <form className="profile-form" >
<h2 className="page-header" style={{ textAlign: 'center' }}>
  Product Sale
</h2>
<div className="profile-input">
  <label className="">Title</label>
  <input
    id="title"
    type="text"
    placeholder=""
  />
</div>

<div className="profile-input">
  <label className="">Quantity</label>
  <input
    id="quantity"
    type="text"
    placeholder=""
  />
</div>
<div className="profile-input">
  <label className="">Price</label>
  <input
    id="price"
    type="text"
    placeholder=""
  />
</div>
<div className="profile-input">
  <label className="">Status</label>
  <input
    type="text"
    placeholder={title[0].status}
  />
</div>
<button type="submit" className="btn">
  Save
</button>
</form> */

