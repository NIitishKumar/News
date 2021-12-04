import "./App.css";
import { useEffect, useState } from "react";
import Select from "react-select";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=93d7f23b97a14e3e88111033f4dec6f6`
    );
    const data = await res.json();
    const articles = data.articles[0];
    setAuthor(articles.author);
    setContent(articles.content);
    setImage(articles.urlToImage);
  }, []);

  const handleSelectChange = async (e) => {
    console.log(e.value);
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${e.value}&apiKey=93d7f23b97a14e3e88111033f4dec6f6`
    );
    const data = await res.json();
    const articles = data.articles[0];
    setAuthor(articles.author);
    setContent(articles.content);
    setImage(articles.urlToImage);
  };

  return (
    <div className="container">
      <Select
        class="form-select"
        // value={}
        onChange={handleSelectChange}
        options={[
          { value: "in", label: "India" },
          { value: "us", label: "United State" },
          // { value: 2018, label: 2018 },
        ]}
        placeholder="Select Country..."
      />
      <div className="d-flex justify-content-center">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <img class="card-img-top" src={image} alt="Card image cap" />
            <br />
            <br />
            <h5 class="card-title">Auther : {author}</h5>
            <p class="card-text">Content : {content}</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
