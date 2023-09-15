import PropTypes from 'prop-types';
import SelectedCourse from './SelectedCourse';

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    creditTotal: PropTypes.number.isRequired,
    priceTotal: PropTypes.number.isRequired,
};

function SelectedCourses({ selectedCourses, creditTotal, priceTotal }) {
    console.log(selectedCourses);
    return (
        <div className='bg-white rounded-lg p-5'>
            <h2 className='text-xl lg:text-2xl font-bold mb-5 pb-5 border-b-2'>Credit Hour Remaining: {20 - creditTotal}</h2>
            <h2 className='text-xl lg:text-2xl font-bold mb-5'>Course Name</h2>
            {
                selectedCourses.map((selectedCourse, idx) => <SelectedCourse selectedCourse={selectedCourse} idx={idx} key={idx}>
                </SelectedCourse>)
            }
            <h3 className='font-medium text-[#1c1b1bcc] my-5 border-y-2 py-5'>Total Credit Hour: {creditTotal}</h3>
            <h3 className='font-medium text-[#1c1b1bcc]'>Total Price: {priceTotal} USD</h3>

        </div>
    );
}

export default SelectedCourses;