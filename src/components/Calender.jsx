import React, { useState, useContext, useEffect } from 'react';
import { initialEvents, defaultVisibleDate, resources } from './Data';
import { StandaloneWeekView } from '@mui/x-scheduler/week-view';
import { Contextt } from './Context';
import '../Styles/Cale.css';

export default function Calender() {
  const { activeMenu } = useContext(Contextt);

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('cale');
    if (saved){
        return JSON.parse(saved);
    }
    return initialEvents;
  });

  useEffect(() => {
    localStorage.setItem('cale', JSON.stringify(events));
  }, [events]);

  return (
    <div style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }} className="cale">
      <div style={{ height: '100%', width: '100%' }}>
        <StandaloneWeekView
          events={events}
          resources={resources}
          defaultVisibleDate={defaultVisibleDate}
          onEventsChange={setEvents}
        />
      </div>
    </div>
  );
}