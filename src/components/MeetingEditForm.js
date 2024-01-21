import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetingEdit = ({ match }) => {
  // State for the meeting form and areas
  const [meeting, setMeeting] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    area: ''
  });
  const [areas, setAreas] = useState([]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeeting({ ...meeting, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data using axios
    console.log(meeting);
    // Example: axios.put(`/api/meetings/${match.params.id}`, meeting)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error));
  };

  // Fetch meeting data
  useEffect(() => {
    // Fetch the existing meeting data
    axios.get(`/api/meetings/${match.params.id}`)
      .then(response => setMeeting(response.data))
      .catch(error => console.error(error));

    // Fetch areas data (replace '/api/areas' with your actual API endpoint)
    axios.get('/api/areas')
      .then(response => setAreas(response.data))
      .catch(error => console.error(error));
  }, [match.params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Meeting</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={meeting.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={meeting.date}
          onChange={handleChange}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={meeting.time}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={meeting.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Area:
        <select name="area" value={meeting.area} onChange={handleChange}>
          {areas.map(area => (
            <option key={area.id} value={area.name}>{area.name}</option>
          ))}
        </select>
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default MeetingEdit;
