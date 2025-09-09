import './App.css';
import Menu from '../components/Menu/Menu.jsx';
import MainSection from '../components/MainSection/MainSection.jsx';
import SearchArea from '../components/SearchArea/SearchArea.jsx';

export default function App() {
  return(
    <div className='main-grid'>
      <Menu />
      <MainSection />
      <SearchArea />
    </div>
  )
}
 
