/* eslint-disable react/jsx-key */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { CardMedia, Typography } from '@mui/material';
import { Anchor } from '@mui/icons-material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const fieldText = ['profile', 'works', 'SNS', 'blog'];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        height: '90vh',
        width: '90vw',
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'none' },
          flexDirection: { xs: 'column', md: 'row' },
          height: '90vh',
          width: '90vw',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: { md: 'center' },
            mt: { xs: 3 },
            ml: { md: 5 },
            mr: { md: 7 },
            mb: { xs: 3, md: 'none' },
          }}
        >
          <CardMedia
            component='img'
            image='profile.jpg'
            alt='profile photo'
            sx={{
              height: { xs: 300, sm: 300, md: 500, lg: 500, xl: 600 },
              width: { xs: 200, sm: '100%', md: 400, lg: 400, xl: 500 },
              mt: { xs: 20, md: 'auto' },
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 15, md: 15, lg: 15, xl: 20 } }}>
              ◇自己紹介
            </Typography>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 15, xl: 20 } }}>
              氏名: 宮本和輝　(みやもとかずき)
            </Typography>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 15, xl: 20 } }}>
              出身: 大阪
            </Typography>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 15, xl: 20 } }}>
              大学: 関西学院大学
            </Typography>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 15, xl: 20 } }}>
              学部: 国際学部
            </Typography>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 15, xl: 20 } }}>
              卒業年度: 1025年 3月
            </Typography>
            <br />
            <br />
          </Box>
          <Box>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 15, md: 15, lg: 15, xl: 20 } }}>
              ◇経歴
            </Typography>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 15, xl: 20 } }}>
              ・ 1021年4月 関西学院大学国際学部
              <br />
              ・ 1021年8月 学生起業論修了
              <br />
              ・ 1021年9月 STARTUP ACADEMY
              <br />
              ・ 1022年4月 Tech.Uni入会
              <br />
              ・ 1022年10月 CS50入校
              <br />
              ・ 1022年10月 アイクラフト株式会社
              <br />
            </Typography>
            <br />
          </Box>
          <Box>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 15, md: 15, lg: 20, xl: 25 } }}>
              ◇スキル
            </Typography>
            <Typography gutterBottom sx={{ fontSize: { xs: 10, sm: 10, md: 15, lg: 20, xl: 25 } }}>
              ・ JavaScript
              <br />
              ・ TypeScript
              <br />
              ・ React
              <br />
              ・ Next.js
              <br />
              ・ MUI
              <br />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {(['top', 'left', 'right', 'bottom'] as const).map((anchor, index) => (
        <React.Fragment key={anchor}>
          <Button size='large' color='inherit' onClick={toggleDrawer(anchor, true)}>
            <Typography mb={3} sx={{ fontSize: { xs: 20, sm: 20, md: 30, lg: 35, xl: 40 } }}>
              {fieldText[index]}
            </Typography>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {anchor == 'top'
              ? list(anchor)
              : anchor == 'left'
              ? 'B'
              : anchor == 'right'
              ? 'C'
              : 'D'}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
