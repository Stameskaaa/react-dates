import styles from './SliderItem.module.scss';

interface Props {
  year: number;
  text: string;
}

export const SliderItem: React.FC<Props> = ({ year, text }) => {
  return (
    <div className={styles.container}>
      <h1>{year}</h1>
      <p>{text}</p>
    </div>
  );
};
