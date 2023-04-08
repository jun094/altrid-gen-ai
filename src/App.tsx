import { ToastContainer } from 'react-toastify';
import PageRoutes from 'pages/PageRoutes';
import { AppPortal } from 'AppPortal';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppPortal.Provider>
      <ToastContainer autoClose={1500} hideProgressBar={true} position="bottom-center" />
      <PageRoutes />
    </AppPortal.Provider>
  );
}

export default App;
