import { useEffect, useState } from 'react';
import styles from './NumberTransition.module.scss';

const NumberTransition = ({ number }: { number: number }) => {
  const [currentNumber, setCurrentNumber] = useState(2000);

  useEffect(() => {
    if (currentNumber !== number) {
      const interval = setInterval(() => {
        setCurrentNumber((prev) => {
          const difference = number - prev;
          const steps = [100, 10, 5, 1];
          const step = steps.find((s) => Math.abs(difference) >= s) || 1;

          if (difference > 0) {
            return prev + step > number ? number : prev + step;
          } else if (difference < 0) {
            return prev - step < number ? number : prev - step;
          }

          clearInterval(interval);
          return prev;
        });
      }, 40);

      return () => clearInterval(interval);
    }
  }, [number]);

  return (
    <div className={styles.number}>
      <span>{currentNumber}</span>
    </div>
  );
};

export default NumberTransition;
