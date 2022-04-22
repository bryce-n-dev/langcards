import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import InfoCard from '../components/InfoCard';
import { Pagination, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
      <Pagination count={10} className={styles.pagination} />
    </div>
  );
};

export default Home;
