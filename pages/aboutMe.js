import {Container,Col, Row} from "react-bootstrap";
import styles from "../components/aboutMe.module.css"
import utilStyles from "../styles/utils.module.css"
export default function AboutMe() {
    return(
        <Container className={`${utilStyles.backgroundColor} ${styles.aboutMeContainer}`}>
            <Row className="justify-content-center">
                <Col xs={11}>
                    <h3 className={utilStyles.title}>About me</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={11} className={`${utilStyles.text} ${styles.text}`}>
                    <p>
                        Hello! I'm Brittany, a software engineer based in Boston, MA.
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                        <br/>
                        Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={11}>
                    <h3 className={utilStyles.title}>Collaborations</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
        </Container>
    )
}