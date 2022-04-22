import Button from '@mui/material/Button';
import React from 'react';
import styles from '../../styles/Cards.module.css';
import { Typography } from '@mui/material';

export default function cards() {
  return (
    <div className={styles.container}>
      Photo
      <Typography variant="h2">魔女の宅急便</Typography>
      <Typography variant="body1">
        シリーズ1作目『魔女の宅急便』は、主人公のキキが親元を離れ、知らない町で魔女として一人立ちする姿を描く。
      </Typography>
      <Typography variant="h4">Downloads</Typography>
      <Button variant="outlined">Anki (sub 2K)</Button>
      <Button variant="outlined">Anki (sub 5k)</Button>
      <Button variant="outlined">Quizlet (sub 2K)</Button>
      <Button variant="outlined">Quizlet (sub 5k)</Button>
    </div>
  );
}
