import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import { loadUser } from "./actions/userAction";
import { myOrders } from "./actions/orderAction";
import { mySample } from "./actions/limsAction";
import { getService } from './actions/serviceAction';
import {getAnalyses} from './actions/analysisAction';
import {getPackages} from './actions/packageAction'
import store from "./store";
import ProtectedRoute from './components/Misc/Route'



import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Loader from './pages/Loader.jsx';
// import ResetPassPage from './pages/ResetPassPage.jsx';
// import ServiceOverviewPage from './pages/Services/ServiceOverviewPage.jsx';
// import ServicePage from './pages/Services/ServicePage';
// import WhoWeArePage from './pages/About/WhoWeArePage.jsx';
// import LicensingAndAccreditationsPage from './pages/About/LicensingAndAccreditationsPage.jsx';
// import EquipmentPage from './pages/About/EquipmentPage.jsx';
// import LegalPage from './pages/Contact/LegalPage.jsx';
// import BusinessInfoPage from './pages/Contact/BusinessInfoPage.jsx';
// import NowOpeningPage from './pages/Career/NowOpeningPage.jsx';
// import FaqPage from './pages/Store/FaqPage.jsx';
// import AllTestingServicesPage from './pages/Store/AllTestingServicesPage.jsx';
// import ServiceView from './components/Store/StoreMisc/ServiceView.jsx';
// import CartPage from './pages/Store/CartPage.jsx';
// import CheckoutPage from './pages/Store/CheckoutPage.jsx';
// import ProfilePage from './pages/User/ProfilePage.jsx';
// import MyAccountPage from './pages/User/MyAccountPage.jsx';
// import MySamplePage from './pages/User/MySamplePage';
// import OrderView from './components/User/MyAccountPage/OrderView.jsx';
// import AdminHomePage from './pages/Admin/AdminHomePage.jsx';
// import AdminLoginPage from './pages/Admin/AdminLoginPage.jsx';
// import AdminServicesPage from './pages/Admin/AdminServices/AdminServicesPage.jsx';
// import AdminServiceEditPage from './pages/Admin/AdminServices/AdminServiceEditPage';
// import AdminServiceCreatePage from './pages/Admin/AdminServices/AdminServiceCreatePage';
// import AdminAnalysesPage from './pages/Admin/AdminAnalyses/AdminAnalysisPage';
// import AdminAnalysisCreatePage from './pages/Admin/AdminAnalyses/AdminAnalysisCreatePage';
// import AdminAnalysisEditPage from './pages/Admin/AdminAnalyses/AdminAnalysisEditPage';
// import AdminPackagesPage from './pages/Admin/AdminPackages/AdminPacckagePage';
// import AdminPackageCreatePage from './pages/Admin/AdminPackages/AdminPackageCreatePage';
// import AdminPackageEditPage from './pages/Admin/AdminPackages/AdminPackageEditPage';
// import AdminOrdersPage from './pages/Admin/AdminOrders/AdminOrdersPage';
// import AdminOrderSamplesPage from './pages/Admin/AdminOrderSamples/AdminOrderSamplesPage.jsx';
// import AdminOrderSampleDetails from './components/Admin/AdminOrderSamplesPage/AdminOrderSampleDetails.jsx';
// import AdminOrderView from './components/Admin/AdminOrdersPage/AdminOrderView';
// import AdminMembersPage from './pages/Admin/AdminMembers/AdminMembersPage';
// import AdminNotificationsPage from './pages/Admin/AdminNotifications/AdminNotificationsPage';
// import TestingSubmissionFormPage from './pages/Store/TestingSubmissionFormPage';
// import SampleView from './components/User/MySamplePage/SampleView';
// import PackagesPage from './pages/Store/PackagesPage';
// import TestsPricingPage from './pages/Store/TestsPricingPage';
// import PackageView from './components/Store/StoreMisc/PackageView';
// import Invoice from './components/User/MyAccountPage/Invoice';
// import AdminHomePageContentEdit from './pages/Admin/AdminHomePageContentEdit';
// import AdminWhoWeArePageContentEdit from './pages/Admin/AdminWhoWeArePageContentEdit';
// import AdminLicensingPageEdit from './pages/Admin/AdminLicensingPageEdit';
// import AdminEquipmentPageEdit from './pages/Admin/AdminEquipmentPageEdit';
// import AdminLegalPageEdit from './pages/Admin/AdminLegalPageEdit';
// import AdminFaqPageEdit from './pages/Admin/AdminFaqPageEdit';
// import AdminServiceHoverBoxPage from './pages/Admin/AdminServices/AdminServiceHoverBoxPage';
// import AdminMatrixEdit from './pages/Admin/AdminMatrixEdit';
// import InvoiceX from './pages/invoiceX';

