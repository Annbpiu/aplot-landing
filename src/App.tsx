import './App.scss'
import { Header } from './components/Header'
import Main from "./components/Main.tsx";

function App() {

  return (
    <>
      <Header />
        <div className="h-full">
            <Main />

        </div>
    </>
  )
}

export default App
