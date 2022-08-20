import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const WrapperTodolist = styled.div(( {done}: ContainerProps ) => (
    `
    width: 100%;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #D1D2D6;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
        text-decoration: ${done ? 'line-through' : 'none'};
        opacity: ${done ? '0.5' : '1'}
    `
))

export const WrapperTodolistTodo = styled.div(( {done}: ContainerProps ) => (
    `
    width: 100%;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #D1D2D6;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
        display: ${done ? 'none' : 'flex'};
        visibility:${done ? 'hidden' : 'normal'}
    `
))

export const WrapperTodolistDone = styled.div(( {done}: ContainerProps ) => (
    `
    width: 100%;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #D1D2D6;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
        text-decoration: ${done ? 'line-through' : 'none'};
        opacity: ${done ? '0.5' : '1'};
        display: ${done ? 'flex' : 'none'};
        visibility:${done ? 'flex' : 'none'}
    `
))