// const HomePage = lazy(() => import('./pages/HomePage.jsx'));
// const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage.jsx'));
const ResetPassPage = lazy(() => import('./pages/ResetPassPage.jsx'));
const ServiceOverviewPage = lazy(() => import('./pages/Services/ServiceOverviewPage.jsx'));
const ServicePage = lazy(() => import('./pages/Services/ServicePage'));
const WhoWeArePage = lazy(() => import('./pages/About/WhoWeArePage.jsx'));
const LicensingAndAccreditationsPage = lazy(() => import('./pages/About/LicensingAndAccreditationsPage.jsx'));
const EquipmentPage = lazy(() => import('./pages/About/EquipmentPage.jsx'));
const LegalPage = lazy(() => import('./pages/Contact/LegalPage.jsx'));
const BusinessInfoPage = lazy(() => import('./pages/Contact/BusinessInfoPage.jsx'));
const NowOpeningPage = lazy(() => import('./pages/Career/NowOpeningPage.jsx'));
const FaqPage = lazy(() => import('./pages/Store/FaqPage.jsx'));
const AllTestingServicesPage = lazy(() => import('./pages/Store/AllTestingServicesPage.jsx'));
const ServiceView = lazy(() => import('./components/Store/StoreMisc/ServiceView.jsx'));
const CartPage = lazy(() => import('./pages/Store/CartPage.jsx'));
const CheckoutPage = lazy(() => import('./pages/Store/CheckoutPage.jsx'));
const ProfilePage = lazy(() => import('./pages/User/ProfilePage.jsx'));
const MyAccountPage = lazy(() => import('./pages/User/MyAccountPage.jsx'));
const MySamplePage = lazy(() => import('./pages/User/MySamplePage'));
const OrderView = lazy(() => import('./components/User/MyAccountPage/OrderView.jsx'));
const AdminHomePage = lazy(() => import('./pages/Admin/AdminHomePage.jsx'));
const AdminLoginPage = lazy(() => import('./pages/Admin/AdminLoginPage.jsx'));
const AdminServicesPage = lazy(() => import('./pages/Admin/AdminServices/AdminServicesPage.jsx'));
const AdminServiceEditPage = lazy(() => import('./pages/Admin/AdminServices/AdminServiceEditPage'));
const AdminServiceCreatePage = lazy(() => import('./pages/Admin/AdminServices/AdminServiceCreatePage'));
const AdminAnalysesPage = lazy(() => import('./pages/Admin/AdminAnalyses/AdminAnalysisPage'));
const AdminAnalysisCreatePage = lazy(() => import('./pages/Admin/AdminAnalyses/AdminAnalysisCreatePage'));
const AdminAnalysisEditPage = lazy(() => import('./pages/Admin/AdminAnalyses/AdminAnalysisEditPage'));
const AdminPackagesPage = lazy(() => import('./pages/Admin/AdminPackages/AdminPacckagePage'));
const AdminPackageCreatePage = lazy(() => import('./pages/Admin/AdminPackages/AdminPackageCreatePage'));
const AdminPackageEditPage = lazy(() => import('./pages/Admin/AdminPackages/AdminPackageEditPage'));
const AdminOrdersPage = lazy(() => import('./pages/Admin/AdminOrders/AdminOrdersPage'));
const AdminOrderSamplesPage = lazy(() => import('./pages/Admin/AdminOrderSamples/AdminOrderSamplesPage.jsx'));
const AdminOrderSampleDetails = lazy(() => import('./components/Admin/AdminOrderSamplesPage/AdminOrderSampleDetails.jsx'));
const AdminOrderView = lazy(() => import('./components/Admin/AdminOrdersPage/AdminOrderView'));
const AdminMembersPage = lazy(() => import('./pages/Admin/AdminMembers/AdminMembersPage'));
const AdminNotificationsPage = lazy(() => import('./pages/Admin/AdminNotifications/AdminNotificationsPage'));
const TestingSubmissionFormPage = lazy(() => import('./pages/Store/TestingSubmissionFormPage'));
const SampleView = lazy(() => import('./components/User/MySamplePage/SampleView'));
const PackagesPage = lazy(() => import('./pages/Store/PackagesPage'));
const TestsPricingPage = lazy(() => import('./pages/Store/TestsPricingPage'));
const PackageView = lazy(() => import('./components/Store/StoreMisc/PackageView'));
const Invoice = lazy(() => import('./components/User/MyAccountPage/Invoice'));
const AdminHomePageContentEdit = lazy(() => import('./pages/Admin/AdminHomePageContentEdit'));
const AdminWhoWeArePageContentEdit = lazy(() => import('./pages/Admin/AdminWhoWeArePageContentEdit'));
const AdminLicensingPageEdit = lazy(() => import('./pages/Admin/AdminLicensingPageEdit'));
const AdminEquipmentPageEdit = lazy(() => import('./pages/Admin/AdminEquipmentPageEdit'));
const AdminLegalPageEdit = lazy(() => import('./pages/Admin/AdminLegalPageEdit'));
const AdminFaqPageEdit = lazy(() => import('./pages/Admin/AdminFaqPageEdit'));
const AdminServiceHoverBoxPage = lazy(() => import('./pages/Admin/AdminServices/AdminServiceHoverBoxPage'));
const AdminMatrixEdit = lazy(() => import('./pages/Admin/AdminMatrixEdit'));
// const InvoiceX = lazy(() => import('./pages/invoiceX'));




