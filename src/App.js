import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import './App.css';

function App() {
  return (
    <div >
      <Hero />
      <div className="app">

      <Header />
      <Buttons />
      <MainContent />
      <Footer />
      </div>
    </div>
  );
}

export default App;
