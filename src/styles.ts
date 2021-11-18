import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const Container = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Titlte = styled.h1`
    font-size: 26px;
    color: #fff;
`

export const Form = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    margin-top: 5px;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    padding: 5px 10px;
`

export const Button = styled.button`
    width: 120px;
    height: 35px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 6px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    cursor: pointer;
    background: #dfdfdf;
    transition: background 0.3s ease;

    &:hover {
        background: #c6c6c6;
        transition: background 0.3s ease;
    }
`

export const IconSearch = styled(Search)`
    width: 15px;
    height: 15px;
    fill: #1a1a1a;
`

export const ListRepositories = styled.div`
    width: 100%;
    height: 500px;
    margin-top: 30px;
    border-radius: 6px;
    background: #fff;
    display: flex;
    overflow-y: auto;

    > ul {
        width: 100%;
        padding: 0;
        margin: 0;

        > a {
            width: 100%;
            text-decoration: none;
            color: #000;

            > li {
                padding: 15px 20px;
                list-style: none;
                cursor: pointer;
                transition: background 0.2s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
    
                &:hover {
                    background: #dfdfdf;
                    transition: background 0.2s ease;
                }
            }
        }

    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #d486d4;
        border-radius: 4px;
    }

`

export const TotalRepositories = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 20px 20px 0;
    background: gray;
    color: white;
    border-radius: 4px;
    font-size: 12px;
    padding: 4px 10px;
`

export const IconGithub = styled(Github)`
   width: 50px;
   height: 50px;
   color: #fff;
   padding-right: 5px;
`