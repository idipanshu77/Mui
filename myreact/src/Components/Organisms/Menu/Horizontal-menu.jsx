import * as React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Build, ArrowDropDown, DragIndicator, ViewCarousel, AssignmentTurnedIn, Dashboard } from '@mui/icons-material/';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ my: "20px" }}>
                <Grid container sx={{ my: 1 }} >
                    <Grid item lg={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button color="inherit" startIcon={<Dashboard />} endIcon={<ArrowDropDown />} sx={{ textTransform: 'capitalize' }}>General</Button>
                            <Button color="inherit" startIcon={<DragIndicator />} endIcon={<ArrowDropDown />} sx={{ textTransform: 'capitalize' }}>Modules</Button>
                            <Button color="inherit" startIcon={<ViewCarousel />} endIcon={<ArrowDropDown />} sx={{ textTransform: 'capitalize' }}>Components</Button>
                            <Button color="inherit" startIcon={<Build />} endIcon={<ArrowDropDown />} sx={{ textTransform: 'capitalize' }}>Features</Button>
                            <Button color="inherit" startIcon={<AssignmentTurnedIn />} endIcon={<ArrowDropDown />} sx={{ textTransform: 'capitalize' }}>Applications</Button>
                            <Button color="inherit" startIcon={<AssignmentTurnedIn />} endIcon={<ArrowDropDown />} sx={{ textTransform: 'capitalize' }}>Extensions</Button>
                        </Typography>
                    </Grid>

                    <Grid item lg={4} sx={{ display: 'flex', justifyContent: "end" }}>
                        <Search sx={{ border: '1px solid #bdbdbd' }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment >
    );
}
