import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const Container = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(min-width: 600px) {
        width: 500px;
    }
`

export const Titlte = styled.h1`
    font-size: 20px;
    margin: 0;
    color: purple;
    font-weight: bold;
    text-align: center;
`

export const Form = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    gap: 15px;
    margin-top: 5px;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    .alert-dismissible .btn-close {
        padding: 0.75rem 1rem!important;
    }

    .spinner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        align-items: center;
        justify-content: center;
        display: flex;
        border-radius: 6px;
    }
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

export const AvatarGithub = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;
    border: 4px solid #80008042;
`

export const ListRepositories = styled.div`
    width: 100%;
    height: 500px;
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
    top: 0;
    right: 0;
    margin: 28px 45px 0 0;
    background: gray;
    color: white;
    border-radius: 4px;
    font-size: 12px;
    padding: 4px 8px;
`

export const IconGithub = styled(Github)`
   width: 45px;
   height: 45px;
   color: purple;
   padding-right: 5px;
`