function App() {

  useEffect ( () => {
    store.dispatch(loadUser());
    store.dispatch(myOrders());
    store.dispatch(getService());
    store.dispatch(mySample())
    store.dispatch(getPackages());
    store.dispatch(getAnalyses());
    Aos.init({duration: 1500});

  }, [])

  return (

    <BrowserRouter>

      {/* Routes */}

      <Suspense fallback={<Loader />}>

     

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

          <Route path="/IPC-admin-portal"  element={<AdminHomePage />} />

          <Route path="/IPC-admin-portal/notifications"  element={<AdminNotificationsPage />} />

          <Route path="/IPC-admin-portal/services"  element={<AdminServicesPage />} />

          <Route path="/IPC-admin-portal/services/create"  element={<AdminServiceCreatePage />} />

          <Route path="/IPC-admin-portal/services/:id"  element={<AdminServiceEditPage />} />

          <Route path="/IPC-admin-portal/analyses"  element={<AdminAnalysesPage />} />

          <Route path="/IPC-admin-portal/analyses/create"  element={<AdminAnalysisCreatePage />} />

          <Route path="/IPC-admin-portal/analyses/:id"  element={<AdminAnalysisEditPage />} />

          <Route path="/IPC-admin-portal/packages"  element={<AdminPackagesPage />} />

          <Route path="/IPC-admin-portal/packages/create"  element={<AdminPackageCreatePage />} />

          <Route path="/IPC-admin-portal/packages/:id"  element={<AdminPackageEditPage />} />

          <Route path="/IPC-admin-portal/orders"  element={<AdminOrdersPage />} />

          <Route path="/IPC-admin-portal/orders/:id"  element={<AdminOrderView />} />

          <Route path="/IPC-admin-portal/members"  element={<AdminMembersPage />} />

          <Route path="/IPC-admin-portal/matrix"  element={<AdminMatrixEdit />} />

          <Route path="/IPC-admin-portal/order/samples/:id"  element={<AdminOrderSamplesPage />} />

          <Route path="/IPC-admin-portal/order/sample/:id"  element={<AdminOrderSampleDetails />} />




          {/* Site Content Edit */}
          <Route path="/IPC-admin-portal/home/edit" element={<AdminHomePageContentEdit />} />
          <Route path="/IPC-admin-portal/about/who-we-are/edit" element={<AdminWhoWeArePageContentEdit />} />
          <Route path="IPC-admin-portal/about/licensing/edit" element={<AdminLicensingPageEdit />} />
          <Route path="IPC-admin-portal/about/equipment/edit" element={<AdminEquipmentPageEdit />} />
          <Route path="IPC-admin-portal/legal/edit" element={<AdminLegalPageEdit />} />
          <Route path="IPC-admin-portal/faq/edit" element={<AdminFaqPageEdit />} />
          <Route path="IPC-admin-portal/service/hoverbox" element={<AdminServiceHoverBoxPage />} />



        </Route>

        {/* Public Routes */}

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/reset-pass/:token" element={<ResetPassPage />} />

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
        <Route path="/services/:id" element={<ServicePage />} />

        {/* <Route path="/invoicex" element={<InvoiceX />} /> */}

       

      </Routes>

      </Suspense>
      
    </BrowserRouter>
    
  );
}

export default App;
