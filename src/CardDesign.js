import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import {
    Box,
} from '@mui/material';
import Rating from '@mui/material/Rating';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        marginRight: "30px",
        marginTop: "19px",
    },
}));


export default function CardDesign(props) {
    console.log(props.childToParent);
    const [rating, setRating] = React.useState(props.ratings);
    const [cartItem, setCartItem] = React.useState({cartItem:true});
    
    const childToParentFn = (data) => {        
        setCartItem(data); 
        props.childToParent(data);      
    }

    return (
        <Box sx={{ display: "inline-block", margin: "15px" }}>
            <Card container ="true" sx={{ maxWidth: 350, margin: "0 auto", display: "inline-block", }} spacing={2}>

                <Stack>
                    {
                        props.badge == true
                        ?
                        <StyledBadge badgeContent={"Sale"} color="secondary"></StyledBadge>
                        :
                        <></>
                    }

                    <CardMedia
                        component="img"
                        height="194"
                        image="../dummy.jpg"
                        alt="Paella dish"
                    />
                </Stack>

                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        {props.title}
                    </Typography>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {props.price}
                    </Typography>

                </CardContent>
                <CardActions disableSpacing>
                    {                        
                    cartItem.cartItem
                    ? 
                    <Button variant="outlined" sx={{ margin: "0 auto" }} onClick={(e)=>{childToParentFn({cartItem : false,count:1})}}>Add to cart</Button>
                    :
                    <Button variant="outlined" sx={{ margin: "0 auto" }} onClick={(e)=>{childToParentFn({cartItem : true,count:1})}}>Remove to cart</Button>                    
                    }                    
                </CardActions>                 
            </Card>
        </Box>
    );
}

