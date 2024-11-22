import styles from './PageInfo.module.scss';

interface Props {
  index: number;
  length: number;
  PrevFunc: () => void;
  NextFunc: () => void;
}

export const PageInfo: React.FC<Props> = ({ index, length, PrevFunc, NextFunc }) => {
  const foramteNumber = (num: number) => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.page_info}>{`${foramteNumber(index + 1)}/${foramteNumber(
        length,
      )}`}</div>
      <div className={styles.button_block}>
        <button onClick={PrevFunc} className={index === 0 ? styles.disabled : undefined} />
        <button onClick={NextFunc} className={index === length - 1 ? styles.disabled : undefined} />
      </div>
    </div>
  );
};
