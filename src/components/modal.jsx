import React, { useState } from 'react';

export function DraggableModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функція для відкриття модального вікна
  const openModal = () => setIsModalOpen(true);

  // Функція для закриття модального вікна
  const closeModal = () => setIsModalOpen(false);

  // Функція для переміщення модального вікна
  const dragElement = (element) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e) => {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };
    if(!element) {
        return;
    }
    element.onmousedown = dragMouseDown;
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={dragElement}>
            <div className="modal-header">
              <h2>Draggable Modal</h2>
              <button onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p>This modal is draggable. Drag it by clicking on the header.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}