import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000}
          title="$500 - $1.000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2000}
          title="$1.000 - $2.000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={5.000}
          title="2.000 - $5.000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
