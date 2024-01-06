// src/components/EventList.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../services/api';

const EventBox = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Failed to fetch events:', error.message);
      }
    };

    fetchEvents();
  }, []);

  const joinEvent = async (eventId) => {
    try {
      // Simulate joining event on the frontend
      console.log(`Joined event with ID: ${eventId}`);
      // You can add further logic to update the backend based on your requirements
    } catch (error) {
      console.error('Failed to join event:', error.message);
    }
  };

  return (
    <div>
      <h2>Event List</h2>
      {events.map((event) => (
        <EventBox key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          {/* Add more details as needed */}
          <button type="button" onClick={() => joinEvent(event._id)}>
            Join Event
          </button>
        </EventBox>
      ))}
    </div>
  );
};

export default EventList;
