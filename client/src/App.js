import { AboutUs, Cart, EditCandy, OneCandy, UserForm, UserLogin, AllCandies, CreateCandy, LandingPage, AdminLanding, Deals } from './components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'; 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<AllCandies />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about/us" element={<AboutUs />} />
          <Route path="/admin/login" element={<UserLogin />} />
          <Route path="/one/candy/:id" element={<OneCandy />} />
          <Route path="/admin/register" element={<UserForm />} />
          <Route path="/admin" element={<PrivateRoute />}> 
            <Route index element={<AdminLanding />} />
            <Route path="dashboard" element={<AdminLanding />} />
            <Route path="candy/create" element={<CreateCandy />} />
            <Route path="candy/edit/:id" element={<EditCandy />} />
          </Route>
          <Route path="/candy/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;