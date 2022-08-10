import styled from 'styled-components';

type ContainerProps = {
    filter: string;
}

export const Container = styled.div`
    background-color: #EFF2F7;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    min-height: 100vh;
` 

export const WrapperTodolist = styled.div`
    width: 40%;
    margin: 2rem 0;
`

export const ButtonAdd = styled.button`
    border: 1px solid #18A1B4;
    border-radius: 3px;
    background-color: transparent;
    color: #18A1B4; 
    padding: 8px;
    cursor: pointer;
    transition: all .5s;
    :hover{
        color: blue;
    }`;

export const TodoParagraph = styled.p`
    font-size:40px;
    color: #3B3A36;
    `;
export const DoneParagraph = styled.p`
    font-size:15px;
    color:#958E86;
    `;
    
export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
` 

export const WrapperButtons = styled.div(( {filter}: ContainerProps ) => (
    `
    display: inline;

    button{
        border: 1px solid ;
        border-radius: 3px;
        background-color: transparent;
        color: #737780;
        padding: 8px;
        cursor: pointer;
        
        
    }
    #all{
        color: ${filter === "all" ? 'white' : '#737780'};
        background-color:  ${filter === "all" ? '#18A1B4' : 'transparent'} ;
        border: ${filter === "all" ? '1px solid #737780':'1px solid #737780'} ;
    }
    #active{
        color: ${filter === "active" ? 'white' : '#737780'};
        background-color:  ${filter === "active" ? '#18A1B4' : 'transparent'} ;
        border: ${filter === "active" ? '1px solid #737780':'1px solid #737780'} ;
    }
    #done{
        color: ${filter === "done" ? 'white' : '#737780'};
        background-color:  ${filter === "done" ? '#18A1B4' : 'transparent'} ;
        border: ${filter === "done" ? '1px solid #737780':'1px solid #737780'} ;
    }
        button:hover{
            color: white;
            background-color: #18A1B4;
            border: 1px solid #737780;
        }
    `
))



