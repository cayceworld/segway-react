import { useDispatch } from 'react-redux';
import styles from './CartProducts.module.scss';
import { addAmount, removeAmount } from '../../../redux/cartRedux';
import clsx from 'clsx';

const CartProduct = props => {

  const item = props;
  //console.log(item);
  const dispatch = useDispatch();

  const addOne = () => {
    console.log(item.amount)
    if (item.amount < 10) {
      dispatch(addAmount({ id: item.id, amount: 1 }))
    }


  }

  const removeOne = () => {
    if (item.amount > 1)
      dispatch(removeAmount({ id: item.id, amount: 1 }))
  }


  return (
    <div className={styles.CartProduct__item} >
      <div className={styles.CartProduct__image}>
        {item.category === 'kickscooter' && <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/Kickscooters List/${item.image}`} />}
        {item.category === 'accessory' && <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/Accessories/${item.image}`} />}
      </div>
      <div className={styles.CartProduct__title}> {item.title}</div>
      <div className={styles.CartProduct__amount}>
        <div className={styles.CartProduct__value}> {item.amount}</div>
        <div className={styles.CartProduct__change}>
          <div onClick={addOne} className={clsx(item.amount == 10 && styles.CartProduct__change_disabled)}> + </div>
          <div onClick={removeOne} className={clsx(item.amount == 1 && styles.CartProduct__change_disabled)} > - </div>
        </div>
      </div>
      <div className={styles.CartProduct__price}> ${item.price* item.amount}</div>
    </div>
  );
}

export default CartProduct;