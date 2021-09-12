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
  marginBottom: 0,

  display: 'grid',
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
}));

const AdventagePicture = styled(Box)(({ theme }) => ({
  gridArea: 'picture',
  justifySelf: 'end'
}));

const AdventageInfo = styled(Box)(({ theme }) => ({
  gridArea: 'info',
}));

const AdventageInfoBlock = ({children, caption, description}) => {
  return (
    <AdventageInfo>
      <Typography variant='h3' sx={{ marginBottom: 4,fontWeight:600}}>
          Иструмент мониторинга для трейдера, которому доверяют
      </Typography>
      <Typography sx={{marginBottom: 3}}>
        Создайте портфолио со своими фактическими успехами  — 
        повысьте доверие у заинтересованных людей.
      </Typography>
      {children}
    </AdventageInfo>
  )
}



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
