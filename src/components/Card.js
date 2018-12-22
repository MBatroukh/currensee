import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const CollectionCard = (props) => (
    <CardWrapper>
        <Card>
            <CardActionArea>
                <CardMedia
                    className="collectionImg"
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {!props.addCollection ?
                    <>
                        <Link to={`/groups/${props.id}`}>
                            <Button size="small" color="primary">
                                View Collection
                            </Button>
                        </Link>
                        <Button size="small" color="primary" onClick={() => props.deleteCollection(props.id)}>
                            Remove Collection
                        </Button>
                    </>
                    :
                    <Button size="small" color="primary" onClick={props.handleModalOpen}>
                        Create New Collection
                    </Button>
                }
            </CardActions>
        </Card>
    </CardWrapper >
)

const CardWrapper = styled.div`
    .collectionImg{
            height: 145px;
}
`;


export default CollectionCard