import { useEffect } from 'react'

import { useAlertsStore } from '../../store/useAlertsStore'

const TYPES_ALERTS = {
  success: 'alert-success',
  danger: 'alert-danger',
  warning: 'alert-warning',
  info: 'alert-info',
  dark: 'alert-dark'
}

const Alert = ({ index, message, type, timeout }) => {
  const { removeAlert } = useAlertsStore()

  const handleClose = () => {
    removeAlert(index)
  }

  useEffect(() => {
    const timeRemoveAlert = setTimeout(() => {
      removeAlert(index)
    }, timeout)

    return () => {
      clearTimeout(timeRemoveAlert)
    }
  }, [index, removeAlert, timeout])

  return (
    <div
      className={`alert ${TYPES_ALERTS[type] ?? 'alert-dark'}`}
      role='alert'
      onClick={() => handleClose()}
    >
      {message}
    </div>
  )
}

export default Alert
