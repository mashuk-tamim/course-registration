import PropTypes from 'prop-types';

SelectedCourse.propTypes = {
    selectedCourse: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
};

function SelectedCourse({selectedCourse, idx}) {
    return (
        <div>
            <h4 className='text-[#1c1b1b99] text-sm lg:text-base'>{idx+1}. {selectedCourse.title}</h4>
        </div>
    );
}

export default SelectedCourse;