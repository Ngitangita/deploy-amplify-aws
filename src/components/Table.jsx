const Table = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-6xl px-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-3 px-4 font-semibold text-sm">Nom</th>
                <th className="py-3 px-4 font-semibold text-sm">Âge</th>
                <th className="py-3 px-4 font-semibold text-sm">Ville</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700 hover:bg-gray-600">
                <td className="py-3 px-4 border-t border-gray-600">Jean Dupont</td>
                <td className="py-3 px-4 border-t border-gray-600">30</td>
                <td className="py-3 px-4 border-t border-gray-600">Paris</td>
              </tr>
              <tr className="bg-gray-700 hover:bg-gray-600">
                <td className="py-3 px-4 border-t border-gray-600">Marie Curie</td>
                <td className="py-3 px-4 border-t border-gray-600">35</td>
                <td className="py-3 px-4 border-t border-gray-600">Lyon</td>
              </tr>
              <tr className="bg-gray-700 hover:bg-gray-600">
                <td className="py-3 px-4 border-t border-gray-600">Albert Einstein</td>
                <td className="py-3 px-4 border-t border-gray-600">40</td>
                <td className="py-3 px-4 border-t border-gray-600">Berlin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
