import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/Main'
import FlyerDeals from './components/Flyers/FlyerDeals';
import BudgetingTools from './components/Resources/BudgetingTools';
import ResourceDirectory from './components/Resources/ResourceDirectory';
import EducationalContent from './components/Resources/EducationalContent';
import Maps from './components/Resources/Maps';
import CommunityForum from './components/Resources/CommunityForum';
import EventsCalendar from './components/Resources/EventsCalendar';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/flyers" element={<FlyerDeals/>} />
        <Route path="/resources/budgeting-tools" element={<BudgetingTools/>} />
        <Route path='/resources/community-forum' element={<CommunityForum/>} />
        <Route path='/resources/events-calendar' element={<EventsCalendar/>} />
        <Route path="/resources/resources-directory" element={<ResourceDirectory/>} />
        <Route path='/resources/educational-content' element={<EducationalContent/>} />
        <Route path='/resources/maps' element={<Maps/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
