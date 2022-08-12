import Form from '../components/Form';
import Book from '../components/Book';

function Home() {
  return (
    <>
      <div className="home-container">
        <div>
          <Book />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Home;
