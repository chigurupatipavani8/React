// import {MyClassComponent,MyFunComponent,ListOfTenThings,Repeat} from './MyComponent';
// import MyComponent from './EventHandling';
import './App.css';
// import Parent from './Parent';
// import ConditionalRendering from './ConditionalRendering';
// import MapForList from './MapForList';
// import FormHandling from './FormHandling';
// import ParentLifeCycle from './ParentLifeCycle';
// import Header from './Header';
// import UseStateHook1 from './useStateHook1';
// import UseEffectHook from './useEffectHook';
// import ParentuseContextHook from './ParentuseContextHook';
// import UseReducerHook from './useReducerHook';
// import RefExample from './refExample';
// import PortalExample from './PortalExample';
// import ExceptionBoundary from './ExceptionBoundary';
// import ErrorOnProps from './ErrorOnProps';
// import HoverCounter from './HOC/HoverCounter';
// import ClickCounter from './HOC/ClickCounter';
import {Provider } from 'react-redux'
import CakeContainer from './ReactRedux/cakeContainer';
import store from './ReactRedux/cakeStore';
import HookContainer from './ReactRedux/hookContainer';

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
   {/* <UseStateHook1></UseStateHook1> */}
   {/* <UseEffectHook></UseEffectHook> */}
   {/* <ParentuseContextHook></ParentuseContextHook> */}
   {/* <UseReducerHook></UseReducerHook> */}
   {/* <RefExample></RefExample> */}
   {/* <ExceptionBoundary>
   <ErrorOnProps status='ok'></ErrorOnProps>
   </ExceptionBoundary>
   <ExceptionBoundary>
   <ErrorOnProps status='not found'></ErrorOnProps>
  </ExceptionBoundary>
  <ExceptionBoundary>
   <ErrorOnProps status='error'></ErrorOnProps>
   </ExceptionBoundary> */}
    {/* <ExceptionBoundary>
   <ErrorOnProps status='ok'></ErrorOnProps>
  
   <ErrorOnProps status='not found'></ErrorOnProps>
 
   <ErrorOnProps status='error'></ErrorOnProps>
   </ExceptionBoundary> */}
   {/* <HoverCounter name="pavani"></HoverCounter>
   <ClickCounter name="chigurupati"></ClickCounter>
    */}


    <Provider store={store}>
      <CakeContainer></CakeContainer>
      <HookContainer></HookContainer>
    </Provider>

      </>
  );
}

export default App;
