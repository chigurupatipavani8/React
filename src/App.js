import {MyClassComponent,MyFunComponent,ListOfTenThings,Repeat} from './MyComponent';
import MyComponent from './EventHandling';
import './App.css';
import Parent from './Parent';
import ConditionalRendering from './ConditionalRendering';
import MapForList from './MapForList';
import FormHandling from './FormHandling';
import ParentLifeCycle from './ParentLifeCycle';
import Header from './Header';
import UseStateHook1 from './useStateHook1';

function App() {
  return (<>
   {/* <h1 className='App'>Hello World</h1>
   <MyFunComponent name="pavani">Hello I am child component</MyFunComponent>
   <MyClassComponent name="ammulu"></MyClassComponent>
   <ListOfTenThings></ListOfTenThings>
   <MyComponent></MyComponent> */}
   {/* <Parent></Parent> */}
   {/* <ConditionalRendering></ConditionalRendering> */}
   {/* <MapForList></MapForList> */}
   {/* <FormHandling></FormHandling> */}
   {/* <ParentLifeCycle></ParentLifeCycle> */}
   {/* <Header></Header> */}
   <UseStateHook1></UseStateHook1>
   </>
  );
}

export default App;
