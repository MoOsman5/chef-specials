import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ItemsList from './components/ItemsList';
import {items} from './data'
import {useState} from 'react'
function App() {
  const [itemData, setitemData] = useState(items);

  const allCategory =['All',...new Set(items.map((i)=>i.category))]

  const filterByCategory = (cat)=>{
    if(cat === 'All') { 
      setitemData(items)
    }else{
      let newItems=items.filter((item)=> item.category===cat)
      setitemData(newItems) 
    }

  }

  const search =(word)=>{
    if(word !== ''){
      let newItems=items.filter((item)=> item.title===word)
      setitemData(newItems) 
    }


  }
  return (
    <div className="App">
      <NavBar search={search}/>
      <Container>
        <Header/>
        <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
        <ItemsList itemData={itemData}/>
        

      </Container>
    
    </div>
  );
}

export default App;
