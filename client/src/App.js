import React from 'react';
import './App.css';
import Fileupload from './coponents/fileupload';

function App() {
  return (
    <div className="App container mt-5">
      <h4 className="display-4 text-center mb-4">
        <i className="fab fa-react"></i> React File Upload
      </h4>
      <Fileupload/>
    </div>
  );
}

export default App;
