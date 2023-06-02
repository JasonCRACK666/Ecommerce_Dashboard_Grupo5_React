import { create } from 'zustand'

import { devtools } from 'zustand/middleware'

export const useAlertsStore = create()(
  devtools(set => ({
    alerts: [],
    setAlert: newAlert =>
      set(state => ({ alerts: [...state.alerts, newAlert] })),
    removeAlert: indexAlert =>
      set(state => ({
        alerts: state.alerts.filter((_, index) => index !== indexAlert)
      }))
  }))
)
