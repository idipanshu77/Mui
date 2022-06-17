import * as React from 'react';
import { Button } from '@mui/material';



export default function CommonButton() {
    return (
        <Button variant="contained" disableElevation sx={{ mr: '10px' }}>
            Upgrade
        </Button>
    );
}

