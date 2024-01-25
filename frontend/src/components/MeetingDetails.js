import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MeetingDetails = () => {
    const { id } = useParams();
    console.log(useParams())
    const [meetingDetails, setMeetingDetails] = useState(null);
    const [isFavourited, setIsFavourited] = useState(null); 
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
            }

            try {
                // Check if the meeting is already favorited
                const favResponse = await axios.get(`/favourites/${id}`, { withCredentials: true });
                setIsFavourited(favResponse.data.isFavourited);
            } catch (err) {
                console.error("Error checking favorite status", err);
            } finally {
                setLoading(false); // Set loading to false when data fetching is complete
            }
        };

        fetchMeetingDetails();
    }, [id]);

    const handleFavourite = async () => {
        try {
            if (isFavourited) {
                // If already favorited, send a request to unfavorite
                await axios.delete(`/favourites/${id}`, { withCredentials: true });
                setIsFavourited(false);
            } else {
                // If not favorited, send a request to favorite
                await axios.post(`/favourites/`, { meeting: id }, { withCredentials: true });
                setIsFavourited(true);
            }
        } catch (err) {
            console.error("Error updating favorite status", err);
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
                    {isFavourited !== null && (
                        <button onClick={handleFavourite}>
                            {isFavourited ? "Unfavorite" : "Favorite"}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default MeetingDetails;
