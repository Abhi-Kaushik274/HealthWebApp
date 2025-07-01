// import logo from './logo.svg';
// import './App.css';
// import GridView from './component/GridView';
// import MobileFooterNavbar from '../src/component/MobileFooterNavbar';

// function App() {
//   return (
//     // <div className="min-h-screen bg-[#f3f0ec] relative">
//     //   <div className="text-center pt-10 text-2xl">iPhone Micro Tab Demo</div>
//     //   <GridView />
//     // </div>
//     <div className="container">
//       <div className="desktop-only">This shows on Web</div>
//       <div className="mobile-only">
//       <div>
//       <h1 className="text-center"><i>Healthify React App</i></h1>
//       {/* Other content here */}

//       <MobileFooterNavbar />
//     </div>
//       </div>
//     </div>

//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import HomeScreen from '../src/component/screens/HomeScreen';
import SearchScreen from '../src/component/screens/SearchScreen';
import ProfileScreen from '../src/component/screens/ProfileScreen';
import MobileFooterNavbar from '../src/component/MobileFooterNavbar';
import MobileHeader from './component/MobileHeader';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen />;
      case 'search': return <SearchScreen />;
      case 'profile': return <ProfileScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="mobile-only">
      <div style={{ paddingBottom: '60px' }}> {/* to avoid footer overlap */}
        <MobileHeader />
        {renderActiveScreen()}
        <MobileFooterNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;

