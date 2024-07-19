import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
// import headerImg from "../assets/img/header-img.svg"
import headerImg from "../assets/img/p3m.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Dev Full Stack"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 3000;

    useEffect(() => {
        let ticket = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticket) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem-vindo ao meu portfólio</span>
                        <h1>{`Olá, sou Anderson `}<span className="wrap">{text}</span></h1>
                        <p>Desenvolvedor Full Stack apaixonado por transformar ideias em soluções digitais inovadoras e funcionais. 
                            Habilidades abrangentes em front-end e back-end. 
                            Comprometido com a excelência técnica, colaboração em equipe e aprendizado contínuo. 
                            Pronto para enfrentar desafios e criar software de alta qualidade que agregue valor aos projetos. 
                            Entre em contato para discutir como posso contribuir para o seu sucesso digital.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}