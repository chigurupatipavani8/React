import {MyClassComponent,MyFunComponent,ListOfTenThings,Repeat} from './MyComponent';
import MyComponent from './EventHandling';
import './App.css';
import Parent from './Parent';
import ConditionalRendering from './ConditionalRendering';
import MapForList from './MapForList';

function App() {
  return (<>
   {/* <h1 className='App'>Hello World</h1>
   <MyFunComponent name="pavani">Hello I am child component</MyFunComponent>
   <MyClassComponent name="ammulu"></MyClassComponent>
   <ListOfTenThings></ListOfTenThings>
   <MyComponent></MyComponent> */}
   {/* <Parent></Parent> */}
   {/* <ConditionalRendering></ConditionalRendering> */}
   <MapForList></MapForList>
  </>
  );
}

export default App;
