import { useState } from 'react';

function App() {

  const [tytul, setTytul] = useState('');
  const [autor, setAutor] = useState('');
  const [gatunek, setGatunek] = useState('');


  const gatunkiMap = {
    '1': 'Powieść',
    '2': 'Kryminał',
    '3': 'Fantastyka',
    '4': 'Biografia',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nazwaGatunku = gatunkiMap[gatunek] || gatunek;

    console.log(`tytuł: ${tytul}; autor: ${autor}; gatunek: ${nazwaGatunku}`);
  };

  
}

export default App;