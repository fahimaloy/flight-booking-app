import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBooking } from '../store/bookingStore/actions'
import TrashIcon from './icons/TrashIcon'
export default function PreviewTableRow({tableData,deleteRowEvent}) {
    const dispatch = useDispatch()
    const deleteRow = () =>{
        deleteRowEvent()
        dispatch(deleteBooking(tableData.id))
    }
  return (
    <tr className="lws-bookedTable text-black">
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p className="lws-bookedFrom">{tableData.from}</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p className="lws-bookedTo">{tableData.to}</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p className="lws-bookedDate">{tableData.bookedDate}</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p className="lws-bookedGustes">{tableData.guests}</p>
            </td>
            <td className="px-6 py-4 text-center">
              <span className="lws-bookedClassName"> {tableData.ticketClass} </span>
            </td>
            <td className="px-6 py-4 text-center">
              <div className="flex justify-center gap-4">
                <button className="lws-remove" onClick={deleteRow}>
                  <TrashIcon />
                </button>
              </div>
            </td>
          </tr>
  )
}
