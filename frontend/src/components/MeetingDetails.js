import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { addFavorite, removeFavorite } from '../api/FavoritesHandler'

const MeetingDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [meetingDetails, setMeetingDetails] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [error, setError] = useState('');
    const [favoriteError, setFavoriteError] = useState(''); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
 
        const fetchMeetingDetails = async () => {
            setLoading(true);
            try {
                console.log(`Fetching details for meeting ID: ${id}`); 
                const { data } = await axios.get(`/meetings/${id}/`, { withCredentials: true });
                setMeetingDetails(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load. Please try again later.');
            } finally {
                setLoading(false); 
            }
        };
    
        fetchMeetingDetails();
        console.log(id)
        
    }, [id]);


    const handleToggleFavorite = () => {
        if (meetingDetails.is_favorite) {
            removeFavorite(meetingDetails.id, setMeetingDetails, setFavoriteError);
        } else {
            addFavorite(id, setMeetingDetails, setFavoriteError);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/meetings/${id}/`, { withCredentials: true });
            history.push('/meeting-list');
        } catch (err) {
            console.error("Error deleting meeting", err);
            setError('Failed to delete the meeting. Please try again.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Meeting Details</h1>
            {meetingDetails && (
                <>
                    <div>
                        <h2>{meetingDetails.name}</h2>
                        <p><strong>Weekday:</strong> {meetingDetails.weekday_display}</p>
                        <p><strong>Time:</strong> {meetingDetails.meeting_time}</p>
                        <p><strong>Area:</strong> {meetingDetails.area_display}</p>
                        <p><strong>Description:</strong> {meetingDetails.description}</p>
                        {favoriteError && <div className="error">{favoriteError}</div>}
                        <button onClick={handleToggleFavorite}>
                            {meetingDetails.is_favorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
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
                    {showDeleteModal && (
                        <div>
                            <p>Are you sure you want to delete this meeting?</p>
                            <button onClick={handleDelete}>Yes, Delete</button>
                            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default MeetingDetails;
