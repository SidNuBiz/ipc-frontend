import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import { loadUser } from "./actions/userAction";
import { myOrders } from "./actions/orderAction";
import store from "./store";
import ProtectedRoute from './components/Misc/Route'
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ResetPassPage from './pages/ResetPassPage.jsx';
import ServiceOverviewPage from './pages/Services/ServiceOverviewPage.jsx';
import ServiceCannabisPage from './pages/Services/ServiceCannabisPage.jsx';
import ServiceNhpPage from './pages/Services/ServiceNhpPage.jsx';
import ServicePharmaceuticalPage from './pages/Services/ServicePharmaceuticalPage.jsx';
import ServiceFnbPage from './pages/Services/ServiceFnbPage.jsx';
import ServiceRndPage from './pages/Services/ServiceRndPage.jsx';
import ServiceCdsPage from './pages/Services/ServiceCdsPage.jsx';
import ServiceEnvironmentalPage from './pages/Services/ServiceEnvironmentalPage.jsx';
import ServiceAgriculturePage from './pages/Services/ServiceAgriculturePage.jsx';
import WhoWeArePage from './pages/About/WhoWeArePage.jsx';
import LicensingAndAccreditationsPage from './pages/About/LicensingAndAccreditationsPage.jsx';
import EquipmentPage from './pages/About/EquipmentPage.jsx';
import LegalPage from './pages/Contact/LegalPage.jsx';
import BusinessInfoPage from './pages/Contact/BusinessInfoPage.jsx';
import NowOpeningPage from './pages/Career/NowOpeningPage.jsx';
import FaqPage from './pages/Store/FaqPage.jsx';
import AllTestingServicesPage from './pages/Store/AllTestingServicesPage.jsx';
import ServiceView from './components/Store/StoreMisc/ServiceView.jsx';
import CartPage from './pages/Store/CartPage.jsx';
import CheckoutPage from './pages/Store/CheckoutPage.jsx';
import ProfilePage from './pages/User/ProfilePage.jsx';
import MyAccountPage from './pages/User/MyAccountPage.jsx';
import OrderView from './components/User/MyAccountPage/OrderView.jsx';


function App() {

  useEffect ( () => {
    store.dispatch(loadUser());
    store.dispatch(myOrders())
    Aos.init({duration: 1500});

  }, [])

  return (

    <BrowserRouter>

      {/* Routes */}

      <Routes>

        <Route element={<ProtectedRoute />}>
             
          {/* User Dropdown */}

          <Route path="/user/profile" element={<ProfilePage />} />

          <Route path="/user/account" element={<MyAccountPage />} />

          <Route path="user/account/orders/:orderId" element={<OrderView />} />

          <Route path="/checkout" element={<CheckoutPage />} />

        </Route>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/reset-pass" element={<ResetPassPage />} />

        <Route path="/cart" element={<CartPage />} />

        {/* About Dropdown Pages */}

        <Route path="/about/who-we-are" element={<WhoWeArePage />} />

        <Route path="/about/licensing" element={<LicensingAndAccreditationsPage />} />

        <Route path="/about/equipment" element={<EquipmentPage />} />


        {/* Contact Dropdown Pages */}

        <Route path="/contact/legal" element={<LegalPage />} />

        <Route path="/contact/business-information" element={<BusinessInfoPage />} />


        {/* Career Dropdown Pages */}


        <Route path="/career/now-opening" element={<NowOpeningPage />} />


        {/* Store Dropdown Pages */}

        <Route path="/store/faq" element={<FaqPage />} />

        <Route path="/store/all" element={<AllTestingServicesPage />} />

        <Route path="/store/all/testing-services/:serviceId" element={<ServiceView />} />
        

        {/* Services Dropdown Pages */}

        <Route path="/services/overview" element={<ServiceOverviewPage />} />

        <Route path="/services/cannabis" element={<ServiceCannabisPage />} />

        <Route path="/services/nhp" element={<ServiceNhpPage />} />

        <Route path="/services/pharmaceutical" element={<ServicePharmaceuticalPage />} />

        <Route path="/services/fnb" element={<ServiceFnbPage />} />

        <Route path="/services/rnd" element={<ServiceRndPage />} />

        <Route path="/services/cds" element={<ServiceCdsPage />} />

        <Route path="/services/environmental" element={<ServiceEnvironmentalPage />} />

        <Route path="/services/agriculture" element={<ServiceAgriculturePage />} />

      </Routes>

      
    </BrowserRouter>
    
  );
}

export default App;
