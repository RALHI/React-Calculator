//CSS Import
import style from "./App.module.css";

//Component Import"
import Display from "./components/Display";
import CustomButton from "./components/CustomButton";
import Container from "./components/Container";
import Heading from "./components/Heading";

const App = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Container>
        <Heading />
        <div className={style.calculator_body}>
          <Display handleOnChange={handleOnChange}></Display>
          <CustomButton></CustomButton>
        </div>
      </Container>
      <Container>
        <p>This the Calculator Developed using React JS</p>
      </Container>
    </>
  );
};

export default App;
