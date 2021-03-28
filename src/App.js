import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import FoodPage from './components/FoodPage';
import Activity from './components/Activity';
import Biometric from './components/Biometric';

import NavList from './components/NavList';

function App(props) {
  console.log(props)

  const navList = props.navItems.map(item => (
    <NavList
      id={item.id}
      path={item.path}
      title={item.title}
      key={item.id}
    />
  ));

  return (
    <Router>
      <h1>Fitter</h1>
      <ul>
        {navList}
      </ul>
      <Switch>
        <Switch>
          <Route path="/foodPage">
            <FoodPage foodItems={props.foodItems} />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/biometric">
            <Biometric />
          </Route>
        </Switch>
      </Switch>
    </Router>
    // <Router>
    //   <div className="App">
    //     <h1>Fitter</h1>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/food">Food</Link>
    //       </li>
    //       <li>
    //         <Link to="/activity">Activity</Link>
    //       </li>
    //       <li>
    //         <Link to="/biometric">Biometric</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <Switch>
    //     <Route path="/food">
    //       <Food />
    //     </Route>
    //     <Route path="/activity">
    //       <Activity />
    //     </Route>
    //     <Route path="/biometric">
    //       <Biometric />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
