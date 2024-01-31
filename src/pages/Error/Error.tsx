import React from 'react';
import { motion } from 'framer-motion';
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ y: -1000, opacity: 0, rotate: -360 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 10 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className={styles.message}
                    initial={{ y: 1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 10, delay: 0.2 }}
                >
                    Oops! Page not found
                </motion.p>
                <motion.p
                    className={styles.message}
                    initial={{ y: 1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 10, delay: 0.4 }}
                >
                    <a href="/">
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: '#0056b3' }}
                            className={styles.homeButton}
                        >
                            Go Home
                        </motion.button>
                    </a>
                </motion.p>
            </div>
        </div>
    );
};

export default Error;
