import React, { useState } from 'react';
import MeetingSearchForm from '../components/MeetingSearchForm';
import MeetingList from './MeetingList';

const MeetingSearchPage = () => {
    const [searchFilters, setSearchFilters] = useState({
        day: '',
        time: '',
        type: '',
        area: '',
        name: ''
    });

    const handleSearch = (filters) => {
        setSearchFilters(filters);
    };

    return (
        <div>
            <MeetingSearchForm onSearch={handleSearch} />
            <MeetingList filters={searchFilters} />
        </div>
    );
};

export default MeetingSearchPage;
