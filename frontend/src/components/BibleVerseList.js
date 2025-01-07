import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BibleVerseList() {
  const [bibleVerses, setBibleVerses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/bible-verses/')
      .then(response => setBibleVerses(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Bible Verses</h2>
      <ul>
        {bibleVerses.map(verse => (
          <li key={verse.id}>{verse.book} {verse.chapter}:{verse.verse} - {verse.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default BibleVerseList;
