import { Home } from "./pages/Home/Home";
import { Routes, Route, } from "react-router-dom";
import { ForgetPassword } from "./pages/ForgetPassword/ForgetPassword";
import { SignUp } from "./pages/SignUp/SignUp";
function App() {
  return (
    <Routes>
       <Route index element={<Home />} />
       <Route path="/forgetpassword" element={<ForgetPassword/>}/>
       <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
