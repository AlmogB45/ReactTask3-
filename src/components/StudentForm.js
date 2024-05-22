import React, { useState } from 'react';
import { useStudents } from '../components/GlobalContext';
import '../CSS/StudentForm.css';

const StudentForm = () => {
    const { addStudent } = useStudents();
    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && score) {
            addStudent(name, parseInt(score));
            setName('');
            setScore('');
        }
    };

    return (
        <div className='input-container'>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                required
            />
            <button type="submit">Add Student</button>
        </form>
        </div>
    );
};

export default StudentForm;
