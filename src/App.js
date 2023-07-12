import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import { loadUser } from "./actions/userAction";
import { myOrders } from "./actions/orderAction";
import { getProduct } from "./actions/productAction";
import { mySample } from "./actions/limsAction";
import { getService } from './actions/serviceAction';
import store from "./store";
import ProtectedRoute from './components/Misc/Route'
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ResetPassPage from './pages/ResetPassPage.jsx';
import ServiceOverviewPage from './pages/Services/ServiceOverviewPage.jsx';
import ServicePage from './pages/Services/ServicePage';
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
import MySamplePage from './pages/User/MySamplePage';
import OrderView from './components/User/MyAccountPage/OrderView.jsx';
import AdminHomePage from './pages/Admin/AdminHomePage.jsx';
import AdminLoginPage from './pages/Admin/AdminLoginPage.jsx';
import AdminServicesPage from './pages/Admin/AdminServices/AdminServicesPage.jsx';
import AdminServiceEditPage from './pages/Admin/AdminServices/AdminServiceEditPage';
import AdminServiceCreatePage from './pages/Admin/AdminServices/AdminServiceCreatePage';
import AdminOrdersPage from './pages/Admin/AdminOrders/AdminOrdersPage';
import AdminOrderView from './components/Admin/AdminOrdersPage/AdminOrderView';
import AdminMembersPage from './pages/Admin/AdminMembers/AdminMembersPage';
import AdminNotificationsPage from './pages/Admin/AdminNotifications/AdminNotificationsPage';
// import NotificationPopup from './components/Misc/NotificationPopup';
import TestingSubmissionFormPage from './pages/Store/TestingSubmissionFormPage';
import SampleView from './components/User/MySamplePage/SampleView';
import PackagesPage from './pages/Store/PackagesPage';
import TestsPricingPage from './pages/Store/TestsPricingPage';
import PackageView from './components/Store/StoreMisc/PackageView';
import PaymentSuccessfulPage from './pages/PaymentSuccessfulPage';
import Invoice from './components/User/MyAccountPage/Invoice';


function App() {

  useEffect ( () => {
    store.dispatch(loadUser());
    store.dispatch(myOrders());
    store.dispatch(getService());
    store.dispatch(mySample())
    Aos.init({duration: 1500});

  }, [])

  return (

    <BrowserRouter>

      {/* Notification popup

      <div>
        <NotificationPopup />
      </div> */}

      {/* Routes */}

      <Routes>

        {/* Admin Routes */}

       
        <Route path="/IPC-admin-portal/login" element={<AdminLoginPage />} />


        {/* Protected Routes */}

        <Route element={<ProtectedRoute  />}>
             
          {/* User Dropdown */}

          <Route path="/user/profile" element={<ProfilePage />} />

          <Route path="/user/account" element={<MyAccountPage />} />

          <Route path='/user/samples' element={<MySamplePage />} />

          <Route path="user/samples/sample/:sampleId" element={<SampleView />} />

          <Route path="user/account/orders/:orderId" element={<OrderView />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/testing-submission" element={<TestingSubmissionFormPage />} />

          <Route path="/invoice/:invoiceId/:orderId" element={<Invoice />} />

          <Route path="/store/packages" element={<PackagesPage />} />

          <Route path="/store/packages/package/:packageId" element={<PackageView />} />

          <Route path="/store/tests/pricing" element={<TestsPricingPage />} />
          
        </Route>

        <Route element={<ProtectedRoute isAdmin={true} />}>
          {/* Admin Routes */}

          <Route path="/IPC-admin-portal"  element={<AdminHomePage  />} />

          <Route path="/IPC-admin-portal/notifications"  element={<AdminNotificationsPage  />} />

          <Route path="/IPC-admin-portal/services"  element={<AdminServicesPage  />} />

          <Route path="/IPC-admin-portal/services/create"  element={<AdminServiceCreatePage  />} />

          <Route path="/IPC-admin-portal/services/:id"  element={<AdminServiceEditPage  />} />

          <Route path="/IPC-admin-portal/orders"  element={<AdminOrdersPage  />} />

          <Route path="/IPC-admin-portal/orders/:id"  element={<AdminOrderView  />} />

          <Route path="/IPC-admin-portal/members"  element={<AdminMembersPage  />} />


        </Route>

        {/* Public Routes */}

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/reset-pass/:token" element={<ResetPassPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/payment-success" element={<PaymentSuccessfulPage />} />

        

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
        <Route path="/services/:id" element={<ServicePage />} />

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
