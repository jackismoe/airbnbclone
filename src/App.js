import './App.css';
import CovidBanner from './components/CovidBanner'
import Banner from './components/Banner'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <CovidBanner/>
      <Banner/>
      <Content/>
    </div>
  );
}

export default App;
