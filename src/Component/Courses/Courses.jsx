import { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handleSelectCourses, setLoading}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setLoading('flex')
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
        setTimeout(() => {
            setLoading('hidden')
        }, 1000);
    }, []);


    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:w-1/2 md:w-[70%] lg:w-[78%]">
            {
                courses.map(course => 
                    <Course
                    key={course.id}
                    course={course}
                    handleSelectCourses={handleSelectCourses}
                    />    
                )
            }
        </div>
        </>
    );
};

Courses.propTypes = {
    handleSelectCourses : PropTypes.func.isRequired,
    setLoading : PropTypes.string,
};

export default Courses;