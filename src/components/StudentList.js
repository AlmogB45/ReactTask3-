import React from 'react';
import { useStudents } from '../components/GlobalContext';
import '../CSS/StudentList.css';

const StudentList = () => {
    const { students, removeStudent } = useStudents();

    return (
        <ul>
            {students.map(student => (
                <div className='list-container'>
                <li key={student.id}>
                    {student.name} - {student.score}
                    <button id="remove" onClick={() => removeStudent(student.id)}>X</button>
                    
                </li>
                </div>
            ))}
        </ul>
    );
};

export default StudentList;
