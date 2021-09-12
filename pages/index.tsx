import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image'

import Box from '@mui/system/Box';
import { Button } from '@mui/material';


import GlobalGreed from '../components/global-greed';
import {
  AdventageInfoBlock,
  AdventagePicture,
  AdventageItem
} from '../components/advantage';

import {
  NavigationList,
  NavigationLink,
  UserBlock,
} from '../components/header';

import logo from '../src/images/logo.png';
import pic1 from '../src/images/1.png';
import pic2 from '../src/images/2.png';



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
