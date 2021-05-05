import styles from './GoBackButton.module.css';

const GoBackButton = ({history}) => {
    return (
        <button type="button" onClick={()=> history.push('/')} className={styles.btn}>Go back</button>
     );
}

export default GoBackButton;