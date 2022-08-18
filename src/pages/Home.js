import Form from '../components/Form';
import BookList from '../components/Book_list';

function Home() {
  return (
    <>
      <div className="home-container">
        <div>
          <BookList />
        </div>
        <div id="line" />
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Home;
