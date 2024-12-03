import 'react-toastify/dist/ReactToastify.css'

import {
  RouterProvider
} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { router } from "./sugirouters";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
