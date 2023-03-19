import "./App.scss";
import "./index.css";
// komentar adalah codingan sebelumnya
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//components
import { Footer, Header, Beranda, Layanan, MainHeader, MainContainer, CreateContainer } from "./components/index";

//pages
// import { Home, Contact, Login, Register, Reset } from "./pages";

function App() {
  
  return (
    <>
    <div className="w-screen h-auto flex flex-col bg-primary">
    <MainHeader/>
      <main className="mt-24 p-8 w-full">
        <BrowserRouter>
        {/* <ToastContainer/> */}
        {/* <Header/> */}
        <Routes>
          {/* <Route index element={<Home/>} /> */}
          <Route path="/" element={<MainContainer/>} />
          <Route path="/createItem" element={<CreateContainer/>} />
          {/* <Route path="/Layanan" element={<Layanan/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/reset" element={<Reset/>} /> */}
        </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
      </main>
    
   </div>
   </>
  );
}

export default App;
