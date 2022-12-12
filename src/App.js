import { createContext, useState } from 'react';
import './App.css';
import Parent from './Parent';
import ShortForm from './ShortForm';

export const COUNTER_CONTEXT = createContext()
function App() {
  const [count, setCount] = useState(0);

  const value = {count, setCount}
  return (
    <COUNTER_CONTEXT.Provider value={value}>    
      <div>
        <Parent />
        <ShortForm />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
