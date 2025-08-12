import style from "../static/style/Display.module.css";

const Display = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

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
