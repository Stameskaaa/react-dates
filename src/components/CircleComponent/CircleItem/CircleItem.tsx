import styles from './CircleItem.module.scss';

interface Props {
  RotateFunc: (index: number, angleCircle: number) => void;
  activeIndex: number;
  index: number;
  item: Item;
  shift: number;
  length: number;
}

interface Item {
  index: number;
  information: string;
}

export const CircleItem: React.FC<Props> = ({
  RotateFunc,
  index,
  activeIndex,
  item,
  shift,
  length,
}) => {
  const radius = 200;
  const angleStep = 360 / length;
  const angleCircle = angleStep * index + shift;
  const angleItem = -angleCircle;
  const style = {
    transform: `rotate(${angleCircle}deg) translate(${radius}px) rotate(${angleItem}deg)`,
  };

  return (
    <div
      className={styles.invisible_wrapper}
      onClick={() => RotateFunc(index, angleCircle)}
      style={style}>
      <div
        className={`${styles.item_wrapper} ${activeIndex === index ? styles.acitve_item : null}`}>
        <div className={styles.circle_item}>{item.index}</div>
      </div>
      {activeIndex === index && <div className={styles.item_info}>{item.information}</div>}
    </div>
  );
};
