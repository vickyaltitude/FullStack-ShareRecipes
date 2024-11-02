import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";





const Reciperating = ({ recipeRating }) => {
    const filledStars = Math.floor(recipeRating);
    const halfStar = recipeRating % 1 >= 0.5; 
    const totalStars = 5; 

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          
            {[...Array(totalStars)].map((_, index) => {
                if (index < filledStars) {
                    return (
                        <span key={index} role="img" aria-label="filled star" style={{ fontSize: '1.5rem', color: '#FFD700' }}>
                            <FaStar />
                        </span>
                    ); 
                } else if (index === filledStars && halfStar) {
                    return (
                        <span key={index} role="img" aria-label="half star" style={{ fontSize: '1.5rem', color: '#FFD700' }}>
                            <FaStarHalfAlt />
                        </span>
                    ); 
                } else {
                    return (
                        <span key={index} role="img" aria-label="empty star" style={{ fontSize: '1.5rem', color: '#ccc' }}>
                           <FaRegStar />

                        </span>
                    );
                }
            })}
            <span style={{ marginLeft: '8px', fontSize: '1.2rem', color: '#fff' }}>
                {recipeRating} 
            </span>
        </div>
    );
};

export default Reciperating;
