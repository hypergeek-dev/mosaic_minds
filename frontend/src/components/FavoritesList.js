import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getFullAreaName, formatMeetingTimeRange } from '../api/MeetingUtils';

const fetchFavorites = async (page) => {
  try {
    const response = await axios.get(`/favorites/?page=${page}`);
    return {
      results: response.data.results,
      totalPages: response.data.totalPages, 
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
      .then((data) => {
        setFavorites(data.results);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
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

  const renderMeetingCard = (favorite) => {
    return (
      <Col key={favorite.id}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title aria-label={`Meeting Name: ${favorite.name}`}>{favorite.meeting_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" aria-label={`Meeting Time: ${formatMeetingTimeRange(favorite.start_time, favorite.end_time)}`}>
              {favorite.weekday_display} - {formatMeetingTimeRange(favorite.start_time, favorite.end_time)}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted" aria-label={`Area: ${getFullAreaName(favorite.area)}`}>
              {getFullAreaName(favorite.area)}
            </Card.Subtitle>
            <Card.Text aria-label={`Description: ${favorite.description}`}>
              {favorite.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Link to={`/meetings/${favorite.meeting}`} className="btn btn-primary me-2 button-spacing" aria-label={`Details for ${favorite.name}`}>
  Details
</Link>
            {favorite.online_meeting_url && (
              <a href={favorite.online_meeting_url} className="btn btn-secondary button-spacing" aria-label={`Join Online Meeting for ${favorite.name}`}>
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
