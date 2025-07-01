// src/components/screens/HomeScreen.jsx
import React from 'react';
import './HomeScreen.css';
import BlackCardWithDonut from '../BlackCardWithDonut';

const HomeScreen = () => {
  return (
    <div className="home-container container-fluid py-3">
      {/* 1. Search Field */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search here..."
        />
      </div>

      {/* 2. Black Color Card */}
      {/* <div className="black-card" style={{height: 250}}> */}
        {/* <h5 className="text-white mb-1">Welcome User</h5>
        <p className="text-light mb-0">Check out today’s highlights!</p> */}
        <BlackCardWithDonut />
      {/* </div> */}

      {/* 3. Horizontal Category List */}
      <div><h3>Catergory</h3></div>
      <div className="horizontal-scroll mb-3">
        {['Yoga', 'Cardio', 'Weight', 'Zumba', 'HIIT', 'Diet'].map((item, i) => (
          <button key={i} className="btn btn-outline-primary px-3 py-1 rounded-pill">
            {item}
          </button>
        ))}
      </div>

      {/* 4. Horizontal Card Menu */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3>Popular</h3>
        <h10>See All</h10>
      </div>
      <div className="horizontal-scroll" style={{height: 190}}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div className="card menu-card me-3" key={num}>
            <div className="card-body">
              <h6 className="card-title">Meal Plan {num}</h6>
              <p className="card-text text-muted small">Customized menu & routine</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HomeScreen;
