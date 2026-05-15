import { useEffect, useState } from 'react'

import {
  getCurrentSignal,
  manualOverride,
} from '../api/signalApi'

import socket from '../socket/socket'


const Signals = () => {

  const [signal, setSignal] = useState(null)

  useEffect(() => {

    fetchSignal()

    socket.on('signal-update', (data) => {
      setSignal(data)
    })

    return () => {
      socket.off('signal-update')
    }

  }, [])

  const fetchSignal = async () => {

    const res = await getCurrentSignal('INT001')

    setSignal(res.data.data)
  }

  const handleOverride = async () => {

    await manualOverride({
      intersectionId: 'INT001',
      activeLane: 'North',
      timings: [40, 20, 15, 10],
    })
  }

  return (
    <div>

      <h1 className='text-3xl font-bold mb-5'>
        Signal Management
      </h1>

      <div className='bg-white p-5 rounded shadow'>

        <p>
          Active Lane:
          {signal?.activeLane}
        </p>

        <p>
          Emergency Mode:
          {signal?.emergencyMode ? 'ON' : 'OFF'}
        </p>

      </div>

      <button
        className='bg-blue-500 text-white px-5 py-2 rounded mt-5'
        onClick={handleOverride}
      >
        Manual Override
      </button>

    </div>
  )
}

export default Signals