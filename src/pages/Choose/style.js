import styled from "styled-components";

export const Container = styled.div`
    width: 1440px;
    height: 1024px;
    margin: 0;
    background: ${ props => {
        if(props.isDark !== null){
            return props.isDark ? '#2A2A2A' : '#FBFE63';
        } else {
            return '#FFF';
        }
    }};
`;

export const ButtonBack = styled.button`
    cursor: pointer;

    position: absolute;
    width: 109px;
    height: 47px;
    margin-left: 40px;
    margin-top: 35px;

    border: 0;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    background-color: transparent;
    color: ${ props => {
        if(props.isDark !== null){
            return props.isDark ? '#FFF' : '#2A2A2A'
        } else {
            return '#2A2A2A'
        }
    }};

    svg {
        height: ${ props => props.size};
        width: ${ props => props.size };
        color: ${ props => props.isDark ? '#FFF' : '#2A2A2A'};
    }
`;

export const ButtonChoose = styled.button `
    position: absolute;
    width: 347px;
    height: 56px;
    margin-left: 546px;
    margin-top: 175px;
    font-size: 18px;

    font-family: 'proxima-nova', sans-serif;

    border-radius: 10px;
    border: 0;
    cursor: pointer;

    cursor: ${ props => props.isLoading && 'wait' };

    color: ${ props => {
        if(props.isDark !== null){
            return props => props.isDark ? '#2A2A2A' : '#FBFE63';
        } else {
            return '#FFF';
        }
    }};

    background: ${ props => props.isDark ? '#FFF' : '#2A2A2A'};

    :disabled {
        opacity: 0.5;
    }
`;

export const Image = styled.div`
    position: absolute;
    width: 380px;
    height: 380px;
    left: 530px;
    top: 322px;
    background: #C4C4C4;
    border-radius: 50%;
    
    background: url(${props => props.src});
`;

export const ChoosedMaster = styled.div`
    position: absolute;
    width: 647px;
    height: 103px;
    left: 396px;
    top: 720px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: ${ props => props.isDark ? '#FFF' : '#2A2A2A'};
`;