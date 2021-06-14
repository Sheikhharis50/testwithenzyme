import "./App.css";
import Header from "./components/header";
import Headline from "./components/headline";
import Form from "./components/form";
import UserInfo from "./components/form/userInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <div className="table">
          <div className="row">
            <div className="col">
              <h3>Headline Testing</h3>
              <hr />
              <Headline {...headlineProps} />
            </div>
            <div className="col">
              <h3>Form Testing</h3>
              <hr />
              <Form />
              <UserInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const headlineProps = {
  header: "Post",
  desc: "Click the button to render the component!",
};

export default App;
