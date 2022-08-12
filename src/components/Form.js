function Form() {
  return (
    <>
      <h6 className="form-title"> ADD NEW BOOK </h6>
      <form className="form">
        <input type="text" placeholder="Title" className="new-book" />
        <input type="text" placeholder="Author" className="new-author" />
        <button type="submit" className="add-book">Add Book</button>
      </form>
    </>
  );
}

export default Form;
