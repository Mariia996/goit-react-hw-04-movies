import styles from './GoBackButton.module.css';

const GoBackButton = ({ history }) => {
    return (
        <button type="button" onClick={()=> history.goBack()} className={styles.btn}>Go back</button>
     );
}

export default GoBackButton;