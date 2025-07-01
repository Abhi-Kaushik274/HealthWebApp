// src/components/MobileFooterNavbar.jsx
import React from 'react';
import './MobileFooterNavbar.css';

const MobileFooterNavbar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mobile-footer-nav">
      <i className={`bi bi-house${activeTab === 'home' ? '-fill' : ''}`} onClick={() => setActiveTab('home')}></i>
      <i className={`bi bi-search${activeTab === 'search' ? '-heart' : ''}`} onClick={() => setActiveTab('search')}></i>
      <i className="bi bi-plus-circle" onClick={() => alert('Add button clicked!')}></i>
      <i className={`bi bi-person${activeTab === 'profile' ? '-fill' : ''}`} onClick={() => setActiveTab('profile')}></i>
    </div>
  );
};

export default MobileFooterNavbar;
