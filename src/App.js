import React from 'react';
import { StudentProvider } from './components/GlobalContext';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import '../src/CSS/AppPage.css';

const App = () => {
    return (
        <StudentProvider>
          <div className='title'>
            <h1>Student List</h1>
            </div>
            <StudentForm />
            <StudentList />
        </StudentProvider>
    );
};

export default App;