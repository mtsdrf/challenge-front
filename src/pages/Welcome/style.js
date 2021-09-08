import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 1440px;
    height: 1024px;
    margin: 0;
    margin-left: 240px;
    background: #FFF;
`;

export const Title = styled.span`

    position: absolute;
    width: 688px;
    height: 88px;
    margin-left: 364px;
    margin-top: 210px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 88px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #2C97D1;

    label {
        font-weight: 700;
    }
`;

export const Subtitle = styled.h3`
    position: absolute;
    width: 264px;
    height: 17px;
    margin-left: 591px;
    margin-top: 305px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.35em;

    color: #2C97D1;
`;

export const ButtonStart = styled.button`
    cursor: pointer;
    position: absolute;
    width: 177px;
    height: 54px;
    margin-left: 625px;
    margin-top: 484px;

    background: #2C97D1;
    border: 0px;
    border-radius: 10px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.35em;
    box-sizing : content-box;
    
    color: #FFFFFF;
`;