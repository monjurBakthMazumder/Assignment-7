import { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);


    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                courses.map(course => 
                    <Course
                    key={course.id}
                    course={course}
                    />    
                )
            }
        </div>
        </>
    );
};

Courses.propTypes = {
    
};

export default Courses;