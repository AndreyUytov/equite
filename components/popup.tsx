import {
  Button,
  Dialog,
  DialogActions,
  Paper,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import Link from 'next/link';

export default function Popup({ openPopup, setOpenPopup }) {
  const handleClose = () => {
    setOpenPopup(false);
  };

  function GoogleIcon(props) {
    return (
      <SvgIcon {...props} width="30" height="30" viewBox="0 0 30 30">
        <path
          d="M7.03125 15C7.03125 13.5136 7.44076 12.1213 8.15221 10.9291V5.87195H3.0951C1.08797 8.47867 0 11.6556 0 15C0 18.3444 1.08797 21.5213 3.0951 24.128H8.15221V19.0709C7.44076 17.8787 7.03125 16.4863 7.03125 15V15Z"
          fill="#FBBD00"
        />
        <path
          d="M15 22.9687L11.4844 26.4843L15 30C18.3445 30 21.5213 28.912 24.128 26.9049V21.8531H19.0763C17.8737 22.5672 16.4754 22.9687 15 22.9687V22.9687Z"
          fill="#0F9D58"
        />
        <path
          d="M8.15208 19.0709L3.09497 24.128C3.49235 24.6441 3.92507 25.1384 4.39329 25.6066C7.22642 28.4397 10.9932 30 14.9999 30V22.9688C12.0922 22.9688 9.5438 21.4031 8.15208 19.0709Z"
          fill="#31AA52"
        />
        <path
          d="M30 15.0001C30 14.0875 29.9174 13.1732 29.7544 12.2827L29.6225 11.562H15V18.5933H22.1163C21.4253 19.9679 20.3627 21.0895 19.0762 21.8533L24.128 26.905C24.6441 26.5076 25.1383 26.0749 25.6066 25.6067C28.4397 22.7735 30 19.0067 30 15.0001V15.0001Z"
          fill="#3C79E6"
        />
        <path
          d="M20.6348 9.36521L21.2562 9.98666L26.2281 5.01486L25.6066 4.39342C22.7735 1.56029 19.0067 0 15 0L11.4844 3.51562L15 7.03125C17.1285 7.03125 19.1296 7.86012 20.6348 9.36521Z"
          fill="#CF2D48"
        />
        <path
          d="M14.9997 7.03125V0C10.993 0 7.22623 1.56029 4.39305 4.39336C3.92482 4.86158 3.49211 5.35582 3.09473 5.87197L8.15184 10.9291C9.54361 8.59687 12.092 7.03125 14.9997 7.03125V7.03125Z"
          fill="#EB4132"
        />
      </SvgIcon>
    );
  }

  const CustomPaper = (props) => (
    <Paper {...props} sx={{ borderRadius: '30px' }} />
  );

  return (
    <Dialog
      maxWidth="sm"
      open={openPopup}
      onClose={handleClose}
      PaperComponent={CustomPaper}
    >
      <Box
        sx={{
          fontFamily: 'Gotham Pro',
          backgroundColor: '#101C2B',
          borderRadius: '30px',
        }}
      >
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              position: 'absolute',
              width: '32px',
              height: '32px',
              top: '10px',
              right: 0,
            }}
          >
            <CloseIcon />
          </Button>
        </DialogActions>
        <Typography
          variant="h2"
          sx={{
            padding: '24px 30px 18px 30px',
            fontFamily: 'inherit',
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: '0.03em',
            '@media(min-width: 800px)': {
              padding: '48px 60px 37px 60px',
            },
          }}
        >
          Добро Пожаловать
        </Typography>
        <Box
          sx={{
            width: '100%',
            paddingBottom: '50px',
            boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.5)',
            borderRadius: '30px',
            background: '#142634',
          }}
        >
          <Box
            sx={{
              width: '100%',
              padding: '24px 30px 18px 30px',

              display: 'flex',
              flexDirection: 'column',
              background: '#142634',
              borderRadius: '30px',
              '@media(min-width: 800px)': {
                padding: '44px 60px 32px 60px',
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'inherit',
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              Зарегистрируйтесь в системе Equite.io, чтобы перейти к Equite.
            </Typography>
            <form>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '32px',
                  fontFamily: 'Gotham Pro',
                }}
              >
                <TextField
                  autoFocus={true}
                  required={true}
                  placeholder="Адрес электронной почты"
                  variant="filled"
                  color="secondary"
                  sx={{
                    borderRadius: '5px',
                    backgroundColor: '#101C2B',
                    marginBottom: '20px',
                  }}
                />
                <TextField
                  required={true}
                  color="secondary"
                  placeholder="Пароль"
                  variant="filled"
                  sx={{
                    borderRadius: '5px',
                    backgroundColor: '#101C2B',
                    color: '#ffffff',
                    marginBottom: '20px',
                  }}
                />

                <Button
                  variant="contained"
                  sx={{
                    padding: '10px',
                    background:
                      'linear-gradient(86.33deg, #FF7E62 0%, #FFDA55 100%);',
                    boxShadow: '0px 0px 30px rgba(212, 194, 238, 0.4)',
                    color: '#101C2B',
                    fontFamily: 'Ghotam Pro',
                    marginBottom: '20px',
                    fontWeight: 500,
                  }}
                >
                  Продолжить
                </Button>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: 'center',
                    fontWeight: 500,
                    fontFamily: 'Gotham Pro',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                  }}
                >
                  или
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    padding: '10px',
                    background: '#101C2B',
                    boxShadow: '0px 0px 30px rgba(212, 194, 238, 0.4)',
                    color: '#ffffff',
                    fontFamily: 'Ghotam Pro',
                    fontWeight: 500,
                  }}
                >
                  <GoogleIcon
                    sx={{ marginRight: '10px', width: '30px', height: '30px' }}
                  />{' '}
                  Продолжить с Google
                </Button>
              </Box>
            </form>
          </Box>
          <Typography
            sx={{
              paddingTop: '26px',
              borderTop: '1px solid #1D2F3E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Уже есть учетная запись?{' '}
            <Link href="/login">
              <Box component="a" sx={{ color: '#F17C5F', cursor: 'pointer' }}>
                Вход в систему
              </Box>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}
