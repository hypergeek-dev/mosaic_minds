import React, { useState } from 'react';
import MeetingSearchForm from './MeetingFinder';
import MeetingList from './MeetingList';

const MeetingSearchPage = () => {
    const [searchFilters, setSearchFilters] = useState({
        day: 'All',
        time: 'All',
        type: 'All',
        area: 'All',
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
