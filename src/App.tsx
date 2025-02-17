import './App.scss'
import { Header } from './components/Header'
import Main from "./components/Main.tsx";
import AboutCompany from "./components/AboutCompany.tsx";
import NewStyle from "./components/NewStyle.tsx";
import MetaleviDoors from "./components/MetaleviDoors.tsx";
import Textur from "./components/Textur.tsx";
import Combination from "./components/Combination.tsx";
import Technologic from "./components/Technologic.tsx";
import Action from "./components/Action.tsx";
import ActionsSlider from "./components/ActionsSlider.tsx";
import Price from "./components/Price.tsx";
import BestPrice from "./components/BestPrice.tsx";
import {ComplectationDoors} from "./components/ComplectationDoors.tsx";

function App() {

  return (
    <>
      <Header />
        <div className="h-full">
            <Main />
            <AboutCompany />
            <NewStyle />
            <MetaleviDoors />
            <Textur />
            <Combination />
            <Technologic />
            <Action />
            <ActionsSlider />
            <Price />
            <BestPrice />
            <ComplectationDoors />
        </div>
    </>
  )
}

export default App
