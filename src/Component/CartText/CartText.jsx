import PropTypes from 'prop-types';

const CartText = ({selectCourse, index}) => {
    const {course_name} = selectCourse;
    index++;
    console.log(selectCourse);
    return (
        <div>
            <h1>{index}. {course_name}</h1>
        </div>
    );
};

CartText.propTypes = {
    selectCourse : PropTypes.array.isRequired,
    index : PropTypes.number,
};

export default CartText;