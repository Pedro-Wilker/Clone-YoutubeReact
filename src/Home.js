import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ClippedDrawer from "./ClippedDrawer";
import { fontGrid } from "@mui/material/styles/cssUtils";
import { Icon } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import RestoreIcon from '@mui/icons-material/Restore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const theme = createTheme({
    typography: {
        fontSize: 13,
    },
});

const drawerWidth = 240;

function Home() {

    return (
        <div>
            <Box sx={{ flexGrow: 2 }}></Box>
            <AppBar color='inherit' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="/images/preto.png" alt="logo" height="27px" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <MicIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <AppsIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Button href="/" startIcon={<AccountCircleIcon />} variant='outlined' color="secondary"> Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Inicio'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <HomeIcon />{/* , 'Em alta', 'Explorar', 'Inscrições' :<TrendingUpIcon />:<MoreVertIcon />:<ExploreIcon/> */}
                                </ListItemIcon>
                                <ListItemText theme={theme} primary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                        <List>
                            {['Em alta'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        <TrendingUpIcon />
                                    </ListItemIcon>
                                    <ListItemText theme={theme} primary={text} />
                                    <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                </ListItem>
                            ))}
                            <List>
                                {['Explorar'].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                            <ExploreIcon />{/* , 'Inscrições'<MoreVertIcon /> */}
                                        </ListItemIcon>
                                        <ListItemText theme={theme} primary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                                <List>
                                    {['Inscrições'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>
                                                <SubscriptionsIcon />
                                            </ListItemIcon>
                                            <ListItemText theme={theme} primary={text} />
                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </List>
                        </List>
                    </List>
                    <Divider />
                    <List>
                        {['Biblioteca'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                                <ListItemText theme={theme} primary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                        <List>
                            {['Historico'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon><RestoreIcon /></ListItemIcon>
                                    <ListItemText theme={theme} primary={text} />
                                    <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                </ListItem>
                            ))}
                        </List>
                    </List>
                    <Divider />
                    <List >
                        {['Faça login para curtir vídeos,' +
                            'comentar e se inscrever'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemText theme={theme} secondary={text} />
                                    <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                </ListItem>
                            ))}
                    </List>
                    <Button href="/" startIcon={<AccountCircleIcon />} variant='outlined' color="secondary"> Fazer Login</Button>
                    <Divider />
                    <List >
                        {['O MELHOR DO YOUTUBE'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} secondary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List >
                        {['Procurar canais'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} secondary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                        <List >
                            {['Procurar canais'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemText theme={theme} secondary={text} />
                                    <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                </ListItem>
                            ))}
                            <List >
                                {['Procurar canais'].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemText theme={theme} secondary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                                <List >
                                    {['Procurar canais'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemText theme={theme} secondary={text} />
                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                        </ListItem>
                                    ))}
                                    <List >
                                        {['Procurar canais'].map((text, index) => (
                                            <ListItem button key={text}>
                                                <ListItemText theme={theme} secondary={text} />
                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                            </ListItem>
                                        ))}
                                        <List >
                                            {['Procurar canais'].map((text, index) => (
                                                <ListItem button key={text}>
                                                    <ListItemText theme={theme} secondary={text} />
                                                    <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                </ListItem>
                                            ))}
                                            <List >
                                                {['Procurar canais'].map((text, index) => (
                                                    <ListItem button key={text}>
                                                        <ListItemText theme={theme} secondary={text} />
                                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                    </ListItem>
                                                ))}
                                                <List >
                                                    {['Procurar canais'].map((text, index) => (
                                                        <ListItem button key={text}>
                                                            <ListItemText theme={theme} secondary={text} />
                                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                        </ListItem>
                                                    ))}
                                                    <List >
                                                        {['Procurar canais'].map((text, index) => (
                                                            <ListItem button key={text}>
                                                                <ListItemText theme={theme} secondary={text} />
                                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </List>
                                            </List>
                                        </List>
                                    </List>
                                </List>
                            </List>
                        </List>
                    </List>
                    <Divider />
                    <List >
                        {['Mais do Youtube'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} primary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                    </List>
                    <List >
                        {['Procurar canais'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} secondary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List >
                        {['Mais do Youtube'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} secondary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                    </List>
                    <List >
                        {['Mais do Youtube'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} secondary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                    </List>
                    <List >
                        {['Mais do Youtube'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} secondary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                    </List>
                    <List >
                        {['Mais do Youtube'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText theme={theme} secondary={text} />
                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <div>
                        <List >
                            {['SobreImprensaDireitos autoraisEntre em contatoCriadores de conteúdoPublicidadeDesenvolvedores' +
                                'TermosPrivacidadePolítica e segurançaComo funciona o YouTubeTestar os novos recursos' +
                                '© 2022 Google LLC '].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemText theme={theme} secondary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                        </List>
                    </div>
                </Box>
            </Drawer>
        </div>
    )
}

export default Home;