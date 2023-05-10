'use client';
import styles from './page.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './Redux/Features/counter/counterSlice';

export default function Home() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <button className={styles.btn} onClick={() => dispatch(increment())}>
        +
      </button>
      <h3>{count}</h3>
      <button className={styles.btn} onClick={() => dispatch(decrement())}>
        -
      </button>
    </main>
  )
}
