import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);


    return (
        <>
        {
            courses.map(course => console.log(course))
        }
        </>
    );
};

Courses.propTypes = {
    
};

export default Courses;