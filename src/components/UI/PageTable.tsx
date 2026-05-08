type TableProps = {
  headers: string[];
  rows: (string | number)[][];
};

export default function PageTable({ headers, rows }: TableProps) {
  return (
    <table className="mt-4 mb-4 w-full border-collapse border border-gray-800">
      <thead>
      <tr className="bg-slate-600 text-white">
        {headers.map((header, index) => (
          <th
            key={index}
            className="border border-gray-800 px-4 py-3 text-center font-semibold"
          >
            {header}
          </th>
        ))}
      </tr>
      </thead>

      <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className="border border-gray-800 px-4 py-3 text-center text-base text-black/80"
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
}