import "./styles.css";

import GetInstructions from "./Components/instruction";
import CalorieCards from "./Components/calorie";

const Instructions = {
  0: "build a container",
  1: "create a seperate function and use it as a component",
  2: 'pass props "calory and food" and call it to main component'
};

const menu = {
  Pizza: 82,
  Burger: 70,
  Pepsi: 400,
  Brownie: 180,
  "Fried Rice": 90,
  Lasagnia: 200,
  "Ice Cream": 100
};
export default function AppMy() {
  return (
    <div className="App">
      <GetInstructions inst={Instructions} />
      <CalorieCards menu={menu} />
    </div>
  );
}
