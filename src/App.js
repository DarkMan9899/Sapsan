import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomaPage from "./pages/HomaPage";
import AboutUs from "./pages/AboutUs";
import SubscribeSection from "./section/SubscribeSection";
import Header from "./components/Header";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import PressCenterPage from "./pages/PressCenterPage";
import ProductionPage from "./pages/ProductionPage";
import CooperationPage from "./pages/CooperationPage";
import ContactPage from "./pages/ContactPage";

// ավելացրու մյուս էջերը...

function App() {
    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<HomaPage />} />
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/catalogs" element={<ProductCatalogPage/>}/>
                    <Route path="/pressCenter" element={<PressCenterPage/>}/>
                    <Route path="/production" element={<ProductionPage/>}/>
                    <Route path="/cooperation" element={<CooperationPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </main>
            <SubscribeSection/>
        </Router>
    );
}

export default App;
