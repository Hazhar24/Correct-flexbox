import Home from "./components/Layout/Home"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}