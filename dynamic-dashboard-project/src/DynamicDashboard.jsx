/*

Create a React component called DynamicDashboard that integrates the following
skills:

1. Use JavaScript expressions in JSX to display dynamic data.
2. Implement conditional rendering for personalized content.
3. Use the map method to render a list dynamically.

*/

import './App.css';
import DynamicGreeting from './components/DynamicGreeting';
import IsPremiumUser from './components/IsPremiumUser';
import TaskObjects from './components/TaskObjects';

function App() {

  const userName = 'Percy';
  const premiumMembership = true;
  const dateDisplay = new Date().toLocaleDateString();

  return (
    <>
      <div>
        <header>Today's Date: {dateDisplay}</header>
        <DynamicGreeting name={userName} />
        <IsPremiumUser premiumMembership={IsPremiumUser} />
        <TaskObjects />
      </div>
    </>
  )
}

export default App;
