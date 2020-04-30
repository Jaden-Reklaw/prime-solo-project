import React, { useEffect, useState, useRef } from 'react'
import './modal.css';

function AddNotes() {
  const outside = useRef()
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    if (outside.current.contains(event.target)) {
      return
    }
    setIsOpen(false)
  }

  return (
    <div ref={outside}>
      <button onClick={() => setIsOpen(!isOpen)}>Add Notes</button>
      {isOpen ? (
        <div className="modal">
          <div className="modal_content">
            <h3>Notes:</h3>
            <article>
                <textarea>lorem</textarea>
            </article>
            <button>Save</button>
            <button onClick={() => setIsOpen(!isOpen)}>Cancel</button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AddNotes;