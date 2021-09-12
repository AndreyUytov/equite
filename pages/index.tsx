import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image'

import Box from '@mui/system/Box';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import logo from '../src/images/logo.png';
import pic1 from '../src/images/1.png';
import pic2 from '../src/images/2.png';



const GlobalGreed = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  marginBottom: theme.spacing(8),

  '@media(min-width: 805px)': {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),

    gridTemplateColumns: 'repeat(14, 1fr)',
    gridColumnGap: theme.spacing(0),
    alignItems: 'center',
    marginBottom: theme.spacing(5),
  },
  '@media(min-width: 1200px)': {
    gridColumnGap: theme.spacing(3),
    marginBottom: theme.spacing(15),
  }
}));


const AdventageItem = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  display: 'grid',
  gridRowGap: theme.spacing(1),
  gridTemplateRows: '1fr auto',
  gridTemplateAreas: `"picture"
  "info"`,
  alignItems: 'center',
  justifyItems: 'center',

  '@media(min-width: 805px)': {
    gridColumn: '2 / -1',
  
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),

    gridColumnGap: theme.spacing(0),
    gridRowGap: theme.spacing(0),
    gridTemplateColumns: '6fr 1fr 6fr',
    gridTemplateAreas: `'info . picture'`,
    alignItems: 'center',
    ":nth-child(even)": {
      gridColumn: '1 / -2',
      gridTemplateAreas: `'picture . info'`,
      '>:last-child': {
        justifySelf: 'start',
      },
    }
  },

  '@media(min-width: 1200px)': {
    gridColumnGap: theme.spacing(3),
  },
  
}));

const AdventagePicture = styled(Box)(({ theme }) => ({
  gridArea: 'picture',
  '@media(min-width: 805px)': {
    justifySelf: 'end',
  }
}));

const AdventageInfo = styled(Box)(({ theme }) => ({
  gridArea: 'info',
}));

const AdventageInfoBlock = ({children, caption, description}) => {
  return (
    <AdventageInfo>
      <Typography variant='h4' sx={{ marginBottom: 4,fontWeight:600}}>
          {caption}
      </Typography>
      <Typography sx={{marginBottom: 3}}>
        {description}
      </Typography>
      {children}
    </AdventageInfo>
  )
}

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
  }
}));

const NavigationLink = ({children, href}) => {
 const router = useRouter();
 const weight = router.asPath === href ? 600 : 'normal';

  return (
    <Link href={href}>
      <CustomLink sx={{fontWeight: weight}}>
        {children}
      </CustomLink>
    </Link>
  )
}

const NavigationList = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  '@media(min-width: 805px)': {
    gridColumn: '2 / 8',
  }
}));

const UserBlockWrapper = styled('div')(({ theme }) => ({
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
  }
}));

const UserBlock = ({children}) => {
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
        sx={{'@media(min-width:805px)': {
          display:'none',
        }}}
        size="large"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        sx={{'@media(min-width:805px)': {
          display:'none',
        }}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {children.map((el)=> {
          return (
            <MenuItem onClick={handleClose}>{el}</MenuItem>
          )
        })}
      </Menu>

      <Box sx={{display: 'none', '@media(min-width:805px)': {
          display:'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}}>
        {children}
      </Box>

    </UserBlockWrapper>
  )
}

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <GlobalGreed sx={{marginTop: 5, gridTemplateColumns: '1fr auto',}}>
        <NavigationList>
           <Box sx={{ flexShrink: 2, marginRight: 1, '@media(min-width:805px)': {marginRight: 7}}}>
            <Image src={logo} alt="logo" />
           </Box>
           <NavigationLink href='/'>
                Главная
              </NavigationLink>
              <NavigationLink href='/blog'>
                Блог
              </NavigationLink>
              <NavigationLink href='/rating'>
                Рейтинг
              </NavigationLink>
        </NavigationList>

        <UserBlock>
          <NavigationLink href='/PRO'>
              PRO
            </NavigationLink>
            <NavigationLink href='/en'>
              EN
            </NavigationLink>
            <NavigationLink href='/login'>
              Войти
            </NavigationLink>
            <Button variant="outlined" color="secondary" sx={{textTransform: 'capitalize', borderRadius: '5px'}}>
              Зарегестрироваться
            </Button>
        </UserBlock>
      </GlobalGreed>

      <GlobalGreed>
        <AdventageItem>
          <AdventageInfoBlock caption="Иструмент мониторинга    для трейдера, которому доверяют" description="Создайте портфолио со своими фактическими успехами  — повысьте доверие у заинтересованных людей.">
            <Button variant="contained" sx={{textTransform: 'none', borderRadius: '6px', boxShadow: '0px 0px 15px rgba(41, 54, 125, 0.3)', p: '14px 32px',}}>
              Начать работу
            </Button>
          </AdventageInfoBlock>
          <AdventagePicture>
            <Image src={pic1} width={576} height={646} alt="bitcoin" />
          </AdventagePicture>
        </AdventageItem>

        <AdventageItem>
          <AdventageInfoBlock caption="Проверенные результаты" description="Объективные и сухие цифры подойдут не только для мониторинга своих результатов, но и для того, чтобы вызвать доверие у инвесторов или своей публики.">
          </AdventageInfoBlock>

          <AdventagePicture>
            <Image src={pic2}  width={576} height={554} alt="bitcoin" />
          </AdventagePicture>
        </AdventageItem>
      </GlobalGreed>
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Home.propTypes = {};

export default Home;
