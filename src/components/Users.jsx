import React from 'react'
import styled from 'styled-components';
import allColors from '../theme/colors';

const StyledDiv = styled.div`
    border: 2px solid ${allColors.greyColor}
`

const StyledButton = styled.button`
    background-color: ${({theme}) => theme.blueColor};
    color: ${({theme}) => theme.fontColor};

    &:hover {

    }
`

const Users = () => {
    return (
        <>
            <StyledDiv>
                <h1>Users</h1>
                <StyledButton> Generar usuario</StyledButton>
            </StyledDiv>
        </>
        
    )
}

export default Users
