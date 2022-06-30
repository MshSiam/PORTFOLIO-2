import { Container, Grid } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Profile from "./components/profile/Profile"
import Portfolio from "./pages/Portfolio/Portfolio"
import Resume from "./pages/Resume/Resume"

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Profile></Profile>
        </Grid>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route
                path="/portfolio"
                element={<Portfolio></Portfolio>}></Route>
              <Route path="/" element={<Resume></Resume>}></Route>
            </Routes>
          </BrowserRouter>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
