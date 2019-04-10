import React from 'react';
import styled from "styled-components";

const Button = props => {

    const {text, onClick} = props;

    return (
        <ButtonWrapper>
            <button onClick={onClick} >
                {text}
            </button>
        </ButtonWrapper>  
    )
}

const ButtonWrapper = styled.div`
    button{
        border: none;
        border-radius: 4px;
        background: #2f89fc;
        padding: 5px 15px;
        color: #fff;
        cursor: pointer;
        transition: all 0.2s;
        &:hover{
            transition: all 0.2s;
            background: #167bfc;
        }
    }
`;

export {Button};