import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './CTA.module.css';

function Cta() {
    return (
        <section style={{
            margin:'60px 80px'
        }}>
            <Container fluid className={styles.container}>
                <Row>
                    <Col>
                        <div className={styles.textBlock}>
                            <div className={styles.titleBlock}>
                                <h1>Start your free trial today!</h1>
                                <span>
                                    This is a clear and concise call to action that encourages users to sign up for a
                                    free
                                    trial of StreamVibe.
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col className={styles.BtnBlock}>
                        <div className={styles.Btn}>
                            <Button variant="danger">Start a Free Trail</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Cta;
