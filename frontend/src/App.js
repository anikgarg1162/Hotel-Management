// import './App.css';
 import Homepage from './components/Homepage';
 import LoginPage from './components/LoginPage';
 import { Route, Routes} from 'react-router-dom';
import StaffLogin from './components/StaffLogin';
import Userfunctions from './components/Userfunctions';
import BookingPage from './components/BookingPage';
import SignUp from './components/SingUp';
import Feedback from './components/Feedback';
import UserHousekeep from './components/UserHousekeep';
import Stafffunction from './components/Stafffunction';
import UserFooderder from './components/UserFoodorder';
import ShowBooking from './components/ShowBooking';
import ShowHousekeeping from './components/ShowHousekeeping';
import ShowFeedback from './components/ShowFeedback';
import PackagePlanner from './components/PackagePlanner';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/UserFunction" element={<Userfunctions />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Userhouseekeep" element={<UserHousekeep />} />
          <Route path="/UserFoodorder" element={<UserFooderder />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/Stafffunction" element={<Stafffunction />} />
          <Route path="/ShowBooking" element={<ShowBooking />} />
          <Route path="/ShowHousekeeping" element={<ShowHousekeeping />} />
          <Route path="/ShowFeedback" element={<ShowFeedback />} />
          <Route path="/Planner" element={<PackagePlanner />} />
      </Routes>
    </div>
    
     
      );
}
export default App;
