import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const data = [
//   { name: 'Protein', value: 30 },
//   { name: 'Carbs', value: 50 },
//   { name: 'Fat', value: 20 },
// ];

// const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const BlackCardWithDonut = () => {
//   return (
//     <div
//       className="black-card mb-3 p-3 rounded-4 bg-dark text-white position-relative"
//       style={{ height: 250 }}
//     >
//       {/* Donut at top-right corner */}
//       <div style={{ position: 'absolute', top: 10, right: 10 }}>
//         <PieChart width={80} height={80}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={25}
//             outerRadius={35}
//             paddingAngle={3}
//             dataKey="value"
//             stroke="none"
//             cornerRadius={10} // This adds rounded edges
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </div>

//       {/* Text content */}
//       <h5 className="mb-1">Welcome User</h5>
//       <p className="text-light mb-0">Check out today’s highlights!</p>
//     </div>
//   );
// };




const donutData = [
    { name: 'done', value: 7 },
    { name: 'remaining', value: 2 }
  ];
  const COLORS = ['#ffffff', '#2c2c2c']; // White progress, dark background blend


// Line chart data
const data = {
    labels: ['1AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM'],
    datasets: [
      {
        label: 'Workout',
        data: [0, 1, 2, 1.5, 3, 2.5, 3.5],
        borderColor: '#ffffff',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    // <div
    //   className="black-card mb-3 p-3 rounded-4 d-flex justify-content-between align-items-start"
    //   style={{ backgroundColor: '#12110f', color: 'white', height: 250 }}
    // >
    //   {/* Left Content */}
    //   <div className="d-flex flex-column justify-content-between" style={{ flex: 1 }}>
    //     <div>
    //       <h5 className="mb-1">Today’s Activities</h5>
    //       <p className="text-muted mb-3" style={{color: 'black'}}>Body Weight</p>
    //     </div>

    //     <div className="d-flex flex-column gap-3 small">
    //       {/* Calories Burned */}
    //       <div>
    //         <strong style={{ fontSize: '18px' }}>1200</strong> kcal
    //         <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
    //           <div className="progress-bar bg-light" style={{ width: '80%' }} />
    //         </div>
    //         {/* <div className="text-muted mt-1">Calories Burned</div> */}
    //       </div>

    //       {/* Heart Rate */}
    //       <div>
    //         <strong style={{ fontSize: '18px' }}>90</strong> bpm
    //         <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
    //           <div className="progress-bar bg-light" style={{ width: '60%' }} />
    //         </div>
    //         {/* <div className="text-muted mt-1">Heart Rate</div> */}
    //       </div>

    //       {/* Time */}
    //       <div>
    //         <strong style={{ fontSize: '18px' }}>03:00</strong> hr
    //         <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
    //           <div className="progress-bar bg-light" style={{ width: '90%' }} />
    //         </div>
    //         {/* <div className="text-muted mt-1">Time</div> */}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Donut Chart */}
    //   <div className="position-relative" style={{ width: 100, height: 100 }}>
    //     <PieChart width={100} height={100}>
    //       <Pie
    //         data={donutData}
    //         innerRadius={30}
    //         outerRadius={40}
    //         paddingAngle={2}
    //         dataKey="value"
    //         stroke="none"
    //         cornerRadius={10}
    //         startAngle={90}
    //         endAngle={-270}
    //       >
    //         {donutData.map((entry, index) => (
    //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //         ))}
    //       </Pie>
    //     </PieChart>
    //     <div
    //       className="position-absolute text-white text-center"
    //       style={{ top: 32, left: 15, width: 70, fontSize: '13px' }}
    //     >
    //       <div style={{ fontWeight: 'bold', fontSize: '14px' }}>7/9</div>
    //       <small className="text" style={{color: 'white'}}>Workout</small>
    //     </div>
    //   </div>
    // </div>

    ///235454---s
//     <div
//   className="black-card mb-3 p-3 d-flex justify-content-between align-items-start rounded-4"
//   style={{ backgroundColor: '#11110f', height: '250px' }}
// >
//   {/* Left Content */}
//   <div className="d-flex flex-column justify-content-between h-100" style={{ flex: 1 }}>
//     <div>
//       <h5 className="text-white mb-1">Today’s Activities</h5>
//       <p className="text-light mb-3 small">Body Weight</p>
//     </div>

//     {/* Stats */}
//     <div className="d-flex justify-content-between gap-3">
//       {/* Calories Burned */}
//       <div style={{ flex: 1 }}>
//         <strong className="text-white" style={{ fontSize: '18px' }}>1200</strong> <span className="text-light small">kcal</span>
//         <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
//           <div className="progress-bar bg-light" style={{ width: '80%' }} />
//         </div>
//         {/* <div className="text-muted mt-1 small">Calories Burned</div> */}
//       </div>

//       {/* Heart Rate */}
//       <div style={{ flex: 1 }}>
//         <strong className="text-white" style={{ fontSize: '18px' }}>90</strong> <span className="text-light small">bpm</span>
//         <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
//           <div className="progress-bar bg-light" style={{ width: '60%' }} />
//         </div>
//         {/* <div className="text-muted mt-1 small">Heart Rate</div> */}
//       </div>

//       {/* Time */}
//       <div style={{ flex: 1 }}>
//         <strong className="text-white" style={{ fontSize: '18px' }}>03:00</strong> <span className="text-light small">hr</span>
//         <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
//           <div className="progress-bar bg-light" style={{ width: '90%' }} />
//         </div>
//         {/* <div className="text-muted mt-1 small">Time</div> */}
//       </div>
//     </div>
//   </div>

//   {/* Donut Chart */}
//   <div style={{ width: '80px', height: '80px', position: 'relative' }}>
//     <svg width="80" height="80">
//       <circle
//         cx="40"
//         cy="40"
//         r="30"
//         stroke="#333"
//         strokeWidth="8"
//         fill="none"
//       />
//       <circle
//         cx="40"
//         cy="40"
//         r="30"
//         stroke="#ffffff"
//         strokeWidth="8"
//         fill="none"
//         strokeDasharray={`${(7 / 9) * 2 * Math.PI * 30} ${2 * Math.PI * 30}`}
//         strokeLinecap="round"
//         transform="rotate(-90 40 40)"
//       />
//     </svg>
//     <div
//       className="position-absolute top-50 start-50 translate-middle text-white text-center"
//       style={{ fontSize: '12px', lineHeight: '1.1' }}
//     >
//       <div><strong>7/9</strong></div>
//       <div className="small text-light">Workout</div>
//     </div>
//   </div>
// </div>









    <div
      className="black-card mb-3 p-3 d-flex justify-content-between align-items-start rounded-4"
      style={{ backgroundColor: '#11110f', height: '250px' }}
    >
      {/* Left Content */}
      <div className="d-flex flex-column justify-content-between h-100" style={{ flex: 2 }}>
        <div>
          <h5 className="text-white mb-1">Today’s Activities</h5>
          <p className="text-light mb-3 small">Body Weight</p>
        </div>

        {/* Line Chart */}
        <div style={{ height: '60px', width: '98%' }}>
          <Line data={data} options={options} />
        </div>

        {/* Bottom Stats */}
        <div className="d-flex justify-content-between gap-3 pt-2">
          <div style={{ flex: 1 }}>
            <strong className="text-white" style={{ fontSize: '18px' }}>1200</strong> <span className="text-light small">kcal</span>
            <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
              <div className="progress-bar bg-light" style={{ width: '80%' }} />
            </div>
            {/* <div className="text-muted mt-1 small">Calories Burned</div> */}
          </div>
          <div style={{ flex: 1 }}>
            <strong className="text-white" style={{ fontSize: '18px' }}>90</strong> <span className="text-light small">bpm</span>
            <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
              <div className="progress-bar bg-light" style={{ width: '60%' }} />
            </div>
            {/* <div className="text-muted mt-1 small">Heart Rate</div> */}
          </div>
          <div style={{ flex: 1 }}>
            <strong className="text-white" style={{ fontSize: '18px' }}>03:00</strong> <span className="text-light small">hr</span>
            <div className="progress bg-dark-subtle mt-1" style={{ height: '4px' }}>
              <div className="progress-bar bg-light" style={{ width: '90%' }} />
            </div>
            {/* <div className="text-muted mt-1 small">Time</div> */}
          </div>
        </div>
      </div>

      {/* Donut Chart */}
      <div style={{ width: '80px', height: '80px', position: 'relative' }}>
        <svg width="80" height="80">
          <circle cx="40" cy="40" r="30" stroke="#333" strokeWidth="8" fill="none" />
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="#ffffff"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${(7 / 9) * 2 * Math.PI * 30} ${2 * Math.PI * 30}`}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center"
          style={{ fontSize: '12px', lineHeight: '1.1' }}
        >
          <div><strong>7/9</strong></div>
          <div className="small text-light">Workout</div>
        </div>
      </div>
    </div>
  );
};


export default BlackCardWithDonut;
