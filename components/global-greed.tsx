import { styled } from '@mui/system';


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
export default GlobalGreed