
import './App.css';
import ComponentDidMount from './component/ComponentDidMount';
import GetDerived from './component/GetDerived';



import LifeCycleMethod from './component/LifeCyclemethod';
import Parentcounter from './component/Parentcounter';
import Functionalcount from './Functional/Functionalcount';
import ComponentDidUpdating from './UpdatingPhase/ComponentDidUpdating';
import ComponentWillUnmount from './UpdatingPhase/ComponentWillUnmount';

function App() {
  return (
    <div className="App">
     {/* <LifeCycleMethod/> */}
     {/* <GetDerived favColor="Blue"/> */}

{/*
     <ComponentDidMount/> */}
     <ComponentDidUpdating/>
    
     {/* <Parentcounter/> */}
     {/* <Functionalcount/> */}
    
    </div>
  );
}

export default App;
