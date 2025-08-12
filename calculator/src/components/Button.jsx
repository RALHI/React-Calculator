//CSS Import
import style from "../static/style/Button.module.css";

const Button = ({ value }) => {
  const handleonclick = () => {
    return console.log(`${value} button is clicked`);
  };

  return (
    <button className={style.button} onClick={handleonclick}>
      {value}
    </button>
  );
};

export default Button;
