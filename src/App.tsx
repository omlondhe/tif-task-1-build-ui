import "./App.css";
import Landing from "./pages/LandingPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Landing />
    </ChakraProvider>
  );
}

export default App;
