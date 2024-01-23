import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
const MeetingDetails = () => {
    const { id } = useParams(); 
    const [meetingDetails, setMeetingDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMeetingDetails = async () => {
            try {
                const response = await axios.get(`/meetings/${id}`);
                setMeetingDetails(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load meeting details.');
                setLoading(false);
            }
        };

        fetchMeetingDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Meeting Details</h1>
            {meetingDetails && (
                <div>
                    <h2>{meetingDetails.name}</h2>
                    <p><strong>Weekday:</strong> {meetingDetails.weekday}</p>
                    <p><strong>Time:</strong> {meetingDetails.meeting_time}</p>
                    <p><strong>Area:</strong> {meetingDetails.area}</p>
                    <p><strong>Description:</strong> {meetingDetails.description}</p>
                    {meetingDetails.online_meeting_url && (
                        <p><strong>Online Meeting URL:</strong> <a href={meetingDetails.online_meeting_url} target="_blank" rel="noopener noreferrer">{meetingDetails.online_meeting_url}</a></p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MeetingDetails;
