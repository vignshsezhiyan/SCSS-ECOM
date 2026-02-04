import logo from './logo.svg';
import './global.scss';
import MainComp from './components/main/main';
import Header from './components/header/header';
import MainInnerComp from './components/main/maininnerone';
import MainInnerTwo from './components/main/maininnertwo';
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Header />
      <MainComp/>
      <MainInnerComp/>
      <MainInnerTwo/>
      <Footer/>
    </div>

  );
}

export default App;
