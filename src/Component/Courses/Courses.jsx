import { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handleSelectCourses}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);


    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[78%]">
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
};

export default Courses;