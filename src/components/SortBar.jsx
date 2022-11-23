const SortBar = (props) => {
  const { setSortBy } = props;

  const handleChange = (event) => {
    console.log(event);
    setSortBy(event.target.value);
    //publishedDate,title, votes, commentCount
  };

  const handleOrder = (event) => {
    console.log(event);
  };

  return (
    <>
      <label>Sort By: </label>
      <select onChange={handleChange} name="hello">
        {/* <option defaultValue={setSortBy("")}></option> */}
        <option></option>
        <option value="publishedDate">date</option>
        <option value="votes">votes</option>
        <option value="commentCount">comment count</option>
      </select>
      <lebel> Order: </lebel>
      <select onChange={handleOrder}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </>
  );
};

export default SortBar;
