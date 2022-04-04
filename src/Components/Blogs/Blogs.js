import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='text-start'>
                <h4>What is context API?</h4>
                <p>Ans: The Context API is a React structure that computing you to exchange identical details and supports in solving prop-drilling from all levels of your appliance. The React Context API is a process for a React app to productively generate global variables that can be abstained around. This is the substitute to "prop drilling" or moving props from grandparent to parents to child, and so on. Context is also considered as an easier, lighter pathway to state management using Redux.
                </p>


                <h4>What is the difference between inline, block and inline-block element?</h4>
                <p>Ans: Inline: The element doesn’t start on a new line and only enthrall just the range it requires. You can’t set the range or height. Therefore,  even if you try to set any height as well width, it won't effect anything at all.
                </p>
                <p>Block:  its totally opposite of inline and The element will start on a new line and enthrall the full width available. And you can set width and height values. So that means block elements will occupy the entire width of its parent element.

                </p>
                <p>Inline- block: It’s formatted just like the inline element, where it doesn’t start on a new line. However, you can set range and height values.</p>

            </div>

        </div>
    );
};

export default Blogs;