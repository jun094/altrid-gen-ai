import { ToastContainer } from 'react-toastify';
import PageRoutes from 'pages/PageRoutes';
import { AppPortal } from 'AppPortal';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppPortal.Provider>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        position="bottom-center"
        style={{ fontFamily: 'inherit' }}
      />
      <PageRoutes />
    </AppPortal.Provider>
  );
}

export default App;
