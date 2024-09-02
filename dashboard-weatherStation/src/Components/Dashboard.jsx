// src/pages/Dashboard.jsx
import React from 'react';
import Widget from '../components/Widget';
import Clock from '../components/Clock';
import TemperatureMeter from '../components/TemperatureMeter';
import DasboardMenu from './DashboardMenu';

function Dashboard() {
  return (
    <div className="h-screen">
      <main className="flex-1 p-6">
        <div className='bg-gradient-to-r from-indigo-500 to-sky-500 shadow-xl rounded-md p-8 mb-4 md:flex justify-between'>
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
          <DasboardMenu/>
        </div>
        
        {/* Data Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-64">
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
