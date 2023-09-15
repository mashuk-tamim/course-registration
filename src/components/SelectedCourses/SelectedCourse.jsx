import PropTypes from 'prop-types';

SelectedCourse.propTypes = {
    selectedCourse: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    creditTotal: PropTypes.number.isRequired,
    priceTotal: PropTypes.number.isRequired,
};

function SelectedCourse({selectedCourse, creditTotal, priceTotal, idx}) {
    return (
        <div>
            <h4 className='text-[#1c1b1b99] text-sm lg:text-base'>{idx+1}. {selectedCourse.title}</h4>
            <p>{creditTotal}</p>
            <p>{priceTotal}</p>
        </div>

    );
}

export default SelectedCourse;