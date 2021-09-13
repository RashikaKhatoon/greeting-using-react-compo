import React from "react";

function App() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};
  if (curDate > 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = 'blue';
  }
  else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = 'red';

  }
  else {
    greeting = "Good Night";
    cssStyle.color = 'green';

  }

return (
  <>
  <div>
    <h1 style={{ color: 'orange' }}>Hello Sir,<span style={cssStyle}> {greeting} </span></h1>
  </div>
  </>
);
}
export default App;
