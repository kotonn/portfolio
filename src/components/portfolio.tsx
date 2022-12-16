/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <div id='Work'>
      <ImageList sx={{ width: '100%', height: 'auto' }}>
        <ImageListItem key='Subheader' cols={2}>
          <ListSubheader component='div'>Work</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'test.jpg',
    title: '1',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'test.jpg',
    title: '2',
  },
  {
    img: 'test.jpg',
    title: '3',
  },
  {
    img: 'test.jpg',
    title: '4',
    cols: 2,
  },
  {
    img: 'test.jpg',
    title: '5',
    cols: 2,
  },
  {
    img: 'test.jpg',
    title: '6',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'test.jpg',
    title: '7',
  },
  {
    img: 'test.jpg',
    title: '8',
  },
  {
    img: 'test.jpg',
    title: '9',
    rows: 2,
    cols: 2,
  },
  {
    img: 'test.jpg',
    title: '10',
  },
];
