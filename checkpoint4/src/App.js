import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Component/Profile/ProfilPhoto';
import react from 'react'
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <br></br>
      <br></br>
      <div className="fulll">
        <FullName></FullName>
        <Address></Address>
      </div>
    </div>
  );
}

export default App;
