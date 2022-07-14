import { Box } from "@mui/system";
import Deskchair from "./components/Deskchair";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Lamp from "./components/Lamp";
import Navbar from "./components/Navbar";
import Table from "./components/Table";


function App() {
  return (
    <Box>
      <Navbar/>
      <Home/>
      <Lamp/>
      <Deskchair/>
      <Table/>
      <Footer/>
    </Box>
  );
}

export default App;
