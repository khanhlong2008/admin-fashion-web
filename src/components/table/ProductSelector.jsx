import { Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;

const ProductSelector = ({ products, value, onChange }) => {
  return (
    <div className="container">
      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder="Select a product"
        optionFilterProp="children"
        value={value}
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        loading={false}
      >
        {products.map(({ _id, title }) => (
          <Option key={_id} value={_id}>
            {title}
          </Option>
        ))}
      </Select>
    </div>
  );
};
export default ProductSelector;
