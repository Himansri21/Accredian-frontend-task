import FormPopup from "./FormPopUp";

export default function Table() {
    return (
<div className="overflow-x-auto my-64 mx-6">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Program</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Referal Bonus</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Referee Bonus</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Proffesional certificat Program in Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹9,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">PG Certificate Program in Strategic Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Proffesional certificat Program in Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Proffesional certificat Program in Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Proffesional certificat Program in Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Proffesional certificat Program in Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>
    </tbody>
  </table>
</div>
    )
}