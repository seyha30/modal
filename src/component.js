import React, { useContext } from "react";
import { ModalContext } from "./modalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Component = () => {
  let { handleModal } = useContext(ModalContext);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quidem
        asperiores?
      </p>
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={ () => handleModal( <ContentComponent /> )}
      >
        open this modal!
      </button>
    </>
  );
};

export default Component;

function ContentComponent() {
  let { handleModal } = React.useContext(ModalContext);
  return (
    <>
      <p>Hello here !!!</p>
      <button
        className="h-8 px-3 text-white bg-red-500 text-xs rounded"
        onClick={handleModal}
      >
        Close modal
      </button>
    </>
  );
}
