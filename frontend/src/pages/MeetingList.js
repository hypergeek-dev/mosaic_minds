import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';



const areaMapping = {
  'CI': 'Channel Islands Area',
  'CTV': 'Chiltern & Thames Valley Area',
  'CA': 'Cornwall Area',
  'DA': 'Devon Area',
  'DO': 'Dorset Area',
  'EMA': 'East Midlands Area',
  'ES': 'Essex Area',
  'FC': 'Free Counties Area',
  'GM': 'Greater Manchester Area',
  'HA': 'Hampshire Area',
  'KE': 'Kent Area',
  'L-EC': 'Lancashire - East & Central Area',
  'L-NE': 'London - North East Area',
  'L-NW': 'London - North West Area',
  'L-SE': 'London - South East Area',
  'L-SW': 'London - South West Area',
  'MEA': 'Merseyside Area',
  'NS': 'Norfolk & Suffolk Area',
  'NEE': 'North East England Area',
  'NW': 'NW England & N Wales Area',
  'S-EC': 'Scotland - East Coast Area',
  'S-EL': 'Scotland - Edinburgh & Lothians Area',
  'S-GW': 'Scotland - Glasgow & West Coast Area',
  'S-WL': 'Scotland - West Lothian Area',
  'SWA': 'South Wales Area',
  'SU': 'Surrey Area',
  'SX': 'Sussex Area',
  'HIG': 'The Highlands & Islands Groups',
  'TS': 'The Shires Area',
  'UK-FAR': 'UK Farsi Groups Area',
  'WC': 'West Country Area',
  'WM': 'West Midlands Area',
  'WY': 'West Yorkshire',
  'YH': 'Yorkshire & Humberside Area',

};

export const getFullAreaName = (areaInitials) => {
  return areaMapping[areaInitials] || "Unknown Area";
};

export const formatMeetingTime = (timeString) => {
  if (timeString && timeString.includes(":")) {
    const [hours, minutes] = timeString.split(":");
    const meetingTime = new Date();
    meetingTime.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);

    
    let formattedHours = meetingTime.getHours();
    const ampm = formattedHours >= 12 ? 'PM' : 'AM';
    formattedHours = formattedHours % 12;
    formattedHours = formattedHours ? formattedHours : 12; 
    const formattedMinutes = meetingTime.getMinutes().toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  } else {
    return "Invalid Time";
  }
};

const fetchMeetings = async (filters, page) => {
  try {
    const queryParams = new URLSearchParams({
      name: filters?.meetingName || '',
      weekday: filters?.day || '',
      time_of_day: filters?.time || '',
      area: filters?.area || '',
      page: page || 1,
    }).toString();

    const response = await axios.get(`meetings/?${queryParams}`);
    return {
      results: response.data.results,
      totalPages: Math.ceil(response.data.count / 10),
    };
  } catch (error) {
    console.error('Error in fetchMeetings:', error);
    throw error;
  }
};

const MeetingList = ({ filters }) => {
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchMeetings(filters, currentPage)
      .then(data => {
        setMeetings(data.results);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching meetings:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [filters, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderMeetingCard = (meeting) => {
    return (
      <Col key={meeting.id}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title aria-label={`Meeting Name: ${meeting.name}`}>{meeting.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" aria-label={`Weekday: ${meeting.weekday_display}`}>
              {meeting.weekday_display} - {formatMeetingTime(meeting.meeting_time)}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted" aria-label={`Area: ${getFullAreaName(meeting.area)}`}>
              {getFullAreaName(meeting.area)}
            </Card.Subtitle>
            <Card.Text aria-label={`Description: ${meeting.description}`}>
              {meeting.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/meetings/${meeting.id}`} className="btn btn-primary me-2 button-spacing" aria-label={`Details for ${meeting.name}`}>
              Details
            </Link>
            {meeting.online_meeting_url && (
              <a href={meeting.online_meeting_url} className="btn btn-secondary button-spacing" aria-label={`Join Online Meeting for ${meeting.name}`}>
                Online Meeting
              </a>
            )}
            {meeting.is_owner && (
              <div className="Is_OwnerTextbox" aria-label="This meeting is created by you">
                Is created by you
              </div>
            )}
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <Container className="my-4">
      {isLoading ? (
        <Container className="my-4 text-center">
          <Spinner animation="border" role="status" />
          <p>Loading meetings...</p>
        </Container>
      ) : error ? (
        <Container className="my-4">
          <Alert variant="danger">
            There was an error fetching the meetings: {error.message}
          </Alert>
        </Container>
      ) : (
        <>
          <Row xs={1} md={2} lg={3} className="g-4">
            {meetings?.length > 0 ? (
              meetings.map(renderMeetingCard)
            ) : (
              <Col>
                <p>No meetings available</p>
              </Col>
            )}
          </Row>
          <div className="pagination-controls">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default MeetingList;