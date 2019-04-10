import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {Button} from '../components';

const CollectionTile = (props) => (
    <CardWrapper>
        <div className="imgWrap">
            <img src="/images/collection-fallback.jpg" alt="Pile of coins" />
            <h2>{props.title}</h2>
        </div>
        {props.description ? <p>{props.description}</p> : <p><em>No description provided</em></p>}
        <div className="buttonRow">
            {!props.addCollection ?
                <>
                    <Link to={`/groups/${props.id}`}>
                        <Button text="View Collection" />
                    </Link>
                    <Button text="Remove Collection" onClick={() => props.deleteCollection(props.id)} />
                </>
                :
                <button size="small" color="primary" onClick={props.handleModalOpen}>
                    Create New Collection
                </button>
            }
        </div>
    </CardWrapper >
)

const CardWrapper = styled.div`
    display: flex;
    background: #f5f5f5;
    overflow: hidden;
    flex-direction: column;
    border: solid 1px #ccc;
    border-radius: 4px;
    width: 100%;
    max-width: 23.5%;
    margin-right: 1.5%;
    transition: all 0.2s;
    transform: scale(1);
    box-shadow: 0px 5px 10px 0px rgba(204,204,204,1);
    &:hover{
        transform: scale(1.01);
        transition: all 0.2s;
        box-shadow: 0px 10px 10px 0px rgba(204,204,204,1);
    }
    .imgWrap{
        max-height: 100px;
        overflow: hidden;
        position: relative;
        &:after{
            content: "";
            display: block;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
        img{
            width: 100%;
            height: auto;
        }
    }
    h2{
        position: absolute;
        padding-left: 10px; 
        margin: 0;
        color: #ffffff;
        bottom: 10px;
        z-index: 1;
    }
    p{
        padding: 0 10px;
        margin: 10px 0 12px 0;
    }
    .buttonRow{
        align-self: flex-end;
        border-top: solid 1px #cccccc;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px;
        flex-grow: 1;
        div, a{
            align-self: flex-end;
        }
    }
`;


export default CollectionTile