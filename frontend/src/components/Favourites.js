import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import {
  getFullAreaName,
  formatMeetingTime,
} from './MeetingList'; 

const FavoriteMeetings = () => {
  const [favoriteMeetings, setFavoriteMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Assume you have a function to fetch favorite meetings
    const fetchFavoriteMeetings = async () => {
      try {
        // Use your API endpoint to fetch favorited meetings
        const response = await axios.get('/favourites/');
        setFavoriteMeetings(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching favorited meetings:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchFavoriteMeetings();
  }, []);

  if (isLoading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status" />
        <p>Loading favorited meetings...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          There was an error fetching favorited meetings: {error.message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        {favoriteMeetings?.length > 0 ? (
          favoriteMeetings.map(meeting => (
            <Col key={meeting.id} md={4} className="mb-3">  
              <Card className="boxshadow">
                <Card.Body>
                  <Card.Title>{meeting.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {meeting.weekday_display} - {formatMeetingTime(meeting.meeting_time)}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {getFullAreaName(meeting.area)}
                  </Card.Subtitle>
                  <Card.Text>{meeting.description}</Card.Text>
                  <Link to={`/meetings/${meeting.id}`} className="btn btn-primary">
                    Details
                  </Link>
                  <Card.Link href={meeting.online_meeting_url}>
                    Online Meeting Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No favourites</p>
        )}
      </Row>
    </Container>
  );
};

export default FavoriteMeetings;
