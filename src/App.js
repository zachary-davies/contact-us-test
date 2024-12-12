import "./App.css";
import Connect from "./components/connect/connect";
import ContactInfo from "./components/contactInfo/contactInfo";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="content-contact">
          <ContactInfo />
        </div>
        <Connect />
      </div>
      <Footer />
    </>
  );
}

export default App;
