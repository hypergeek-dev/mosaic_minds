import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetingEdit = ({ match }) => {
  const [meeting, setMeeting] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    area: ''
  });

  const areas = [
    { value: 'CI', label: 'Channel Islands Area' },
    { value: 'CTV', label: 'Chiltern & Thames Valley Area' },
    { value: 'CA', label: 'Cornwall Area' },
    { value: 'DA', label: 'Devon Area' },
    { value: 'DO', label: 'Dorset Area' },
    { value: 'EMA', label: 'East Midlands Area' },
    { value: 'ES', label: 'Essex Area' },
    { value: 'FC', label: 'Free Counties Area' },
    { value: 'GM', label: 'Greater Manchester Area' },
    { value: 'HA', label: 'Hampshire Area' },
    { value: 'KE', label: 'Kent Area' },
    { value: 'L-EC', label: 'Lancashire - East & Central Area' },
    { value: 'L-NE', label: 'London - North East Area' },
    { value: 'L-NW', label: 'London - North West Area' },
    { value: 'L-SE', label: 'London - South East Area' },
    { value: 'L-SW', label: 'London - South West Area' },
    { value: 'MEA', label: 'Merseyside Area' },
    { value: 'NS', label: 'Norfolk & Suffolk Area' },
    { value: 'NEE', label: 'North East England Area' },
    { value: 'NW', label: 'NW England & N Wales Area' },
    { value: 'S-EC', label: 'Scotland - East Coast Area' },
    { value: 'S-EL', label: 'Scotland - Edinburgh & Lothians Area' },
    { value: 'S-GW', label: 'Scotland - Glasgow & West Coast Area' },
    { value: 'S-WL', label: 'Scotland - West Lothian Area' },
    { value: 'SWA', label: 'South Wales Area' },
    { value: 'SU', label: 'Surrey Area' },
    { value: 'SX', label: 'Sussex Area' },
    { value: 'HIG', label: 'The Highlands & Islands Groups' },
    { value: 'TS', label: 'The Shires Area' },
    { value: 'UK-FAR', label: 'UK Farsi Groups Area' },
    { value: 'WC', label: 'West Country Area' },
    { value: 'WM', label: 'West Midlands Area' },
    { value: 'WY', label: 'West Yorkshire' },
    { value: 'YH', label: 'Yorkshire & Humberside Area' },
];
useEffect(() => {
    axios.get(`/meetings/${match.params.id}`)
      .then(response => {
        console.log('Fetched meeting data:', response.data);
        setMeeting(response.data);
      })
      .catch(error => console.error('Error fetching meeting:', error));
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeeting(prevMeeting => ({ ...prevMeeting, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting meeting:', meeting);
    axios.put(`/meetings/${match.params.id}`, meeting)
      .then(response => {
        console.log('Meeting updated:', response.data);
      })
      .catch(error => console.error('Error updating meeting:', error));
  };

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
      <br />
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={meeting.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={meeting.time}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={meeting.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Area:
        <select name="area" value={meeting.area} onChange={handleChange}>
          {areas.map(area => (
            <option key={area.value} value={area.value}>{area.label}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default MeetingEdit;
