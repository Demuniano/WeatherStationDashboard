import React from 'react';
import Widget from './Widget';
import Clock from './Clock';
import TemperatureMeter from './TemperatureMeter';
import DashboardMenu from './DashboardMenu';
import Label from './Label';
import '../css/Dashboard.css'; 

// Modifica el componente para aceptar props de datos
function Dashboard({ data }) {
  return (
    <div className="dashboard-container">
      <main className="dashboard-main">
        <div className="dashboard-header bg-gray-900 text-white p-4 rounded-lg shadow-lg">
          <h1 className="dashboard-title text-3xl font-bold">
            Panel de Control
          </h1>
          <DashboardMenu className="dashboard-menu" />
        </div>
        
        {/* Data Widgets */}
        <div className="widget-container">
          <Widget title="Hora">
            <Clock />
          </Widget>
          <Widget title="Temperatura">
            <TemperatureMeter temperature={data.temperature} />
          </Widget>
          <Widget title="Estación SK">
            <Label text={data.station} />
          </Widget>
          <Widget title="Humedad">
            <Label text={`${data.humidity}%`} />
          </Widget>
          <Widget title="Presión">
            <Label text={`${data.pressure} hPa`} />
          </Widget>
          <Widget title="Altitud">
            <Label text={`${data.altitude} meters`} />
          </Widget>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
