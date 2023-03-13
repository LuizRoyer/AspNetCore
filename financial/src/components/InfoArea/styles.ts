import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -70px;
    display: flex;
    align-items: center;
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const MonthArrow = styled.div`
    width: 30px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
`

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`

export const ResumeArea = styled.div`
    flex:2;
    display: flex;
`

export const ResumeItem = styled.div<{ color: string }>`
    flex:1;
    display: flex;
    font-weight: bold;
    text-align: center;
    margin-left: 20px;
    font-size: 20px;
    color: ${props => props.color}
`
