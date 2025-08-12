//CSS Import
import style from "../static/style/Button.module.css";

const Button = ({ value }) => {
  return <button className={style.button}>{value}</button>;
};

export default Button;
