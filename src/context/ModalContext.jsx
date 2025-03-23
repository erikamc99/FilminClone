import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalData, setModalData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

  function showModal(data, rect) {
    setModalData(data);
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height,
    });
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
    setModalData(null);
  }

  return (
    <ModalContext.Provider value={{ modalData, isModalVisible, showModal, hideModal, modalPosition }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
