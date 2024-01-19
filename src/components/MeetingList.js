import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { format } from 'date-fns';

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

const getFullAreaName = (areaInitials) => {
  return areaMapping[areaInitials] || "Unknown Area";
};

const formatMeetingTime = (timeString) => {
  if (timeString && timeString.includes(":")) {
    const [hours, minutes] = timeString.split(":");
    const meetingTime = new Date();
    meetingTime.setHours(parseInt(hours, 10));
    meetingTime.setMinutes(parseInt(minutes, 10));
    return format(meetingTime, 'hh:mm a');
  } else {
    return "Invalid Time";
  }
};

const fetchMeetings = async (filters) => {
  try {
    const queryParams = new URLSearchParams({
      name: filters?.meetingName || '',
      weekday: filters?.day || '',
      time_of_day: filters?.time || '',
      area: filters?.area || ''
    }).toString();

    const response = await axios.get(`meetings/?${queryParams}`);
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in fetchMeetings:', error);
    throw error;
  }
};

const MeetingList = ({ filters }) => {
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMeetings(filters)
      .then(data => {
        setMeetings(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching meetings:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [filters]);

  if (isLoading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status" />
        <p>Loading meetings...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          There was an error fetching the meetings: {error.message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        {meetings.length > 0 ? (
          meetings.map(meeting => (
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
                  <Card.Text>
                    {meeting.description}
                  </Card.Text>
                  <Card.Link href={meeting.moreInfoUrl}>
                    Details
                  </Card.Link>
                  <Card.Link href={meeting.onlineMeetingUrl}>
                    Online Meeting Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No meetings available</p>
        )}
      </Row>
    </Container>

  );
};

export default MeetingList;
