import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title="My Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/post" Component={NewPost} />
          <Route path="/edit/:id" Component={EditPost} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/about" Component={About} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" Component={Missing} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
