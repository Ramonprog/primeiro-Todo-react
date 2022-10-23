import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(( {done}: ContainerProps) =>(`
    
background-color:#20212C;
padding: 10px;
border-radius: 10px;
margin-top: 10px;


input {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

label {
    color: #ccc;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 18px;
    text-decoration: ${done ? 'line-through': 'initial'};
}
`));