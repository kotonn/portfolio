import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardMedia } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function ProfileDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id='Profile'>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          color='inherit'
          sx={{ width: '75%' }}
          fullWidth
          onClick={handleClickOpen}
        >
          Profile
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}
        >
          <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
            Profile
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <CardMedia
              component='img'
              height='140'
              image='profile.jpg'
              alt='green iguana'
              sx={{ mb: 3 }}
            />
            <Typography gutterBottom>◇自己紹介</Typography>
            <Typography gutterBottom>氏名: 宮本和輝　(みやもとかずき)</Typography>
            <Typography gutterBottom>出身: 大阪</Typography>
            <Typography gutterBottom>大学: 関西学院大学</Typography>
            <Typography gutterBottom>学部: 国際学部</Typography>
            <Typography gutterBottom>卒業年度: 2025年 3月</Typography>
            <br />
            <br />
            <Typography gutterBottom>◇経歴</Typography>
            <Typography gutterBottom>
              ・ 2021年4月 関西学院大学国際学部
              <br />
              ・ 2021年8月 学生起業論修了
              <br />
              ・ 2021年9月 STARTUP ACADEMY
              <br />
              ・ 2022年4月 Tech.Uni入会
              <br />
              ・ 2022年10月 CS50入校
              <br />
              ・ 2022年10月 アイクラフト株式会社
              <br />
            </Typography>
            <br />
            <Typography gutterBottom>◇スキル</Typography>
            <Typography gutterBottom>
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
          </DialogContent>
        </BootstrapDialog>
      </Box>
    </div>
  );
}
