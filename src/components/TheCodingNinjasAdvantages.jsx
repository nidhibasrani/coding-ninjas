import React from 'react';

const TheCodingNinjasAdvantages = () => {
  const tableData = [
    { feature: 'Structured + Problem Solving Based', codingNinjas: '✅', others: '❌', competitor1: '❌' },
    { feature: 'Fastest 1:1 Doubt Support', codingNinjas: '✅', others: '❌', competitor1: '❌' },
    { feature: 'Integrated Prep Platform', codingNinjas: '✅', others: '❌', competitor1: '❌', },
    { feature: 'Profiles Highlighted on Naukri', codingNinjas: '✅', others: '❌', competitor1: '❌' },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg border border-white w-3/4 ml-20 mr-20">
      <table className="w-full h-full">
        <thead>
          <tr>
            <th className="py-3"></th>
            <th className="py-3">Coding Ninjas</th>
            <th className="py-3">Free Resources</th>
            <th className="py-3">Other Courses</th>
           
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2">{row.feature}</td>
              <td className="py-2 text-center">{row.codingNinjas}</td>
              <td className="py-2 text-center">{row.others}</td>
              <td className="py-2 text-center">{row.competitor1}</td>
              <td className="py-2 text-center">{row.competitor2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TheCodingNinjasAdvantages;