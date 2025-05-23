import React from 'react';

/*
export default function CommentsList({ comments }) {
  return (
    <>
    <h3>Comments:</h3>
    {comments.map(comment => (
      <div key={comment.text}>
        <h4>{comment.postedBy}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
    </>
  );
}
*/

export default function CommentsList({ comments }) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>  
      ))}
    </ul>
  );
}