import { useState } from 'react';
import styles from './CircleComponent.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setActiveIndex } from '../../redux/slices/numberCircle';
import { PageInfo } from './PageInfo/PageInfo';
import { CircleItem } from './CircleItem/CircleItem';
import { BigNumberComponent } from '../BigNumberComponent/BigNumberComponent';

export const CircleComponent = () => {
  const { arrayItems, activeIndex } = useAppSelector((state) => state.number);
  const [shift, setShift] = useState(315);
  const dispatch = useAppDispatch();

  const handleRotate = (i: number, angle: number) => {
    const currentAngle = mod(angle, 360);
    const angleToTargetUp = 315 - currentAngle;
    const angleToTargetDown = 45 + currentAngle;

    function mod(a: number, b: number) {
      return ((a % b) + b) % b;
    }

    if (currentAngle > 135) {
      setShift((prev) => prev + angleToTargetUp);
    } else {
      setShift((prev) => prev - angleToTargetDown);
    }

    dispatch(setActiveIndex(i));
  };

  const rotateToNextStep = () => {
    const angleStep = 360 / arrayItems.length;
    const currentActive = activeIndex === arrayItems.length - 1 ? 0 : activeIndex + 1;
    setShift((prev) => prev - angleStep);
    dispatch(setActiveIndex(currentActive));
  };

  const rotateToPrevStep = () => {
    const angleStep = 360 / arrayItems.length;
    const currentActive = activeIndex === 0 ? arrayItems.length - 1 : activeIndex - 1;
    setShift((prev) => prev + angleStep);
    dispatch(setActiveIndex(currentActive));
  };

  return (
    <section className={styles.component_container}>
      <div className={styles.circle}>
        {arrayItems.map((item, index) => (
          <CircleItem
            RotateFunc={handleRotate}
            activeIndex={activeIndex}
            index={index}
            item={item}
            shift={shift}
            length={arrayItems.length}
          />
        ))}
        <div className={styles.number_container}>
          <BigNumberComponent />
        </div>
      </div>

      <PageInfo
        index={activeIndex}
        length={arrayItems.length}
        PrevFunc={rotateToPrevStep}
        NextFunc={rotateToNextStep}
      />
    </section>
  );
};
