import React, { useState } from 'react';

const MeetingSearchForm = ({ onSearch }) => { 
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [area, setArea] = useState('');
    const [meetingName, setMeetingName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let timeOfDay;
        switch (time) {
            case "1":
                timeOfDay = "morning";
                break;
            case "2":
                timeOfDay = "afternoon";
                break;
            case "3":
                timeOfDay = "evening";
                break;
            default:
                timeOfDay = '';
        }

        console.log('Search Parameters:', { day, time: timeOfDay, area, meetingName });
        onSearch({ day, time: timeOfDay, area, meetingName }); 
    };

    return (
        <form className="views-exposed-form bef-exposed-form" onSubmit={handleSubmit}>
            {/* Day Filter */}
            <div>
                <label htmlFor="day">Day</label>
                <select id="day" value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="">- Any -</option>
                    <option value="SUN">Sunday</option>
                    <option value="MON">Monday</option>
                    <option value="TUE">Tuesday</option>
                    <option value="WED">Wednesday</option>
                    <option value="THU">Thursday</option>
                    <option value="FRI">Friday</option>
                    <option value="SAT">Saturday</option>
                </select>
            </div>

            {/* Time Filter */}
            <div>
                <label htmlFor="time">Time</label>
                <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="">- Any -</option>
                    <option value="1">Morning</option>
                    <option value="2">Afternoon</option>
                    <option value="3">Evening</option>
                </select>
            </div>

            {/* Area Filter */}
            <div>
                <label htmlFor="area">Area</label>
                <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
    <option value="">- Any -</option>
    <option value="CI">Channel Islands Area</option>
    <option value="CTV">Chiltern & Thames Valley Area</option>
    <option value="CA">Cornwall Area</option>
    <option value="DA">Devon Area</option>
    <option value="DO">Dorset Area</option>
    <option value="EMA">East Midlands Area</option>
    <option value="ES">Essex Area</option>
    <option value="FC">Free Counties Area</option>
    <option value="GM">Greater Manchester Area</option>
    <option value="HA">Hampshire Area</option>
    <option value="KE">Kent Area</option>
    <option value="L-EC">Lancashire - East & Central Area</option>
    <option value="L-NE">London - North East Area</option>
    <option value="L-NW">London - North West Area</option>
    <option value="L-SE">London - South East Area</option>
    <option value="L-SW">London - South West Area</option>
    <option value="MEA">Merseyside Area</option>
    <option value="NS">Norfolk & Suffolk Area</option>
    <option value="NEE">North East England Area</option>
    <option value="NW">NW England & N Wales Area</option>
    <option value="S-EC">Scotland - East Coast Area</option>
    <option value="S-EL">Scotland - Edinburgh & Lothians Area</option>
    <option value="S-GW">Scotland - Glasgow & West Coast Area</option>
    <option value="S-WL">Scotland - West Lothian Area</option>
    <option value="SWA">South Wales Area</option>
    <option value="SU">Surrey Area</option>
    <option value="SX">Sussex Area</option>
    <option value="HIG">The Highlands & Islands Groups</option>
    <option value="TS">The Shires Area</option>
    <option value="UK-FAR">UK Farsi Groups Area</option>
    <option value="WC">West Country Area</option>
    <option value="WM">West Midlands Area</option>
    <option value="WY">West Yorkshire</option>
    <option value="YH">Yorkshire & Humberside Area</option>
</select>
            </div>

            {/* Meeting Name Filter */}
            <div>
                <label htmlFor="meetingName">Meeting Name</label>
                <input
                    id="meetingName"
                    type="text"
                    value={meetingName}
                    onChange={(e) => setMeetingName(e.target.value)}
                    maxLength="128"
                />
            </div>

            {/* Submit Button */}
            <button type="submit">Search</button>
        </form>
    );
};

export default MeetingSearchForm;
