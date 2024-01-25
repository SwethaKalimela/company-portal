import React from 'react';

const Section = ({
    id,
    className,
    children
}) => {

    return (
        <section id={id} className={`${className} p-4 pt-16 flex-grow text-gray-900`}>
            {children}
        </section>
    );
};

export default Section;
