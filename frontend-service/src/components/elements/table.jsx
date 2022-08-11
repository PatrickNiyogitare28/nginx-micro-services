import React from 'react'

const Table = ({ data }) => {
  return (
    <div>
      
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Medical Data
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                {data?.tableCaption}
            </p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {data?.tableHeaders?.map((header, index) => (
                    <th scope="col" class="py-3 px-6" key={index.toString()}>
                        {header}
                    </th>
                ))}
               
            </tr>
        </thead>
        <tbody>
            {data?.tableData?.map((row, index) => (
                <tr key={index.toString()} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {row.map((cell, index) => (
                        <td class="py-4 px-6" key={index.toString()}>
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table
