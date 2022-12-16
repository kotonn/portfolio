import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const handleTwitter = () => {
    window.open('https://twitter.com/miyamogram', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/kotonn', '_blank');
  };

  return (
    <div id='SNS'>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label='Twitter' icon={<TwitterIcon />} onClick={handleTwitter} />
          <BottomNavigationAction label='GitHub' icon={<GitHubIcon />} onClick={handleGitHub} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
