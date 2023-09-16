import PropTypes from 'prop-types';
import Course from './Course';
import { useEffect, useState } from 'react';

Courses.propTypes = {
    handleSelect: PropTypes.func.isRequired,
};

function Courses({ handleSelect }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                courses.map(course => <Course key={course.code} course={course} handleSelect={handleSelect}></Course>)
            }
        </div>
    );
}

export default Courses;