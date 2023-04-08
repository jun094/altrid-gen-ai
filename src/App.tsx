import { ToastContainer } from 'react-toastify';
import PageRoutes from 'pages/PageRoutes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer autoClose={1500} hideProgressBar={true} position="bottom-center" />
      <PageRoutes />
    </>
  );
}

export default App;
