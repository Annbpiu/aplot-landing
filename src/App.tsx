import './App.scss'
import { Header } from './components/Header'
import Main from "./components/Main.tsx";
import AboutCompany from "./components/AboutCompany.tsx";
import NewStyle from "./components/NewStyle.tsx";

function App() {

  return (
    <>
      <Header />
        <div className="h-full">
            <Main />
            <AboutCompany />
            <NewStyle />
        </div>
    </>
  )
}

export default App
