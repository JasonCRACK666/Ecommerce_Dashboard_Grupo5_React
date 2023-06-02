import { useAlertsStore } from '../../store/useAlertsStore'

import Alert from '../Alert'

const StackAlerts = () => {
  const alerts = useAlertsStore(state => state.alerts)

  return (
    <div className='position-fixed bottom-0 start-0 z-3 w-25 ps-3'>
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          index={index}
          message={alert.message}
          timeout={alert.timeout}
          type={alert.type}
        />
      ))}
    </div>
  )
}

export default StackAlerts
