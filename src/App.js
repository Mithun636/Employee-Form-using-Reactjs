
import './App.css';

import React, { useState } from 'react';

const Form = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
        gender: '',
        startTime: '',
        endTime: '',
        jobPosition: '',
        team: '',
        designation: '',
        billableHours: '',
        isBillable: false,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formValues.firstName) errors.firstName = 'First Name is required';
        if (!formValues.lastName) errors.lastName = 'Last Name is required';
        if (!formValues.birthDate) errors.birthDate = 'Date is required';
        if (!formValues.email) errors.email = 'Email is required';
        if (!formValues.phoneNumber) errors.phoneNumber = 'Phone Number is required';
        if (!formValues.gender) errors.gender = 'Gender is required';
        if (!formValues.startTime) errors.startTime = 'Start Time is required';
        if (!formValues.endTime) errors.endTime = 'End Time is required';
        if (!formValues.jobPosition) errors.jobPosition = 'Job Position is required';
        if (!formValues.team) errors.team = 'Team is required';
        if (!formValues.designation) errors.designation = 'Designation is required';
        if (!formValues.billableHours || formValues.billableHours <= 0) errors.billableHours = 'Billable Hours is required and must be a positive number';

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted successfully', formValues);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={formValues.firstName} onChange={handleInputChange} />
                {formErrors.firstName && <span>{formErrors.firstName}</span>}
            </div>
            <div>
                <label>Middle Name</label>
                <input type="text" name="middleName" value={formValues.middleName} onChange={handleInputChange} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange} />
                {formErrors.lastName && <span>{formErrors.lastName}</span>}
            </div>
            <div>
                <label>Birth Date</label>
                <input type="date" name="birthDate" value={formValues.birthDate} onChange={handleInputChange} />
                {formErrors.birthDate && <span>{formErrors.birthDate}</span>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formValues.email} onChange={handleInputChange} />
                {formErrors.email && <span>{formErrors.email}</span>}
            </div>
            <div>
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" value={formValues.phoneNumber} onChange={handleInputChange} />
                {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
            </div>
            <div>
                <label>Select Gender</label>
                <select name="gender" value={formValues.gender} onChange={handleInputChange}>
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {formErrors.gender && <span>{formErrors.gender}</span>}
            </div>
            <div>
                <label>Start Time</label>
                <input type="time" name="startTime" value={formValues.startTime} onChange={handleInputChange} />
                {formErrors.startTime && <span>{formErrors.startTime}</span>}
            </div>
            <div>
                <label>End Time</label>
                <input type="time" name="endTime" value={formValues.endTime} onChange={handleInputChange} />
                {formErrors.endTime && <span>{formErrors.endTime}</span>}
            </div>
            <div>
                <label>Job Position</label>
                <input type="text" name="jobPosition" value={formValues.jobPosition} onChange={handleInputChange} />
                {formErrors.jobPosition && <span>{formErrors.jobPosition}</span>}
            </div>
            <div>
                <label>Select Teams</label>
                <select name="team" value={formValues.team} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                </select>
                {formErrors.team && <span>{formErrors.team}</span>}
            </div>
            <div>
                <label>Select Designation</label>
                <select name="designation" value={formValues.designation} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Manager">Manager</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                </select>
                {formErrors.designation && <span>{formErrors.designation}</span>}
            </div>
            <div>
                <label>Billable Hours</label>
                <input type="number" name="billableHours" value={formValues.billableHours} onChange={handleInputChange} />
                {formErrors.billableHours && <span>{formErrors.billableHours}</span>}
            </div>
            <div class='bill'>
                <label>Is Billable</label>
                <input type="checkbox" name="isBillable" checked={formValues.isBillable} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

