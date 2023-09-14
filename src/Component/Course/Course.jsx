import PropTypes from 'prop-types';
import { BiBookOpen } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';


const Course = ({course , handleSelectCourses}) => {
    const {course_name, credit_hours, details, image, price} = course;
    return (
        <div className="card card-compact rounded-lg bg-white">
        <figure className='m-5'><img src={image} alt={`image of the course of ${course_name}`} className='w-full'/></figure>
        <div className="card-body">
            <h2 className="card-title">{course_name}</h2>
            <p className='text-justify text-base'>{details}</p>
            <div className="flex justify-between items-center gap-5">
                <p className='flex items-center gap-1'><MdAttachMoney className='text-xl'/>Price: {price}</p>
                <p className='flex items-center gap-2'><BiBookOpen className='text-xl'/>Credit: {credit_hours}hr</p>
            </div>
            <div className="card-actions mt-5">
                <button 
                    className="btn btn-primary bg-[#2F80ED] border-[#2F80ED] w-full text-white font-bold"
                    onClick={()=> handleSelectCourses(course)}  
                >Select</button>
            </div>
        </div>
        </div>
    );
};

Course.propTypes = {
    course : PropTypes.object.isRequired,
    handleSelectCourses : PropTypes.func.isRequired,
};

export default Course;