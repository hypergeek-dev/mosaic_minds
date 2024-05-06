import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getFullAreaName, formatMeetingTimeRange } from '../api/MeetingUtils'; 
import axios from 'axios';


const fetchMeetings = async (filters, page) => {
  try {
    const queryParams = new URLSearchParams({
      name: filters?.meetingName || '',
      weekday: filters?.day || '',
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
      
            <Card.Subtitle className="mb-2 text-muted" aria-label={`Meeting Time: ${formatMeetingTimeRange(meeting.start_time, meeting.end_time)}`}>
              {meeting.weekday_display} - {formatMeetingTimeRange(meeting.start_time, meeting.end_time)}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted" aria-label={`Area: ${getFullAreaName(meeting.area_display)}`}>
              {meeting.area_display}
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
          <div className="pagination-controls-wrapper">
            <div className="pagination-controls">
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default MeetingList;
