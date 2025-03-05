import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import Admin from "./pages/Admin";
import Partner from "./pages/Partner";
import User from "./pages/User";
import SingleMovie from "./pages/SingleMovie";
import BookShow from "./pages/BookShow";

function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>} />
          <Route path="/partner" element={<ProtectedRoute><Partner/></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><User/></ProtectedRoute>} />
          <Route path="/movie/:id" element={<ProtectedRoute><SingleMovie/></ProtectedRoute>} />

          <Route path="/book-show/:id" element={<ProtectedRoute><BookShow/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
