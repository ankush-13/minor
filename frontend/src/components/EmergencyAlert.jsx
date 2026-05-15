const EmergencyAlert = ({ emergency }) => {
  if (!emergency) return null

  return (
    <div className='bg-red-500 text-white p-4 rounded'>
      Emergency Vehicle Detected
      on lane {emergency.lane}
    </div>
  )
}

export default EmergencyAlert