import { useState } from 'react';
import {Area, Container, Header} from './App.styles';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = () => {
  
  type Item = {
    id:number;
    name: string;
    done: boolean;
  }
  const [list, setList] = useState<Item[]>([
    {id:1, name:'ramon', done:false},
    {id:2, name:'comprar bolo', done:false}
  ])

  const handleAddTask = (taskeName:string) =>{
    let newlist = [...list]
    newlist.push({
      id:list.length + 1,
      name: taskeName,
      done:false
    })
    setList(newlist)
  }

  return(
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={handleAddTask}></AddArea>
        
        {list.map((item)=>(
          <ListItem key={item.id} item={item} />
        ))}

        

      </Area>
    </Container>
  );
};

export default App;
