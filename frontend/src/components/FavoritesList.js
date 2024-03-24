import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getFullAreaName, formatMeetingTime } from '../api/MeetingUtils'; 
const fetchFavorites = async (page) => {
  try {
    const response = await axios.get(`/favorites/?page=${page}`);
    return {
      results: response.data.results,
      totalPages: Math.ceil(response.data.count / 10),
    };
  } catch (error) {
    console.error('Error in fetchFavorites:', error);
    throw error;
  }
};

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchFavorites(currentPage)
      .then(data => {
        setFavorites(data.results);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching favorites:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
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
          <p>Loading favorites...</p>
        </Container>
      ) : error ? (
        <Container className="my-4">
          <Alert variant="danger">
            There was an error fetching the favorites: {error.message}
          </Alert>
        </Container>
      ) : (
        <>
          <Row xs={1} md={2} lg={3} className="g-4">
            {favorites?.length > 0 ? (
              favorites.map(renderMeetingCard)
            ) : (
              <Col>
                <p>No favorites available</p>
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

export default FavoritesList;
