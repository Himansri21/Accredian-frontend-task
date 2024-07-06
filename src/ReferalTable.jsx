import FormPopup from "./FormPopUp";

export default function Table() {
    return (
<div className="overflow-x-auto mt-36 mb-44 mx-6">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 text-lg text-purple-500">All Programs</th>
        <th className="whitespace-nowrap px-4 py-2 text-lg text-purple-500">Program</th>
        <th className="whitespace-nowrap px-4 py-2 text-lg text-purple-500">Referrer bonus</th>
        <th className="whitespace-nowrap px-4 py-2 text-lg text-purple-500">Referee bonus</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><a className="text-blue-500" href="#">PRODUCT MANAGEMENT</a></td>
        <td className="whitespace-nowrap px-4 py-2 text-lg text-gray-700">🎓 Proffesional certificat Program in Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹7,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹9,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><a className="text-blue-500" href="#">STRATEGY & LEADERSHIP</a></td>
        <td className="whitespace-nowrap px-4 py-2 text-lg text-gray-700">🎓 PG Certificate Program in Strategic Product management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹9,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹11,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><a className="text-blue-500" href="#">BUSINESS MANAGEMENT</a></td>
        <td className="whitespace-nowrap px-4 py-2 text-lg text-gray-700">🎓 Executive Program n Product Management and Digital Transformation</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><a className="text-blue-500" href="#">FINTECH</a></td>
        <td className="whitespace-nowrap px-4 py-2 text-lg text-gray-700">🎓 Executive Program In Data Driven Product Management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><a className="text-blue-500" href="#">SENIOR MANAEMENT</a></td>
        <td className="whitespace-nowrap px-4 py-2 text-lg text-gray-700">🎓 Executive Program in Product Management </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><a className="text-blue-500" href="#">DATA SCIENCE</a></td>
        <td className="whitespace-nowrap px-4 py-2 text-lg text-gray-700">🎓 Advanced Certification in Product Management </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><a className="text-blue-500" href="#">DIGITAL TRANSFORMATION</a></td>
        <td className="whitespace-nowrap px-4 py-2 text-lg text-gray-700">🎓 Executive Program in Product Management and Product Management</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">₹10,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <FormPopup />
        </td>
      </tr>

    </tbody>
  </table>
</div>
    )
}