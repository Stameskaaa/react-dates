import { useEffect, useState } from 'react';
import styles from './NumberTransition.module.scss';

const NumberTransition = ({ number }: { number: number }) => {
  const [currentNumber, setCurrentNumber] = useState(2000);

  useEffect(() => {
    if (currentNumber !== number) {
      const interval = setInterval(() => {
        setCurrentNumber((prev) => {
          if (prev + 100 < number) return prev + 100;
          if (prev - 100 > number) return prev - 100;
          if (prev + 10 < number) return prev + 10;
          if (prev - 10 > number) return prev - 10;
          if (prev + 5 < number) return prev + 5;
          if (prev - 5 > number) return prev - 5;
          if (prev < number) return prev + 1;
          if (prev > number) return prev - 1;
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
