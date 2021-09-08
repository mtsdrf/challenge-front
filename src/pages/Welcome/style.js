import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    background: #FFF;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 88px;
    margin-top: 210px;
    
    span {
        position: relative;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        line-height: 88px;

        color: #2C97D1;

        label {
            font-weight: 700;
        }

        @media only screen and (max-width: 800px) {
            font-size: 36px;
        }
    }
`;

export const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 17px;
    margin-top: 7px;

    h3 {
        position: relative;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.35em;
        margin: 0;

        color: #2C97D1;

        @media only screen and (max-width: 800px) {
            font-size: 7px;
        }
    }
`;

export const ButtonStart = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 54px;
    margin-top: 167px;

    button {
        cursor: pointer;
        position: relative;
        width: 177px;
        height: 100%;
    
        background: #2C97D1;
        border: 0px;
        border-radius: 10px;
    
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
    
        letter-spacing: 0.35em;
        box-sizing : content-box;
        
        color: #FFFFFF;
    }
`;