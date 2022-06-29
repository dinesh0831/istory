import Home from "./Homepage"
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

function App() {
  return (
   
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
