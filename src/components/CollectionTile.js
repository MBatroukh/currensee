import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const CollectionTile = (props) => (
    <CardWrapper>
        <div className="imgWrap">
            <img src="/images/collection-fallback.jpg" alt="Pile of coins" />
        </div>
        <h2>{props.title}</h2>
        {props.description && <p>{props.description}</p>}
        <div className="buttonRow">
            {!props.addCollection ?
                <>
                    <Link to={`/groups/${props.id}`}>
                        <button size="small" color="primary">
                            View Collection
                        </button>
                    </Link>
                    <button size="small" color="primary" onClick={() => props.deleteCollection(props.id)}>
                        Remove Collection
                    </button>
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
    flex-direction: column;
    border: solid 1px black;
    border-radius: 4px;
    width: 100%;
    max-width: 23.5%;
    margin-right: 1.5%
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
        position: relative;
        padding-left: 10px; 
        margin-top: -42px;
        margin-bottom: 10px;
        color: #ffffff;
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
    }
`;


export default CollectionTile