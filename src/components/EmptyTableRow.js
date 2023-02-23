import React from 'react'

export default function EmptyTableRow({columns}) {
  return (
    <tr className="lws-bookedTable text-black">
        <td className="px-6 py-4" colSpan={columns}>
              <div className="flex items-center justify-center">
                <p>No Data</p>
              </div>
            </td>
    </tr>
  )
}
