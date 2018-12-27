import React from 'react'
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit eaque nulla, eum vero distinctio, sit blanditiis mollitia soluta quasi officiis ex quaerat voluptatum a quam, totam dolores deserunt placeat!</p>
        </div>
    )
}

export default Rainbow(About);