import React from "react";
import {
    AppBar, Toolbar, Typography, Button, IconButton, Box, ThemeProvider, createTheme, List, Drawer, ListItemIcon,
    ListItemText, ListItem, Divider, Grid, Hidden
} from '@mui/material';

import ClippedDrawer from "./ClippedDrawer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import RestoreIcon from '@mui/icons-material/Restore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GamesIcon from '@mui/icons-material/Games';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const theme = createTheme({
    typography: {
        fontSize: 9,
    },
});

const videos = [
    {
        id: 1,
        title:
            'Desmistificando a Internet das coisas ',
        channel: 'Pedro Wilker ✔',
        views: '11 mi de visualizações',
        date: 'há 2 anos',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'A revolução das inteligencias Artificiais',
        channel: 'Ciência Todo Dia ✔',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'UMA QUESTÃO SIMPLES QUE SOLA AS CALCULADORAS! 😂',
        channel: 'Matemática em Evidência ✔',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
            'Radar detector de objetos',
        channel: 'Pedro Wilker ✔',
        views: '5,6 mi de visualizações',
        date: 'há 1 ano',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'I am Still Standing - Remastered',
        channel: 'Elton John ✔',
        views: '30 mi de visualizações',
        date: 'há 12 anos',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title:
            'Desumilde no TFT',
        channel: 'Cabrito veloz ✔',
        views: '520 mil visualizações',
        date: 'há 2 meses',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'Casimiro reagindo a mansão de 8 milhões',
        channel: 'Meu objetivo de vidakk',
        views: '1 mi visualizações',
        date: 'há 4 semana',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'ELON MUSK ASSUSTA JOE ROGAN COM CONVERSA SOBRE INTELIGÊNCIA ARTIFICIAL ',
        channel: 'JOE ROGAN ✔',
        views: '1,9 mi de visualizações',
        date: 'há 1 mês',
        thumb: '/images/thumb8.png',
    },
];


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
            <Box display="flex">
                <Hidden mdDown>
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
                                {['Inicio'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText theme={theme} primary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                                <List>
                                    {['Explorar'].map((text) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>
                                                <ExploreIcon />
                                            </ListItemIcon>
                                            <ListItemText theme={theme} primary={text} />
                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                        </ListItem>
                                    ))}
                                    <List>
                                        {['Shorts'].map((text) => (
                                            <ListItem button key={text}>
                                                <ListItemIcon>
                                                    <SlowMotionVideoIcon />
                                                </ListItemIcon>
                                                <ListItemText theme={theme} primary={text} />
                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                            </ListItem>
                                        ))}
                                        <List>
                                            {['Inscrições'].map((text) => (
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
                                {['Biblioteca'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                                        <ListItemText theme={theme} primary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                                <List>
                                    {['Historico'].map((text) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon><RestoreIcon /></ListItemIcon>
                                            <ListItemText theme={theme} primary={text} />
                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </List>
                            <Divider />
                            <Box p={2}>
                                <List >
                                    {['Faça login para curtir vídeos, comentar e ' +
                                        'se inscrever'].map((text) => (
                                            <ListItem button key={text}>
                                                <ListItemText theme={theme} secondary={text} />
                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                            </ListItem>
                                        ))}
                                    <List>
                                        <Button href="/" startIcon={<AccountCircleIcon />} variant='outlined' color="secondary"> Fazer Login</Button>
                                    </List>
                                </List>
                            </Box>
                            <Divider />
                            <List >
                                {['O MELHOR DO YOUTUBE'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemText theme={theme} secondary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                                <List >
                                    {['Musicas'].map((text) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon><MusicNoteIcon /></ListItemIcon>
                                            <ListItemText theme={theme} secondary={text} />
                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                        </ListItem>
                                    ))}
                                    <List >
                                        {['Esportes'].map((text) => (
                                            <ListItem button key={text}>
                                                <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
                                                <ListItemText theme={theme} secondary={text} />
                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                            </ListItem>
                                        ))}
                                        <List >
                                            {['Jogos'].map((text) => (
                                                <ListItem button key={text}>
                                                    <ListItemIcon><GamesIcon /></ListItemIcon>
                                                    <ListItemText theme={theme} secondary={text} />
                                                    <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                </ListItem>
                                            ))}
                                            <List >
                                                {['Filmes'].map((text) => (
                                                    <ListItem button key={text}>
                                                        <ListItemIcon><MovieIcon /></ListItemIcon>
                                                        <ListItemText theme={theme} secondary={text} />
                                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                    </ListItem>
                                                ))}
                                                <List >
                                                    {['Notícias'].map((text) => (
                                                        <ListItem button key={text}>
                                                            <ListItemIcon><NewspaperIcon /></ListItemIcon>
                                                            <ListItemText theme={theme} secondary={text} />
                                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                        </ListItem>
                                                    ))}
                                                    <List >
                                                        {['Ao vivo'].map((text) => (
                                                            <ListItem button key={text}>
                                                                <ListItemIcon><OnlinePredictionIcon /></ListItemIcon>
                                                                <ListItemText theme={theme} secondary={text} />
                                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                                            </ListItem>
                                                        ))}
                                                        <List >
                                                            {['Aprender'].map((text) => (
                                                                <ListItem button key={text}>
                                                                    <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
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
                            <Divider />
                            <List >
                                {['Procurar canais'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon> <AddCircleOutlineIcon /></ListItemIcon>
                                        <ListItemText theme={theme} primary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                            </List >
                            <Divider />
                            <List >
                                {['Mais do Youtube'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemText theme={theme} primary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                                <List >
                                    {['Youtube Premium'].map((text) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon> <YouTubeIcon /></ListItemIcon>
                                            <ListItemText theme={theme} secondary={text} />
                                            <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                        </ListItem>
                                    ))}
                                    <List >
                                        {['Ao vivo'].map((text) => (
                                            <ListItem button key={text}>
                                                <ListItemIcon> <OnlinePredictionIcon /></ListItemIcon>
                                                <ListItemText theme={theme} secondary={text} />
                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </List>
                            </List>
                            <Divider />
                            <List >
                                {['Configurações'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                                        <ListItemText theme={theme} secondary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                            </List>
                            <List >
                                {['Histórico de denúncias'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon><FlagIcon /></ListItemIcon>
                                        <ListItemText theme={theme} secondary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                            </List>
                            <List >
                                {['Ajuda'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon><HelpIcon /></ListItemIcon>
                                        <ListItemText theme={theme} secondary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                            </List>
                            <List >
                                {['Enviar feedback'].map((text) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                                        <ListItemText theme={theme} secondary={text} />
                                        <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <div>
                                <List >
                                    {['Sobre essa pagina: ' + '\n ' +
                                        'Foi desenvolvida por ' +
                                        'Pedro Wilker. \n ' + ' Direitos autoriais: Youtube. @2022Reference: "Vai ter volta"'].map((text) => (
                                            <ListItem button key={text}>
                                                <ListItemText theme={theme} secondary={text} />
                                                <Typography theme={theme} variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                            </ListItem>
                                        ))}
                                </List>
                            </div>
                        </Box>
                    </Drawer>

                </Hidden>
                <Box p={2}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        <Divider />
                        <Divider />
                    </Typography>
                    <Grid container spacing={4}>
                        {videos.map((item, index) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box>
                                    <img
                                        style={{ width: '100%' }}
                                        alt={item.title}
                                        src={item.thumb}
                                    />
                                    <Box>
                                        <Typography
                                            style={{ fontWeight: 600 }}
                                            gutterBottom
                                            variant='body1'
                                            color='textPrimary'
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            display='block'
                                            variant='body2'
                                            color='textSecondary'
                                        >
                                            {item.channel}
                                        </Typography>
                                        <Typography variant='body2' color='textSecondary'>
                                            {`${item.views} • ${item.date}`}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home;