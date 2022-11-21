import React from "react";

export default function DeleteComment(props) {
  //   const [err, setErr] = useState(null);
  //   const [isLoading, setIsLoading] = useState(null);

  const { comments, setDeleteCommentIsLoading, setComments } = props;
  //   console.log(comments);
  //comment_id -->332
  //comments --> vse commenti togo articlja na kotorom ja sejchas
  //destucturisation
  //////////////////////////////////////////////////////////////////
  //   my old work
  const handleDelete = (commentId) => {
    console.log(commentId);
    setComments((prevComment) => {
      return prevComment.filter((comment) => {
        return comment.comment_id !== commentId;
      });
    });

    setDeleteCommentIsLoading(true);
  };
  //////////////////////////////////////////////////////////////////////////
  //   const handleDelete = (item) => {
  //     setComments((current) => {
  //       console.log(current);
  //       const newCommentsList = [...current];
  //       const findComment = newCommentsList.findIndex((itemObj) => {
  //         return (
  //           itemObj.target.previousElementSibling.__reactFiber$5j0zd51umb8.return
  //             .key ===
  //           item.target.previousElementSibling.__reactFiber$5j0zd51umb8.return.key
  //         );
  //       });
  //       newCommentsList.splice(findComment, 1);
  //       return newCommentsList;
  //     });
  //   };

  //////////////////////////////
  // from anothe repo
  // const hadleRemove = (item) => {
  //     setBasket((current) => {
  //       const newBasket = [...current];
  //       const findItem = newBasket.findIndex((itemObj) => {
  //         return itemObj.itemName === item.itemName;
  //       });
  //       newBasket.splice(findItem, 1);
  //       return newBasket;
  //     });
  //   };
  ///////////////////////////
  // console.log(
  //   event.target.previousElementSibling.__reactFiber$5j0zd51umb8.return.key
  // ); // comment_id   ,  __reactFiber$5j0zd51umb8  --> always changes

  // const comment_id =
  //   event.target.previousElementSibling.__reactFiber$lcllghzefmc.return.key;
  // setDeletedComment(null);
  // setErr(null);
  // setIsLoading(true);

  //   fetch(`https://nc-news-julian.herokuapp.com/api/comments/${comment_id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   }).then((response) => {
  //     setDeleteCommentIsLoading(false);
  //     alert("Your comment has been deleted!");
  //   });
  //   .catch((err) => {
  //     setErr("Your comment request has failed. Please try again");
  //   });
  //   };

  return (
    <button onClick={() => handleDelete(comments.comment_id)}>
      DeleteComment
    </button>
  );
}
