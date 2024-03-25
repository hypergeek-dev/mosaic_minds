import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getFullAreaName, formatMeetingTimeRange } from '../api/MeetingUtils'; 

const fetchFavorites = async (page) => {
  try {
    const response = await axios.get(`/favorites/`);
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
            <Card.Title aria-label={`Meeting Name: ${meeting.name}`}>{meeting.meeting_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" aria-label={`Meeting Time: ${formatMeetingTimeRange(meeting.start_time, meeting.end_time)}`}>
              {meeting.weekday_display} - {formatMeetingTimeRange(meeting.start_time, meeting.end_time)}
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
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <Container className="my-4">
      {isLoading ? (
        <Spinner animation="border" role="status" className="d-block mx-auto my-4">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          There was an error fetching the favorites: {error.message}
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {favorites.length > 0 ? favorites.map(renderMeetingCard) : <Col>No favorites available</Col>}
        </Row>
      )}
      <div className="pagination-container">
        <Row>
          <Col className="d-flex justify-content-between">
            <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn btn-outline-primary">
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-outline-primary">
              Next
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FavoritesList;
