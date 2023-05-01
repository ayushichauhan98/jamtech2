
import './App.css';
import  {BrowserRouter,Route,Routes} from 'react-router-dom'
import Avatar from './Avatar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProfileCard from './ProfileCard';
import Attendance from './Attendance';
import data from './data.json'
function App() {
 
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Avatar mydata={data.data}/>}/>
    <Route path='/profile-card' element={<ProfileCard mydata={data.data}/>}/>
    <Route path='/attendance' element={<Attendance mydata={data.data}/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
