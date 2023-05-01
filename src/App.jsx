import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import { UserInfo } from "./components/UserInfo";
import userObject from "./extras/extra.json";
import { ProductList } from "./components/ProductList";
import { products } from "./extras/products";
import { EventButton } from "./components/EventButton";
import { Counter } from "./components/Counter";
function App() {
  const handleButtonClick = () => console.log("clicked");
  return (
    <>
      <MyButton text="this is my text as props" />;
      <UserInfo UserObject={userObject} />
      <ProductList productList={products} />
      <EventButton buttonText={"EventButton"} onClick={handleButtonClick} />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
