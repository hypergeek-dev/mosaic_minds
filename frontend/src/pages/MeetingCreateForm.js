import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const MeetingCreateForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitResponse, setSubmitResponse] = useState('');

    const onSubmit = async (data) => {
        try {
            await axios.post('/meetings/', data); 
            setSubmitResponse('Meeting created successfully!');
        } catch (error) {
            console.error(error);
            setSubmitResponse('Failed to create meeting.');
        }
    };

    const areaOptions = [
        { value: 'CI', label: 'Channel Islands Area' },
        { value: 'CTV', label: 'Chiltern & Thames Valley Area' },
        { value: 'CA', label: 'Cornwall Area' },
        { value: 'DA', label: 'Devon Area' },
        { value: 'DO', label: 'Dorset Area' },
        { value: 'EMA', label: 'East Midlands Area' },
        { value: 'ES', label: 'Essex Area' },
        { value: 'FC', label: 'Free Counties Area' },
        { value: 'GM', label: 'Greater Manchester Area' },
        { value: 'HA', label: 'Hampshire Area' },
        { value: 'KE', label: 'Kent Area' },
        { value: 'L-EC', label: 'Lancashire - East & Central Area' },
        { value: 'L-NE', label: 'London - North East Area' },
        { value: 'L-NW', label: 'London - North West Area' },
        { value: 'L-SE', label: 'London - South East Area' },
        { value: 'L-SW', label: 'London - South West Area' },
        { value: 'MEA', label: 'Merseyside Area' },
        { value: 'NS', label: 'Norfolk & Suffolk Area' },
        { value: 'NEE', label: 'North East England Area' },
        { value: 'NW', label: 'NW England & N Wales Area' },
        { value: 'S-EC', label: 'Scotland - East Coast Area' },
        { value: 'S-EL', label: 'Scotland - Edinburgh & Lothians Area' },
        { value: 'S-GW', label: 'Scotland - Glasgow & West Coast Area' },
        { value: 'S-WL', label: 'Scotland - West Lothian Area' },
        { value: 'SWA', label: 'South Wales Area' },
        { value: 'SU', label: 'Surrey Area' },
        { value: 'SX', label: 'Sussex Area' },
        { value: 'HIG', label: 'The Highlands & Islands Groups' },
        { value: 'TS', label: 'The Shires Area' },
        { value: 'UK-FAR', label: 'UK Farsi Groups Area' },
        { value: 'WC', label: 'West Country Area' },
        { value: 'WM', label: 'West Midlands Area' },
        { value: 'WY', label: 'West Yorkshire' },
        { value: 'YH', label: 'Yorkshire & Humberside Area' },
    ];

    const weekdayOptions = [
        { value: "SUN", label: "Sunday" },
        { value: "MON", label: "Monday" },
        { value: "TUE", label: "Tuesday" },
        { value: "WED", label: "Wednesday" },
        { value: "THU", label: "Thursday" },
        { value: "FRI", label: "Friday" },
        { value: "SAT", label: "Saturday" }
    ];


    return (
        <Container className="mt-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        name="name" 
                        {...register("name", { required: "Meeting name is required" })} 
                        placeholder="Meeting Name"
                        isInvalid={errors.name}
                        aria-label="Meeting Name"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Select 
                        name="weekday" 
                        {...register("weekday", { required: "Weekday is required" })} 
                        isInvalid={errors.weekday}
                        aria-label="Select Weekday"
                    >
                        <option value="">Select Weekday</option>
                        {weekdayOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.weekday?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        name="meeting_time" 
                        type="time" 
                        {...register("meeting_time", { required: "Meeting time is required" })} 
                        isInvalid={errors.meeting_time}
                        aria-label="Meeting Time"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.meeting_time?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Select 
                        name="area" 
                        {...register("area", { required: "Area is required" })} 
                        isInvalid={errors.area}
                        aria-label="Select Area"
                    >
                        <option value="">Select Area</option>
                        {areaOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.area?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        as="textarea" 
                        name="description" 
                        {...register("description", { required: "Description is required" })} 
                        placeholder="Description"
                        isInvalid={errors.description}
                        aria-label="Meeting Description"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.description?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        name="online_meeting_url" 
                        type="url" 
                        {...register("online_meeting_url", { required: "Online meeting URL is required" })} 
                        placeholder="Online Meeting URL" 
                        isInvalid={errors.online_meeting_url}
                        aria-label="Online Meeting URL"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.online_meeting_url?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="mb-3" aria-label="Submit Meeting Form">Submit</Button>

                {submitResponse && <Alert variant={submitResponse.includes('successfully') ? 'success' : 'danger'}>{submitResponse}</Alert>}
            </Form>
        </Container>
    );
};

export default MeetingCreateForm;