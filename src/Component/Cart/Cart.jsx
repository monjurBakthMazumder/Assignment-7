import PropTypes from 'prop-types';
import CartText from '../CartText/CartText';

const Cart = ({selectCourses, credit, remaining}) => {
    return (
        <div className='rounded-lg p-5 sm:w-1/2 md:w-[30%] lg:w-[22%] bg-white h-fit'>
            <h1 className='text-lg text-[#2F80ED] font-bold mb-5'>Credit Hour Remaining {remaining} hr</h1>
            <hr /><hr />
            <h1 className="text-xl font-bold my-5">Course Name</h1>
            <div className='mb-5'>
            {
                selectCourses.map((selectCourse, index)=> 
                    <CartText
                        key={selectCourse.id}
                        selectCourse={selectCourse}
                        index={index}
                    />
                )
            }
            </div>
            <hr /><hr />
            <h1 className='text-base font-medium my-5'>Total Credit Hour: {credit}</h1>
            <hr /><hr />
        </div>
    );
};

Cart.propTypes = {
    selectCourses : PropTypes.object,
    credit : PropTypes.number,
    remaining : PropTypes.number,
};


export default Cart;