import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import InfoCard from '../components/InfoCard';
import { Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <Typography variant="h2" className={styles.subtitle}>
        Learn a new language with your favourite show.
      </Typography>
      <div className={styles.cardContainer}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Home;
