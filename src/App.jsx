import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Hero />
      </Main>
      <Footer />
    </>
  );
}
