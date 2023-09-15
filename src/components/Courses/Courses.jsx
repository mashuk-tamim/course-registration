import PropTypes from 'prop-types';
import Course from './Course';
import { useEffect, useState } from 'react';

Courses.propTypes = {
<<<<<<< HEAD
    handleSelect: PropTypes.func.isRequired,
};

function Courses({handleSelect}) {
=======
    
};

function Courses() {
>>>>>>> 38cf8297fbe7dfabbf0c755e7d18a72884023449
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('../../../public/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
<<<<<<< HEAD
                courses.map(course => <Course key={course.code} course={course} handleSelect={handleSelect}></Course>)
=======
                courses.map(course => <Course key={course.code} course={course}></Course>)
>>>>>>> 38cf8297fbe7dfabbf0c755e7d18a72884023449
            }
        </div>
    );
}

export default Courses;