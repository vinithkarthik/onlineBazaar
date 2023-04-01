import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductContextProvider from './Contexts/ProductContext';
import Footer from './Components/Footer/Footer';

const Products = React.lazy(() => import('./Components/Products/Products'));
const Register = React.lazy(() => import('./Components/Register/Register'));

const SignIn = React.lazy(() => import('./Components/SignIn/SignIn'));


const font = "'Dosis', sans-serif";
const buttonTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          // color: "#C02858"
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: '#C02858',
      },
    },
  },
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: '#C02858',
    },
    black: {
      main: '#000'
    }
  },
});

function App() {
  return (
    <ProductContextProvider>
      <ThemeProvider theme={buttonTheme}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="">
            <Router>
              <Header />
              <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/products' element={<Products />}></Route>
                <Route exact path='/register' element={<Register />}></Route>
                <Route exact path='/signin' element={<SignIn />}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </Suspense>
      </ThemeProvider>
    </ProductContextProvider>
  );
}

export default App;
