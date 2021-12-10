/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react"

const rootStyles = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'white',
  boxShadow: '2px 2px 6px 0 rgba(0,0,0,0.3)',
  padding: 20
}

export const Modal = ({ isOpen, setIsOpen, onSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const el = document.getElementById('modalRoot')

    if (el) {
      el.style.visibility = isOpen ? 'visible' : 'hidden'
      setIsModalOpen(isOpen)
    }
  }, [isOpen])


  const submit = useCallback(() => {
    const el = document.getElementById('input')

    const value = el.value

    onSubmit(value)
  }, [])

  return (
    <>
      <div id="modalRoot" style={rootStyles}>
        {isModalOpen && (
          <div>
            <div>Create Todo</div>

            <div style={{ margin: 8 }}>
              <input type="text" id="input" />
              <button onClick={submit}>Submit</button>
              <button onClick={close}>Close</button>
            </div>
          </div>
        )}
      </div>

      <button onClick={open}>Create new Todo</button>
    </>
  )
}