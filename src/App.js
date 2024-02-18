import './App.css';
import { Header } from './Components/LayOut/Header';
import { Footer } from './Components/LayOut/Footer';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <>
    <Header />
      <AllRoutes />
    <Footer />
    </>
  );
}

export default App;
