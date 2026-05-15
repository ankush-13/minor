import { useEffect, useState } from 'react'

import {
  getLiveTraffic,
  uploadTrafficVideo,
} from '../api/trafficApi'

import socket from '../socket/socket'

const Traffic = () => {

  const [traffic, setTraffic] = useState(null)

  useEffect(() => {

    fetchTraffic()

    socket.on('traffic-update', (data) => {
      setTraffic(data)
    })

    return () => {
      socket.off('traffic-update')
    }

  }, [])

  const fetchTraffic = async () => {

    const res = await getLiveTraffic('INT001')

    setTraffic(res.data.data)
  }

  const handleUpload = async (e) => {

    const file = e.target.files[0]

    const formData = new FormData()

    formData.append('video', file)

    await uploadTrafficVideo(formData)

    alert('Video uploaded successfully')
  }

  return (
    <div className='space-y-8'>

      <div>
        <h1 className='text-5xl font-bold text-slate-800'>
          Traffic Monitoring
        </h1>

        <p className='text-gray-500 mt-2'>
          Live Traffic Density & Vehicle Analytics
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

        <div className='bg-gradient-to-br from-blue-700 to-cyan-500 text-white p-8 rounded-2xl shadow-2xl'>
          <h2 className='text-xl'>Total Vehicles</h2>
          <p className='text-5xl font-bold mt-4'>
            {traffic?.totalVehicles}
          </p>
        </div>


        <div className='bg-gradient-to-br from-purple-700 to-pink-500 text-white p-8 rounded-2xl shadow-2xl'>
          <h2 className='text-xl'>Weather</h2>
          <p className='text-4xl font-bold mt-4'>
            {traffic?.weatherCondition}
          </p>
        </div>

        <div className='bg-gradient-to-br from-green-700 to-emerald-400 text-white p-8 rounded-2xl shadow-2xl'>
          <h2 className='text-xl'>Emergency</h2>
          <p className='text-4xl font-bold mt-4'>
            {traffic?.emergencyDetected ? 'YES' : 'NO'}
          </p>
        </div>

      </div>

      <div className='bg-white p-8 rounded-2xl shadow-xl border'>

        <h2 className='text-2xl font-bold mb-5'>
          Upload CCTV Footage
        </h2>

        <input
          type='file'
          accept='video/*'
          onChange={handleUpload}
          className='border p-3 rounded-lg w-full'
        />

      </div>

    </div>
  )
}

export default Traffic