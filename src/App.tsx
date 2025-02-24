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
import World from "./components/World.tsx";
import Logistic from "./components/Logistic.tsx";
import Safety from "./components/Safety.tsx";
import WelcomeTo from "./components/WelcomeTo.tsx";
import YouTubePlayer from "./components/YouTubePlayer.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
        <div className="overflow-hidden">
          <Header />
                <main className="h-full flex flex-col overflow-hidden md:overflow-visible">
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
                    <World />
                    <Logistic />
                    <Safety />
                    <WelcomeTo />
                    <YouTubePlayer />
                    <Footer />
                </main>
        </div>
  )
}

export default App
