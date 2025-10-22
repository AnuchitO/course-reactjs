import style from './Avatar.module.css'

export default function Avatar() {
  return (
    <img
      className={style.avatar}
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}
