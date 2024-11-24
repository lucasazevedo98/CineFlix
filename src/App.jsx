import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Catalog from "./components/Catalog"

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
