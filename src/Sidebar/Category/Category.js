import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="bateria"
          title="Bateria"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="guitarra"
          title="Guitarra"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="baixo"
          title="Baixo"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="teclado"
          title="Teclado"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
