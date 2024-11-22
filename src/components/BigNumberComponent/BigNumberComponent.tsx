import { useAppSelector } from '../../redux/hooks/hooks';
import NumberTransition from '../NumberTransition/NumberTransition';
import styles from './BigNumberComponent.module.scss';

export const BigNumberComponent = () => {
  const { activeIndex, arrayItems } = useAppSelector((state) => state.number);

  return (
    <section className={styles.container}>
      <NumberTransition number={arrayItems[activeIndex].startYear} />
      <NumberTransition number={arrayItems[activeIndex].endYear} />
    </section>
  );
};
