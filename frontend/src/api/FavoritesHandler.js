import axios from 'axios';

export const addFavorite = async (meetingId, setMeetingDetails, setFavoriteError) => {
    try {

        const payload = { meeting: meetingId };
        const { data } = await axios.post(`/favorites/`, payload, { withCredentials: true });
        setMeetingDetails(currentDetails => ({ ...currentDetails, is_favorite: true, favorite_id: data.id }));
    } catch (err) {
        console.error("Error adding to favorites", err);
        setFavoriteError('Failed to add to favorites. Please try again.');
    }
};


export const removeFavorite = async (meetingId, setMeetingDetails, setFavoriteError) => {
    try {
        await axios.delete(`/favorites/${meetingId}/`, { withCredentials: true });
        setMeetingDetails(currentDetails => ({ ...currentDetails, is_favorite: false, favorite_id: null }));
    } catch (err) {
        console.error("Error removing from favorites", err);
        setFavoriteError('Failed to remove from favorites. Please try again.');
    }
};
