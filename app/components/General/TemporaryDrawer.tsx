import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';


type Anchor = 'left';

type TemporaryDrawerProperties = {
  state: any,
  setState: any,
  toggleDrawer: (anchor: Anchor, open: boolean) => void | any,
  children : React.ReactNode
}


export const TemporaryDrawer: React.FC<TemporaryDrawerProperties> = ({ state, children, toggleDrawer }: TemporaryDrawerProperties) => {


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "25vh", height: "75vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


      <Grid container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ height: "100vh" }}
      >

        <Grid item alignItems="left">
          <Stack direction="column" spacing={1.5}>
            {
              children
            }
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ width: "100vh" }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}