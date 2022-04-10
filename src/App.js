import React from 'react';
import Pet from "./Pet";
const App=()=> {
  return (
     <div>
     <h1>Adopt Me!</h1>  
     <Pet name="Luna" animal="Dog" breed="Havanese" />
     <Pet name="Pepper" animal="Bird" breed="Cockateil" />
     <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" />
      </div>
  );

}

export default App;
