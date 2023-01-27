import { useState } from "react";


function App() {
  const [markDown, setMarkDown] = useState('## markdown preview')
  return (
    <h1>Markdown Preview React</h1>
  );
}

export default App;
