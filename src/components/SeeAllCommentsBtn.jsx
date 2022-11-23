const SeeAllCommentsBtn = ({ setSeeAllComments }) => {
  const handleSeeAllComments = (event) => {
    event.preventDefault();
    setSeeAllComments(true);
  };

  return <button onClick={handleSeeAllComments}>See All Comments</button>;
};
export default SeeAllCommentsBtn;
