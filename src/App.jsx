import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Container from "./pages/container";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Container />
    </ThemeProvider>
  );
}

export default App;
