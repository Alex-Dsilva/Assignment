import { Box, IconButton, Typography } from '@mui/material';
import {  PlayArrow, Pause } from '@mui/icons-material';
import { CatalogData } from "../assets/Data"
import Stack from '@mui/material/Stack';

type RightProp ={
  currentIndex:number,
  isPlaying :boolean,
  handlePlayPause:()=>void,

}

const CatalogRight = (props:RightProp) => {
  return (
    <Stack direction='column' spacing={'2rem'} sx={{ justifyContent: "space-between", height: "100%" , width:{ md:"100%", xs:"80vw" }, marginX:"auto" }}>
            <Box sx={{ marginLeft: { xs: 0, md: '2rem' } }}>
              <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: "600", color: "#a2a2a2e7" }}>
                {CatalogData[props.currentIndex].title}
              </Typography>
              <Typography sx={{ textAlign: 'left', marginTop: "2rem", fontSize: "11px", color: "#d1d1d1" }}>
                {CatalogData[props.currentIndex].details}
              </Typography>
            </Box>
            <Box  >
              {props.isPlaying ? (
                <IconButton
                  color="default"
                  onClick={props.handlePlayPause}
                  sx={{
                    bgcolor: '#29ffed', color: 'white', '&:focus': {
                      outline: 'none',
                    }, "&:hover": { bgcolor: '#29ffed9d' }
                  }}
                >
                  <Pause fontSize="large" />
                </IconButton>
              ) : (
                <IconButton
                  color="default"
                  onClick={props.handlePlayPause}
                  sx={{
                    bgcolor: '#29ffed', color: 'white', '&:focus': {
                      outline: 'none',
                    }, "&:hover": { bgcolor: '#29ffed9d' }
                  }}
                >
                  <PlayArrow fontSize="large" />
                </IconButton>
              )}
            </Box>
          </Stack>
  );
}

export default CatalogRight;
