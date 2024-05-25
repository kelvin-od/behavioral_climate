
import './App.css';
import Bottomfooter from './components/Bottomfooter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Main from './components/Main';
import Main_one from './components/Main_one';
import Main_two from './components/Main_two';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Main_one />
      <Main_two />
      <Footer />
      <Bottomfooter />
    </div>
  );
}

export default App;
