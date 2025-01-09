import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BibleVerseList() {
  const [bibleVerses, setBibleVerses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/bible-verses/')
      .then(response => setBibleVerses(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">
        Bible Verses
      </h2>
      <ul className="space-y-4">
        {bibleVerses.map(verse => (
          <li
            key={verse.id}
            className="bg-white shadow-md p-4 rounded-md border-l-4 border-blue-500"
          >
            <span className="block text-lg font-semibold text-gray-800">
              {verse.book} {verse.chapter}:{verse.verse}
            </span>
            <span className="block text-gray-600">{verse.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BibleVerseList;
