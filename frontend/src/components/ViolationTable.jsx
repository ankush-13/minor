const ViolationTable = ({ violations }) => {
  return (
    <table className='w-full bg-white rounded shadow'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='p-3'>Plate</th>
          <th className='p-3'>Violation</th>
          <th className='p-3'>Speed</th>
        </tr>
      </thead>

      <tbody>
        {violations.map((v) => (
          <tr key={v._id}>
            <td className='p-3'>
              {v.plateNumber}
            </td>

            <td className='p-3'>
              {v.violationType}
            </td>

            <td className='p-3'>
              {v.speed}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ViolationTable