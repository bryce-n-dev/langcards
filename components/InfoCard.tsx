import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';

export default function InfoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
          <Image
            src={'/../public/majonotakkyuubin.jpg'}
            height={140}
            width={345}
            objectFit="cover"
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            魔女の宅急便
          </Typography>
          <Typography variant="body2" color="text.secondary">
            シリーズ1作目『魔女の宅急便』は、主人公のキキが親元を離れ、知らない町で魔女として一人立ちする姿を描く。
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
