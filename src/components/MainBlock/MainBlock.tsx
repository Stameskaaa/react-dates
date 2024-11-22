import { CircleComponent } from '../CircleComponent/CircleComponent';
import { SwiperComponent } from '../SwiperComponent/SwiperComponent';
import { TitleSection } from '../TitleSection/TitleSection';
import styles from './MainBlock.module.scss';

export const MainBlock = () => {
  return (
    <section className={styles.container}>
      <TitleSection />
      <CircleComponent />
      <SwiperComponent />
    </section>
  );
};
