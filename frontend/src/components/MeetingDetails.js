import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const MeetingDetails = () => {
    const { id } = useParams(); 
    const [meetingDetails, setMeetingDetails] = useState(null);
    const [isFavorited, setIsFavorited] = useState(false); 
    const [favoriteId, setFavoriteId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMeetingDetails = async () => {
            try {
                const response = await axios.get(`/meetings/${id}`);
                setMeetingDetails(response.data);
                setLoading(false);

                try {
                    const favResponse = await axios.get(`/favourites/${id}`);
                    setIsFavorited(favResponse.data.isFavorited);
                    setFavoriteId(favResponse.data.favoriteId);
                } catch (favError) {
                    setIsFavorited(false);
                    setFavoriteId(null); // Reset favoriteId if not found
                }
            } catch (err) {
                console.error(err);
                setLoading(false);
                setError('Failed to load meeting details.');
            }
        };

        fetchMeetingDetails();
    }, [id]);

    const toggleFavorite = async () => {
        try {
            if (isFavorited) {
                if (favoriteId !== null) {
                    // Only delete if favoriteId is not null
                    await axios.delete(`/favourites/${favoriteId}`);
                    setFavoriteId(null); // Reset favoriteId
                }
            } else {
                const meetingId = parseInt(id, 10);
                const response = await axios.post('/favourites/', { meeting: meetingId });
                setFavoriteId(response.data.id);
            }
            setIsFavorited(!isFavorited);
        } catch (err) {
            console.error(err);
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
                    <FontAwesomeIcon 
                        icon={isFavorited ? solidStar : regularStar} 
                        onClick={toggleFavorite} 
                        style={{ color: isFavorited ? 'yellow' : 'black' }} 
                    />
                </div>
            )}
        </div>
    );
};

export default MeetingDetails;
