//CSS Import
import style from "./App.module.css";

//Component Import"
import Display from "./components/Display";
import CustomButton from "./components/CustomButton";
import Container from "./components/Container";
import Heading from "./components/Heading";

const App = () => {
  return (
    <Container>
      <Heading />
      <div className={style.calculator_body}>
        <Display></Display>
        <CustomButton></CustomButton>
      </div>
    </Container>
  );
};

export default App;
