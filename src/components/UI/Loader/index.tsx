import styles from './styles.module.scss';

const { wrapper, loader } = styles;

export const Loader = () => {
  return (
    <section className={wrapper}>
      <div className={loader}></div>
    </section>
  );
};
