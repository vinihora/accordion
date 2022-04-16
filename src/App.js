import "./App.css";
import data from "./data";
import Question from "./Question";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="title">Questions And Answers About Login</div>
        <div className="qea">
          {data.map((question, count) => {
            return <Question data={question} key={count} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
