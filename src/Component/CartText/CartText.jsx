import PropTypes from 'prop-types';

const CartText = ({selectCourse, index}) => {
    const {course_name} = selectCourse;
    index++;
    return (
        <div>
            <h1>{index}. {course_name}</h1>
        </div>
    );
};

CartText.propTypes = {
    selectCourse : PropTypes.object,
    index : PropTypes.number,
};

export default CartText;