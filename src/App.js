import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <div>
      <Head />
      <Body />

      {/*
       * Head
       * Body
       * * Sidebar
       *     Menu Items
       *   MainContent
       *     ButtonList
       *     VideoContainer
       *      VideoCard
       */}
    </div>
  );
}

export default App;
