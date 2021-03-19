
import { useLockBodyScroll } from "./hooks";

function Modal({show}) {
  useLockBodyScroll(show,document.getElementsByClassName('modal'));
  return (
    <>
      {show && (
        <div className="modal">
          <h1>This is modal</h1>
        </div>
      )}
    </>
  );
}

export default Modal;
