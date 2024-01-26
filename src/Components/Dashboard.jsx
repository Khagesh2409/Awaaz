import React from "react";
import '../CSS/Dashboard.css';
import Chart from "./Chart";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BarAnimation from "./BarAnimation";
import Img1 from "../Assets/Ellipse 3.png";
import Img2 from "../Assets/Ellipse 3 (1).png";
import Img3 from "../Assets/Ellipse 3 (2).png";
import Img4 from "../Assets/Ellipse 3 (3).png";
import Img5 from "../Assets/Ellipse 3 (4).png";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }} style={{ backgroundColor: '#161B21' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: '#161B21' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '75rem' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" label="Search" variant="filled" InputLabelProps={{
                            style: { color: 'white' }
                        }} />

                    </Box>
                    <div style={{ backgroundColor: 'blue', padding: '10px', borderRadius: '50%', marginLeft: '40px' }}>
                        KS
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style={{ display: 'flex', color: 'white', textAlign: 'left' }}>
                    <p>AWAAZ</p>
                    <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <div>
                    <div className='logmid' style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', borderRadius: '10px', height: "50px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                            </svg><Link to="/" className='Navcontent' style={{ textDecoration: "none", color: "white", paddingLeft: "20px" }}>Home</Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', marginTop: '20px', borderRadius: '10px', height: "50px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                            </svg><Link to="/learnings" className='Navcontent' style={{ textDecoration: "none", color: "white", paddingLeft: "20px" }}>Learning</Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', marginTop: '20px', borderRadius: '10px', height: "50px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                                <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3" />
                            </svg><Link to="/dashboard" className='Navcontent' style={{ textDecoration: "none", color: "white", paddingLeft: "20px" }}>Dashboard</Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', marginTop: '20px', borderRadius: '10px', height: "50px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg><Link to="/about" className='Navcontent' style={{ textDecoration: "none", color: "white", paddingLeft: "20px" }} >About</Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', marginTop: '20px', borderRadius: '10px', height: "50px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                            </svg><Link to="/about" className='Navcontent' style={{ textDecoration: "none", color: "white", paddingLeft: "20px" }} >Sign Out</Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', marginLeft: '10px' }}>
                            <div style={{ backgroundColor: 'blue', padding: '7px', borderRadius: '50%', width: 'fit-content', fontSize: '20px' }}>
                                KS
                            </div>
                            <div style={{ fontSize: '20px' }}>@khageshsharma</div>
                        </div>
                    </div>
                </div>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    <div className="dashboard">
                        <div className="leaderboard grid-item" style={{ marginTop: '0', paddingTop: '0' }}>
                            <div>
                                <p style={{ textAlign: 'left', letterSpacing: '3px', paddingLeft: '10px' }}>LEADERBOARD</p>
                                <p style={{ display: 'flex', justifyContent: 'space-between', color: 'gray', paddingLeft: '15px' }}>Name <span style={{ textAlign: 'center', paddingLeft: '85px' }}>Score</span><span style={{ textAlign: 'right', paddingRight: '20px' }}>Status</span></p>

                            </div>
                            <div className="entries" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img1} alt="Img1" /> Maxima Smalls</span> <span style={{ paddingLeft: '15px' }}>XXX</span> <span style={{ backgroundColor: '#90EE90', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>Completed</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img2} alt="Img1" /> Andrew Robocop </span> <span>XXX</span> <span style={{ backgroundColor: 'yellow', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>In progress</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img3} alt="Img1" /> Miru Xander </span> <span style={{ paddingLeft: '33px' }}>XXX</span> <span style={{ backgroundColor: '#90EE90', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>Completed</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img4} alt="Img1" /> Lau Baker</span> <span style={{ paddingLeft: '49px' }}>XXX</span> <span style={{ backgroundColor: 'yellow', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>In progress</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img5} alt="Img1" /> Ragnar Walls</span> <span style={{ paddingLeft: '23px' }}>XXX</span> <span style={{ backgroundColor: 'yellow', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>In progress</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img5} alt="Img1" /> Ragnar Walls</span> <span style={{ paddingLeft: '23px' }}>XXX</span> <span style={{ backgroundColor: 'yellow', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>In progress</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img1} alt="Img1" /> Maxima Smalls</span> <span style={{ paddingLeft: '15px' }}>XXX</span> <span style={{ backgroundColor: '#90EE90', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>Completed</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={Img1} alt="Img1" /> Maxima Smalls</span> <span style={{ paddingLeft: '15px' }}>XXX</span> <span style={{ backgroundColor: '#90EE90', borderRadius: '10px', color: 'black', padding: '5px', marginBottom: '5px' }}>Completed</span>
                                </div>
                            </div>
                        </div>
                        <Grid className="weeklyProgress" item xs={12} md={8} lg={9} style={{ height: 'fit-content' }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 351,
                                    borderRadius: '12px',
                                    backgroundColor: '#1D232C',
                                    textAlign: 'center'
                                }}
                            >
                                <Chart />
                            </Paper>
                        </Grid>
                        <div className="successRate grid-item">
                            <BarAnimation />
                        </div>
                    </div>
                </Typography>
            </Main>
        </Box>
    );
}
