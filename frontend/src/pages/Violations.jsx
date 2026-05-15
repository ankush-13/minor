import { useEffect, useState } from 'react'

import { getViolations } from '../api/violationApi'

import ViolationTable from '../components/ViolationTable'

import socket from '../socket/socket'

const Violations = () => {

  const [violations, setViolations] = useState([])

  useEffect(() => {

    fetchViolations()

    socket.on('violation-update', (data) => {
      setViolations((prev) => [data, ...prev])
    })

    return () => {
      socket.off('violation-update')
    }

  }, [])

  const fetchViolations = async () => {

    const res = await getViolations('INT001')

    setViolations(res.data.data)
  }

  return (
    <div>

      <h1 className='text-3xl font-bold mb-5'>
        Violations
      </h1>

      <ViolationTable violations={violations} />

    </div>
  )
}

export default Violations