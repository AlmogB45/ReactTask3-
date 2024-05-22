
import React, { createContext, useState, useContext } from 'react';


const StudentContext = createContext();

export const useStudents = () => {
    return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    const addStudent = (name, score) => {
        const newStudent = {
            name,
            score,
            id: students.length ? students[students.length - 1].id + 1 : 1,
        };
        setStudents([...students, newStudent]);
    };

    const removeStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
