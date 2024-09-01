// src/pages/Dashboard.jsx
import React from 'react';
import Widget from '../components/Widget';
import Clock from '../components/Clock';
import TemperatureMeter from '../components/TemperatureMeter';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-t from-slate-100 to-blue-300">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Reports</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">Settings</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className='bg-gradient-to-r from-indigo-500 to-sky-500 shadow-xl rounded-md p-4 mb-4'>
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        </div>
        
        {/* Data Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Clock />
          <TemperatureMeter temperature={23.80} />
          <Widget title="Station SK" value="Station-01" />
          <Widget title="Humidity" value="61.00" unit="%" />
          <Widget title="Pressure" value="802.38" unit="hPa" />
          <Widget title="Altitude" value="1925.31" unit="meters" />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
