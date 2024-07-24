import React from 'react';
import Posts from './features/posts/Posts';
import "./App.css"

const App: React.FC = () => {
  return (
    <div>
      <h1 className="OnlyHeaderItems"style={{backgroundColor:"orange"}}>Simple Redux app with ts</h1>
      <Posts />
    </div>
  );
};

export default App;


// import React from "react";
// import "./App.css";

// function App() {
//   return <div>
//     <h2 style={{backgroundColor:"orange"}}>Simple Redux app with ts</h2>
//     <button style={{backgroundColor:"lightblue"}}>Click me</button>
//     </div>;
// }

// export default App;
