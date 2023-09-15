import PropTypes from 'prop-types';
import SelectedCourse from './SelectedCourse';

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
};

function SelectedCourses({selectedCourses}) {
    console.log(selectedCourses);
    return (
        <div className='bg-white rounded-lg p-5'>
            <h2>Selected Courses: {selectedCourses.length}</h2>
            <h2 className='text-2xl font-bold '>Course Name</h2>
            {
                selectedCourses.map((selectedCourse, idx) => <SelectedCourse selectedCourse={selectedCourse} idx={idx} key={idx}></SelectedCourse>)
            }
        </div>
    );
}

export default SelectedCourses;