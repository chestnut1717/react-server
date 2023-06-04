import React, { useState } from "react";
// import Sheet from 'react-modal-sheet';
// import axios from "axios";
import ReviewUpdate from "./ReviewUpdate";

// 기존에 저장된 리뷰 서버로부터 불러오고, 서버에서 전달받은 리뷰 보여주는 컴포넌트
function Review({ address, reviews }) {
    //console.log(reviews);

    const showReview = () => {
        if (reviews) {
            return (
                <ul id="review-list">
                    {reviews.map((review) => (
                        <li key={review.created_at} style={{ textAlign: "left" }}>
                            <p id="review-username">{review.username_comment}</p><br/>
                            <p>{review.content}</p>
                            <p id="review-created-at">{review.created_at}</p>
                        </li>
                    ))}
                </ul>
            )
        }
    }

    return (
        <div>
            {/* <h5 >review</h5> */}
            {/* <hr /> */}
            <ReviewUpdate address={address} />
            <hr />
            {showReview()}
        </div>
    );
}

export default Review;