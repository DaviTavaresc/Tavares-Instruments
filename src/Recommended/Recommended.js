import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Pearl" title="Pearl" />
          <Button onClickHandler={handleClick} value="Odery" title="Odery" />
          <Button onClickHandler={handleClick} value="Tama" title="Tama" />
          <Button onClickHandler={handleClick} value="D`One" title="D`One" />
          <Button onClickHandler={handleClick} value="Fender" title="Fender" />
          <Button onClickHandler={handleClick} value="Tagima" title="Tagima" />
          <Button onClickHandler={handleClick} value="Gibson" title="Gibson" />
          <Button onClickHandler={handleClick} value="Ibanez" title="Ibanez" />
          <Button onClickHandler={handleClick} value="Klass" title="Klass" />
          <Button onClickHandler={handleClick} value="PHX" title="PHX" />
          <Button onClickHandler={handleClick} value="strinberg" title="Strinberg" />
          <Button onClickHandler={handleClick} value="Yamaha" title="Yamaha" />
          <Button onClickHandler={handleClick} value="roland" title="Roland" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
