import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {
    Box,
} from '@mui/material';

export default function Checkout(props) {
    console.log(props.cartList);
    let totalAmt = 0;
    const listItems = props.cartList.map((data) => {
        totalAmt+=Number(data.price.match(/\d+/g)[0]);
        return (
            <>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                    Item Name: {data.itemName}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Amount: {data.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    GST: 18.00
                </Typography>
            </>
        );
    })
    return (
        <Box sx={{ display: "inline-block", margin: "15px" }}>
            <Card container="true" sx={{ maxWidth: 350, margin: "0 auto", display: "inline-block", }} spacing={2}>
                <CardContent>
                    {listItems}
                </CardContent>
                <CardActions disableSpacing>
                    <Typography variant="body2" color="text.secondary">
                        Total Amount: {totalAmt}
                    </Typography>
                </CardActions>
            </Card>
        </Box>
    );
}