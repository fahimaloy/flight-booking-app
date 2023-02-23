import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyTableRow from './EmptyTableRow'
import PreviewTableRow from './PreviewTableRow'
import Toast from './Toast'

export default function PreviewTable() {
    const tableData = useSelector((state)=>state.bookings)
    const deleteRowEvent = () => {
      setToast(true)
      setTimeout(()=>{
        setToast(false)
      },2000)
    }
    const [toast,setToast] = useState(false)
    const eraseToastFromParent = ()=>{
     setToast(false)
    }
  return (
    <div className="table-container">
      {toast?<Toast message="Successfully Deleted Booking" type="error" eraseToastFromParent={eraseToastFromParent}/>:''}
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
        {tableData.length < 1 ? <EmptyTableRow columns={6} /> : tableData.map((rowData)=><PreviewTableRow tableData={rowData} key={rowData.id} deleteRowEvent={deleteRowEvent} />)}
        
        </tbody>
      </table>
    </div>
  )
}
