import PropTypes from 'prop-types';
import CartText from '../CartText/CartText';

const Cart = ({selectCourses}) => {
    return (
        <div className='rounded-lg p-5 w-[22%] bg-white h-fit'>
            <h1 className='text-lg text-[#2F80ED] font-bold'>Credit Hour Remaining 7 hr</h1>
            <hr /><hr />
            <h1 className="text-xl font-bold my-5">Course Name</h1>
            {
                selectCourses.map((selectCourse, index)=> 
                    <CartText
                        key={selectCourse.id}
                        selectCourse={selectCourse}
                        index={index}
                    />
                )
            }
            <hr /><hr />
        </div>
    );
};

Cart.propTypes = {
    selectCourses : PropTypes.object.isRequired,
};

export default Cart;