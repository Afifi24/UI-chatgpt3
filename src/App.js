import {Blog,Features,Footer,Header,Possibility,Whatgpt3} from './containers'
import { Brand,Cta,Feature, Article,Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
           <Navbar/>
           <Header/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
