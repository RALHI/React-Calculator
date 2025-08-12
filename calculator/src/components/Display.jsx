import style from "../static/style/Display.module.css";

const Display = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      name="display"
      className={style.display}
      onChange={handleOnChange}
    />
  );
};

export default Display;
