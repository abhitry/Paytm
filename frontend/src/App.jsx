import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Signup} from "./pages/signup"
 import {Signin} from "./pages/signin"
  import {SendMoney} from "./pages/SendMoney"
  import {Dashboard} from "./pages/Dashboard"
  import {SuccessPage} from "./pages/success"

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg" 
        onClick={() => navigate("/signup")}
      >
        Signup
      </button>
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded-lg" 
        onClick={() => navigate("/signin")}
      >
        Signin
      </button>
    </div>
  );
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />  
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
