import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import styled from "styled-components"
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";

function App() {

  const [habilitado, setHabilitado] = React.useState(false)
 
  return (
    <Container>
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path='/' element={
            <HomePage
              habilitado={habilitado}
              setHabilitado={setHabilitado}
              
             />} />
                    
          <Route path="/cart" element={
            <Cart
              habilitado={habilitado}
              setHabilitado={setHabilitado}
            />} />
         
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`

export default App;
