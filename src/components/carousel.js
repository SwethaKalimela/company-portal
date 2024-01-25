// Carousel.js
import React from 'react';
import reviewsData from '../responses/mockResponse.json';

const ReviewList = () => {

    return (
        <div className="">
            <div>
                {reviewsData.map((review, index) => (
                    <div key={index} className="carousel-item">
                        <img
                            src={review.image}
                            alt={`Review ${index}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="carousel-content">
                            <p>{review.review}</p>
                            <div>
                                <div className="flex-between">
                                    <p>{review.name}</p>
                                    <p className="hidden md:inline-block">Stars: {review.stars}</p>
                                </div>
                                <div className="md:flex-between">
                                    <p>{review.location}</p>
                                    <p className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ReviewList;
