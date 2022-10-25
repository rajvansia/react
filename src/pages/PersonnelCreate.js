import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CardName from './CardName'
import PersonnelInfo from './PersonnelInfo'
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
<Box
sx={{
  backgroundColor: 'background.default',
  minHeight: '100%',
  py: 3
}}
>
<Container maxWidth={false}>
  <Grid
    container
    spacing={3}
  >
    <Grid
      item
      lg={6}
      sm={12}
      xl={6}
      xs={24}
    >
            <CardName />

    </Grid>

    <Grid
        item
        lg={6}
        sm={12}
        xl={6}
        xs={24}
      >
            <CardName />
    </Grid>
    <Grid
      item
      lg={6}
      md={8}
      xl={6}
      xs={8}
    >
       <Card style={{backgroundColor: "black", paddingBottom:30}} >
      <CardContent >
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          Organization Group
        </Typography>
        </CardContent>

      <PersonnelInfo />
 
      </Card>
    </Grid>
    <Grid
      item
      lg={6}
      md={8}
      xl={6}
      xs={8}
    >
       <Card style={{backgroundColor: "black", paddingBottom:30}} >
      <CardContent >
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          Project Name
        </Typography>
        </CardContent>

      <PersonnelInfo />

      </Card>
    </Grid>
  </Grid>
  <Button variant="contained">
        Create User
      </Button>
      <Button>
        Cancel
      </Button>
</Container>
</Box>
  );
}


