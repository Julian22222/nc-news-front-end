// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import CommentAddButton from "./CommentAddButton";

// const Comments = (props) => {
//   //   console.log(props);
//   const { article_id } = props;
//   const [comments, setComments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       `http://nc-news-julian.herokuapp.com/api/articles/${article_id}/comments`
//     ).then((res) => {
//       res.json().then(({ comment }) => {
//         setComments(comment);
//         setIsLoading(false);
//       });
//     });
//   }, [article_id]);

//   if (isLoading) return <h2>Loading ...</h2>;

//   return (
//     <>
//       <CommentAddButton comments={comments} setComments={setComments} />
//       <p>Comments:</p>
//       <ul>
//         {comments.map((myComment) => {
//           return (
//             <li key={myComment.article_id} className="articlecards">
//               {myComment.body}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Comments;
