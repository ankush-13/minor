import { useEffect, useState } from 'react'

import {
  triggerEmergency,
  getEmergencyStatus,
} from '../api/emergencyApi'

import socket from '../socket/socket'

const Emergency = () => {

  const [emergency, setEmergency] = useState(null)

  useEffect(() => {

    fetchEmergency()

    socket.on('emergency-alert', (data) => {
      setEmergency(data.emergency)
    })

    return () => {
      socket.off('emergency-alert')
    }

  }, [])

  const fetchEmergency = async () => {

    const res = await getEmergencyStatus('INT001')

    setEmergency(res.data.data)
  }

  const handleEmergency = async () => {

    await triggerEmergency({
      vehicleType: 'Ambulance',
      lane: 'North',
      intersectionId: 'INT001',
      overrideTime: 60,
    })
  }

  return (
    <div>

      <h1 className='text-3xl font-bold mb-5'>
        Emergency System
      </h1>

      <div className='bg-red-500 text-white p-5 rounded'>

        <p>
          Vehicle:
          {emergency?.vehicleType}
        </p>

        <p>
          Lane:
          {emergency?.lane}
        </p>

      </div>

      <button
        onClick={handleEmergency}
        className='bg-black text-white px-5 py-2 rounded mt-5'
      >
        Trigger Emergency
      </button>

    </div>
  )
}

export default Emergency