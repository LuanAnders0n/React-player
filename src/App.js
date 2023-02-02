import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import { Youtube } from './components/Youtube/Youtube';

function App() {
  const [youtubeLink, setYoutubeLink] = useState(null);

  return (
    <div className="container">
      <Form setYoutubeLink={setYoutubeLink} />
      <br></br>
      <Youtube youtubeLink={youtubeLink} />
    </div>
  );
}

export default App;
