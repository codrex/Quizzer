import React from 'react';
// import AnimatedIcon from './components/common/AnimatedIcon';
import Question from './components/screens/Question';
import { categories } from './constant';

import './App.scss';

const options = ['Bruce Wayne', 'Arthur Curry', 'John Jones', 'Curry Wayne'];
function App() {
  return (
    <div className="App">
      <Question
        questionNumber={1}
        options={options}
        icons={categories[2].icons}
        question="FSEventStreamStart: register_with_server: ERROR: f2d_register"
        answer="John Jones"
      />
    </div>
  );
}

export default App;
