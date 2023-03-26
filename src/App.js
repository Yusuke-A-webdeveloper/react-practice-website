import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Sharedlayout';
import Home from './pages/Home';
import Consumer from './pages/Consumer';
import Brands from './pages/Brands';
import Publisher from './pages/Publisher';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Cookie from './pages/Cookie';
import Imprint from './pages/Imprint';
import Error from './pages/Error';
import Singlejob from './pages/Singlejob';
import ForBrands from './pages/Contact/ForBrands';
import ForPublisher from './pages/Contact/ForPublisher';
import ForPress from './pages/Contact/ForPress';
import ForCareers from './pages/Contact/ForCareers';
import ContactHome from './pages/Contact/ContactHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="consumer" element={<Consumer />} />
          <Route path="brands" element={<Brands />} />
          <Route path="publishers" element={<Publisher />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/:id" element={<Singlejob />} />

          <Route path="contact" element={<Contact />}>
            <Route index element={<ContactHome />} />
            <Route path="for-brands" element={<ForBrands />} />
            <Route path="for-publishers" element={<ForPublisher />} />
            <Route path="about-us" element={<ForPress />} />
            <Route path="careers" element={<ForCareers />} />
          </Route>

          <Route path="blog" element={<Blog />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookie" element={<Cookie />} />
          <Route path="imprint" element={<Imprint />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
