import './App.css';
import Form from './Form';
import ConditionalRendering from './ConditionalRendering';
import BasicFormValidatio from './BasicFormValidatio';
import PassFuctionAsProps from './PassFuctionAsProps';

function App() {
  return (
    <div className="App">
     <Form></Form>
     <ConditionalRendering/>
     <BasicFormValidatio/>
     <PassFuctionAsProps/>
    </div>
  );
}

export default App;
