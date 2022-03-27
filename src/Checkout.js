import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
    Box,
} from '@mui/material';

export default function Checkout(){
    return(
        <Box sx={{ display: "inline-block", margin: "15px" }}>
            <Card container ="true" sx={{ maxWidth: 350, margin: "0 auto", display: "inline-block", }} spacing={2}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Item Name: Pro
                    </Typography>
                   
                    <Typography variant="body2" color="text.secondary">
                        Amount: 40 $ 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        GST: 18.00
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>                     
                <Typography variant="body2" color="text.secondary">
                        Total Amount: 58.00 $
                    </Typography>
                </CardActions>                 
            </Card>
        </Box>
    );
}