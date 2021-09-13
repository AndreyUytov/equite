import React from 'react';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/system/Box';

const CustomLink = styled('a')(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: 'text.primary',
  textDecoration: 'none',
  cursor: 'pointer',
  '@media(min-width: 805px)': {
    marginRight: theme.spacing(2),
  },
  '@media(min-width: 1200px)': {
    marginRight: theme.spacing(4),
  },
}));

const NavigationLink = ({ children, href }) => {
  const router = useRouter();
  const weight = router.asPath === href ? 600 : 'normal';

  return (
    <Link href={href}>
      <CustomLink sx={{ fontWeight: weight }}>{children}</CustomLink>
    </Link>
  );
};

const NavigationList = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  '@media(min-width: 805px)': {
    gridColumn: '2 / 8',
  },
}));

const UserBlockWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  overflow: 'hidden',
  '@media(min-width: 805px)': {
    gridColumn: '8 / -2',
    justifySelf: 'end',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

const UserBlock = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <UserBlockWrapper>
      <IconButton
        sx={{
          '@media(min-width:805px)': {
            display: 'none',
          },
        }}
        size="large"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        sx={{
          '@media(min-width:805px)': {
            display: 'none',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {children.map((el, i) => (
          <MenuItem key={i} onClick={handleClose}>
            {el}
          </MenuItem>
        ))}
      </Menu>

      <Box
        sx={{
          display: 'none',
          '@media(min-width:805px)': {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-end',
          },
        }}
      >
        {children}
      </Box>
    </UserBlockWrapper>
  );
};

export { NavigationList, NavigationLink, UserBlock };
