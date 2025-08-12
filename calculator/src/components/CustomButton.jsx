//CSS Import
import style from "../static/style/CustomButton.module.css";

//Component Import
import Button from "./Button";

const CustomButton = () => {
  const button_list = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  // let button_list = [];

  return (
    <>
      <div className={style.calculator_button}>
        {button_list.length === 0 ? <h4>No Button Found</h4> : null}
        {button_list.map((i) => (
          <Button value={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default CustomButton;
