import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image'

import Box from '@mui/system/Box';
import Link from '@mui/material/Link';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';


import logo from '../src/images/logo.png';
import pic1 from '../src/images/1.png';
import pic2 from '../src/images/2.png';


const GlobalGreed = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(14, 1fr)',
  gridColumnGap: theme.spacing(3),
  alignItems: 'center',
  marginBottom: theme.spacing(15),
}));


const AdventageItem = styled(GlobalGreed)(({ theme }) => ({
  gridColumn: '2 / -1',

  display: 'grid',
  gridTemplateColumns: '6fr 1fr 6fr',
  gridTemplateAreas: `'info . picture'`,
  alignItems: 'center',
  ":nth-child(even)": {
    gridTemplateAreas: `'picture . info'`,
  }
}));


interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <GlobalGreed sx={{marginTop: 5}}>
        <Box sx={{gridColumn: '2 / 7', display: 'flex'}}>
           <Box sx={{marginRight: 7}}>
            <Image src={logo} alt="logo" />
           </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap',alignItems: 'center'}}>
              <Link href='/' underline="none" color="text.primary" sx={{marginRight: 4, fontWeight: 600}}>
                Главная
              </Link>
              <Link href='/blog' underline="none" color="text.primary" sx={{marginRight: 4}}>
                Блог
              </Link>
              <Link href='/rating' underline="none" color="text.primary" sx={{marginRight: 4}}>
                Рейтинг
              </Link>
            </Box>
        </Box>

        <Box sx={{gridColumn: '7 / -2', justifySelf: 'end'}}>
              <Box sx={{display: 'flex',  flexWrap: 'wrap', alignItems: 'center'}}>
                <Link href='/PRO' underline="none" color="text.primary" sx={{marginRight: 4}}>
                  PRO
                </Link>
                <Link href='/en' underline="none" color="text.secondary" sx={{marginRight: 4}}>
                  EN
                </Link>
                <Link href='/login' underline="none" color="text.primary" sx={{marginRight: 4}}>
                  Войти
                </Link>
                <Button variant="outlined" color="secondary" sx={{textTransform: 'capitalize', borderRadius: '5px'}}>
                  Зарегестрироваться
                </Button>
              </Box>
            </Box>
      </GlobalGreed>

      <GlobalGreed>
        <AdventageItem>
          <Box sx={{gridArea: 'info'}}>
            <Typography variant='h3'>
               Иструмент мониторинга для трейдера, которому доверяют
            </Typography>
            <Typography>
              Создайте портфолио со своими фактическими успехами  — 
              повысьте доверие у заинтересованных людей.
            </Typography>
            <Button>
              Начать работу
            </Button>
          </Box>

          <Box sx={{gridArea: 'picture'}}>
            <Image src={pic1} alt="bitcoin" />
          </Box>
        </AdventageItem>

        <AdventageItem>
          <Box sx={{gridArea: 'info'}}>
           ТЕКСТ
          </Box>

          <Box sx={{gridArea: 'picture'}}>
            <Image src={pic2} alt="bitcoin" />
          </Box>
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
