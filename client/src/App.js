import './App.css';
import { About, Footer, Header, Person, Post, Shop, Testimonials ,Post2 } from "./container/";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Testimonials />
      <Shop />
      <Post />
      <Person />
      <Post2 />
      <Footer />
    </div>
  );
}

export default App;
