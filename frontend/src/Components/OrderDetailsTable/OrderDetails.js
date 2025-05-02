import styles from "./OrderDetails.module.css";

function OrderDetailsTable (){
  return (
    <div className={styles.table}>
      <div className={styles.row}>
        <span>Pickup Address</span>
        <span>Cairo</span>
      </div>
      <div className={styles.row}>
        <span>Delivery Address</span>
        <span>Alex</span>
      </div>
      <div className={styles.row}>
        <span>Food Amount</span>
        <span>3 Dishes</span>
      </div>
      <div className={styles.row}>
        <span>Deadline Cancellation</span>
        <span>1 Hour from Taking the Order</span>
      </div>
    </div>
  );
};

export default OrderDetailsTable;