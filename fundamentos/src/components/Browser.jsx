import Link from 'next/link';
import styles from '../styles/Browser.module.css';

export default function Browser(props) {
    return (
        <Link href={props.destin}>
            <div className={styles.browser} style={{
                backgroundColor: props.color
            }}>
                {props.text}
            </div> 
        </Link>
    );
};