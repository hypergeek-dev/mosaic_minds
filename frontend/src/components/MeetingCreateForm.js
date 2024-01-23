import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const MeetingCreateForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitResponse, setSubmitResponse] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/meetings/', data);
            setSubmitResponse('Meeting created successfully!');
            console.log(response.data);
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name="name" 
                {...register("name", { required: true })} 
                placeholder="Meeting Name" 
            />
            {errors.name && <div>Meeting name is required</div>}

            <select name="weekday" {...register("weekday", { required: true })}>
                {weekdayOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {errors.weekday && <div>Weekday is required</div>}

            <input 
                name="meeting_time" 
                type="time" 
                {...register("meeting_time", { required: true })} 
            />
            {errors.meeting_time && <div>Meeting time is required</div>}

            <select name="area" {...register("area", { required: true })}>
                {areaOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {errors.area && <div>Area is required</div>}

            <textarea 
                name="description" 
                {...register("description", { required: true })} 
                placeholder="Description" 
            />
            {errors.description && <div>Description is required</div>}
        <input 
            name="online_meeting_url" 
            type="url" 
            {...register("online_meeting_url", { required: true })} 
            placeholder="Online Meeting URL" 
        />
        {errors.online_meeting_url && <div>Online meeting URL is required</div>}

        <button type="submit">Submit</button>

        {submitResponse && <div>{submitResponse}</div>}
    </form>
);
};

export default MeetingCreateForm;