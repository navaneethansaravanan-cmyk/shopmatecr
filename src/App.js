import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AllRoutes } from './routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { CartProvider } from './context/CartContext';





function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
