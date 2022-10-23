import { useState } from 'react';
import { Container } from './style'
type Props = {
    item: {
        id:number;
        name: string;
        done:boolean;
    }
}
export const ListItem = ({item}: Props) =>{
    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <Container done={isChecked}>
            <label>
                <input
                  type="checkbox" 
                  checked={isChecked}
                  
                  onChange={e => setIsChecked(e.target.checked)}
                  />
                {item.name} - {item.done.toString()}
            </label>
        </Container>
    )
}