import styled from "styled-components";

export const Container = styled.div`
    position: relative;
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

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    .button-choose { order: 1; }
    .image { order: 2; }
    .choosed-master { order: 3; }

    @media only screen and (max-width: 800px) {
        .button-choose { order: 3; }
        .image { order: 1; }
        .choosed-master { order: 2; }
    }
`;

export const ButtonBack = styled.div`
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: start;
    padding-top: 35px;

    span {
        margin-left: 3%;
        cursor: pointer;
    
        position: relative;
        width: 109px;
        height: 100%;
    
        border: 0;
    
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
    
        background-color: transparent;
        color: ${ props => {
            if(props.isDark !== null){
                return props.isDark ? '#FFF' : '#2A2A2A'
            } else {
                return '#2A2A2A'
            }
        }};

        @media only screen and (max-width: 800px) {
            margin-left: 22%;
        }
    
        svg {
            vertical-align: middle;
            height: ${ props => props.size};
            width: ${ props => props.size };
            color: ${ props => props.isDark ? '#FFF' : '#2A2A2A'};
        }
    }
`;

export const ButtonChoose = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    margin-top: 59px;

    @media only screen and (max-width: 800px) {
        margin-top: 34px;
    }

    button {
        position: relative;
        width: 347px;
        height: 100%;
        
        font-size: 18px;
        font-family: 'proxima-nova', sans-serif;
    
        border-radius: 10px;
        border: 0;
        cursor: pointer;
    
        cursor: ${ props => props.isLoading && 'wait' };
        opacity: ${ props => props.isLoading && '0.5' };
    
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
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 380px;
    display: flex;
    justify-content: center;
    margin-top: 91px;

    @media only screen and (max-width: 800px) {
        height: 302px;
    }

    div {
        position: relative;
        width: 380px;
        height: 100%;
        background: #C4C4C4;
        border-radius: 50%;
        
        background: url(${props => props.src});

        @media only screen and (max-width: 800px) {
            width: 302px;
            background-size: cover;
        }
    }
`;

export const ChoosedMaster = styled.div`
    width: 100%;
    height: 103px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 19px;

    div {
        text-align: center;
        position: relative;
        width: 647px;
    
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 44px;
    
        color: ${ props => props.isDark ? '#FFF' : '#2A2A2A'};

        pre > b {
            @media only screen and (max-width: 800px) {
                display: block;
            }
        }
    }
`;