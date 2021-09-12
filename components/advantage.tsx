import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

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

export {AdventageInfoBlock, AdventageInfo, AdventagePicture, AdventageItem}