import './App.css';
import Form from './Form';
import ConditionalRendering from './ConditionalRendering';
import BasicFormValidatio from './BasicFormValidatio';
import PassFuctionAsProps from './PassFuctionAsProps';
import Member from './Member';
import Constructor from './Constructor';

function App() {
  function getData(){
    alert("From App parent component");
  }
  return (
    <div className="App">
     <Form></Form>
     <ConditionalRendering/>
     <BasicFormValidatio/>
     <PassFuctionAsProps data={getData}/>
      <div style={{Float : 'right'}}> 
        <Member data = {getData} />
      </div>
      <Constructor />
    </div>
  );
}

export default App;
