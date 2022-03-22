import React, { useState } from 'react';
import axiosInstance from '../../Util';
import ProductSelector from './ProductSelector';

import './table.css';

const Table = props => {
  const [selectedProductID, setSelectedProductID] = useState({});
  const [form, setForm] = useState({
    limit: '',
    discount: '',
    time: 9,
    date: new Date().toISOString().split('T')[0],
  });

  const formHandler = e => {
    setForm(state => ({ ...state, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axiosInstance.post(
        `/flashSale/${props.reportType}`,
        { id: selectedProductID, ...form },
        config
      );
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const onChangeHandler = id => {
    setSelectedProductID(id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="profile-input">
          <label>Title</label>
          <ProductSelector
            products={props.bodyData}
            onChange={onChangeHandler}
            value={selectedProductID}
          />
        </div>
        <div className="profile-input">
          <label>Quantity</label>
          <input
            id="limit"
            type="number"
            value={form.limit}
            onChange={formHandler}
          />
        </div>
        <div className="profile-input">
          <label>Discount</label>
          <input
            id="discount"
            type="text"
            value={form.discount}
            onChange={formHandler}
          />
        </div>
        <div className="profile-input">
          <label>Time</label>
          <select id="time" onChange={formHandler} value={form.time}>
            <option value="9">9:00</option>
            <option value="12">12:00</option>
            <option value="15">15:00</option>
            <option value="18">18:00</option>
            <option value="21">21:00</option>
          </select>
        </div>
        <div className="profile-input">
          <label>Date</label>
          <input
            id="date"
            type="date"
            onChange={formHandler}
            value={form.date}
          />
        </div>
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default Table;
