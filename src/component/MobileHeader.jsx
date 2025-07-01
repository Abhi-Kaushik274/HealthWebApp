// src/components/MobileFooterNavbar.jsx
import React from 'react';
import './MobileHeader.css';

const MobileHeader = ({ activeTab, setActiveTab }) => {
    return (
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom bg-white shadow-sm" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        {/* Profile Info */}
        <div className="d-flex align-items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUhaVz///8AXU4VZVcAWUkDYVKtwb2HpJ4MYlTr8O8aZlmDoZrV3917nZZrk4vD0c5gi4JQgXenvLfc5OL1+PeetrG6y8c4dGkAU0JYhn11mJAxcGSPrKZIfXLN2daXsKsf+yiTAAACnElEQVRIie2W3dKiMAyGm6TBtvzTgoBa7/8uNxX9lnUU8WRndmZzICI+eZM0TVHqv/0T5owYfUsZpOrc94eG8RvW4MHD3YpyP6rLkBBbFDZdQ4W7MMdR/j00qBE1V3W62UM6JzK1QrfcEp7Ej+fPIAtXarfypM+S6UdNlNAaVohLSQyi3JQA3QeSKoCcFVkbZiHNNVgRwx6gdZsgWoharlKRg5G4MymuaGn/IdgkeBTXbg2OzNgCXLYkJcOYPK/B0GVZ1gXItiqLAUp6Ah9mN2J1R4CTu4M5GqNXIGx0npMUb34TWF/7/lqIUjuJNUvy72pTQtAP8CdETUQOAab3kgkc0zY08JwbC7ihKAHlh2QCdNU8pxa/ge60GWp6/GM5E2H2AMWleV+ctBw/tu4cZTrwW63DA9g5F3sGtYV+S5Em6WamW3HWoJk3U0yxevAvmlxSqLf3FUk3d1pRjEUjy0Z5EQdWerh31JZkJ1qo+L6RKW1k3S36H8iYNFfuCYd94yqRftLmxjqjK7tzzN2iBX++kNauvabRet43WBW2yxwPSzvE447huBjhNNh7i2cX/FDPP1FGNc3zpJA/YxIQrYsuBxXJgSDfHEoQb3ejiTLkut8kna9y2E01K3fxuoT5nTTDyRwKJi05yQdjl40BGztqUq2O5chJ+SXIY1noPNiGy2CHqu86iK31oT3FFqzN8Fi8qq9MlQBRhdEFgssJyj7TQbaL6wv5MeYI3GWvGo/BYRkbKLxv/KjrXEAwjdeVv4F6yMPLTmdQKcdwVBPB3NwUoW3sAzSXN+eHqWWu9jgVvuTGx2tTHrCvjxm3nRqwr5y28+slWdaR0nsGIRuZpsqwrKMz8siQjPmdLftk7lJ903tr8uu3pf/21+wXsjgfxYZ9EOwAAAAASUVORK5CYII="
            alt="Profile"
            className="rounded-circle me-2"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />
          <div>
            <div className="text-muted small">Welcome back,</div>
            <div className="fw-bold">Abhi Kaushik</div>
          </div>
        </div>
  
        {/* Bell Icon */}
        <i className="bi bi-bell-fill fs-4 text-dark"></i>
      </div>
    );
  };

export default MobileHeader;
