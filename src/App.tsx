import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import './App.css'
import CatalogRight from './components/CatalogRight'
import CatalogLeft from './components/CatalogLeft'
import { CatalogData } from './assets/Data';

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let interval: number;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CatalogData.length);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);


  const Previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? CatalogData.length - 1 : prevIndex - 1));
    setIsPlaying(false);
  };

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CatalogData.length);
    setIsPlaying(false);
  };

  const handleThumbnail = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };


  return (
    <Box sx={{ margin: '0 auto' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <CatalogLeft currentIndex={currentIndex} Previous={Previous} Next={Next} handleThumbnail={handleThumbnail}/>
      </Grid>
      <Grid item xs={12} md={5} sx={{ position: 'relative' }} >
        <CatalogRight currentIndex={currentIndex} isPlaying={isPlaying} handlePlayPause={handlePlayPause}  />
      </Grid>
    </Grid>
  </Box>
  )
}

export default App
