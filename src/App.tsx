import { ToastContainer } from 'react-toastify';
import PageRoutes from 'pages/PageRoutes';
import { AppPortal } from 'AppPortal';

import 'react-toastify/dist/ReactToastify.css';
import Modal from 'components/Modal';
import { useContext } from 'react';
import CheckMyWritingContext from 'contexts/CheckMyWritingContext';
import CheckMyWritingHowToModal from 'pages/CheckMyWritingHowToModal';

function App() {
  const { isShowHowTo, setIsShowHowTo } = useContext(CheckMyWritingContext);
  const closeCheckMyWritingHowToModal = () => setIsShowHowTo(false);
  return (
    <AppPortal.Provider>
      <Modal isShow={true}>
        <CheckMyWritingHowToModal
          
          onOkClick={closeCheckMyWritingHowToModal}
          onCloseClick={closeCheckMyWritingHowToModal}
        />
      </Modal>
      <ToastContainer autoClose={1500} hideProgressBar={true} position="bottom-center" />
      <PageRoutes />
    </AppPortal.Provider>
  );
}

export default App;
