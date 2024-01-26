import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const MeetingDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [meetingDetails, setMeetingDetails] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMeetingDetails = async () => {
            try {
                const response = await axios.get(`/meetings/${id}`, { withCredentials: true });
                setMeetingDetails(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to load meeting details.');
            } finally {
                setLoading(false); // Set loading to false when data fetching is complete
            }
        };

        fetchMeetingDetails();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/meetings/${id}`, { withCredentials: true });
            history.push('/meeting-list'); // Redirect after deletion
        } catch (err) {
            console.error("Error deleting meeting", err);
        }
    };

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
                    {meetingDetails.is_owner && (
                        <>
                            <button onClick={() => history.push(`/meetings/${id}/edit`)}>Edit Meeting</button>
                            <button onClick={() => setShowDeleteModal(true)}>Delete Meeting</button>
                        </>
                    )}
                </div>
            )}
            {showDeleteModal && (
                <div>
                    <p>Are you sure you want to delete this meeting?</p>
                    <button onClick={handleDelete}>Yes, Delete</button>
                    <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default MeetingDetails;
