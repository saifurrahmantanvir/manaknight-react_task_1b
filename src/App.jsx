import AuthProvider from "./authContext";
import GlobalProvider from "./globalContext";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalProvider>
          <Main />
        </GlobalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
