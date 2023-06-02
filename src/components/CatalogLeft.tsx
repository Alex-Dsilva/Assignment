import { Box, IconButton} from '@mui/material';
import { ArrowLeft, ArrowRight} from '@mui/icons-material';
import { CatalogData } from '../assets/Data';

type LeftProp ={
  currentIndex:number,
  Previous:()=>void,
  Next:()=>void,
  handleThumbnail:(index:number)=>void
}

const CatalogLeft = (props:LeftProp) => {
  return (
    <Box >
            <Box component="img" src={CatalogData[props.currentIndex].src} alt={`Image ${props.currentIndex + 1}`} sx={{ width: '98%', height: { xs: '40vh', md: '65vh', lg: '55vh' }, borderRadius: "50px"}} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, gap:"2", width:"fit-content", marginX:"auto"}}>
              <IconButton disableFocusRipple disableRipple sx={{
                '&:focus': {
                  outline: 'none',
                }
              }} onClick={props.Previous}>
                <ArrowLeft fontSize="large" />
              </IconButton>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '0.5em' }}>
                {CatalogData.map((image, index) => (
                  <Box
                    component="img"
                    sx={{
                      height: { xs: '2em', sm: '3em', md: '4em', lg: '5em', xl:"7em" },
                      width: { xs: '3.5em', sm: '5em', md: '6em', lg: '7em', xl:"12rem" },
                      borderRadius: '10px',
                      filter: index === props.currentIndex ? 'none' : 'grayscale(100%)',
                    }}
                    key={image.id}
                    onClick={() => props.handleThumbnail(index)}
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </Box>
              <IconButton disableFocusRipple disableRipple sx={{
                '&:focus': {
                  outline: 'none',
                }
              }} onClick={props.Next}>
                <ArrowRight fontSize="large" />
              </IconButton>
            </Box>
          </Box>
  )
}

export default CatalogLeft