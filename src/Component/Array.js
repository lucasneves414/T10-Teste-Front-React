import ImgHome from '../assets/trabalho-home.jpg';
import Sobre from '../assets/sobre.jpg';
import Art from '../assets/servicos-arte.jpg';
import PortImg1 from "../assets/portfolio-1.jpg";
import PortImg2 from "../assets/portfolio-2.jpg";
import PortImg3 from "../assets/portfolio-3.jpg";
import PortImg4 from "../assets/portfolio-4.jpg";

export default
    {
        "Home": {
            "tittle": "Inovação, Design e Experiência",
            "subtittle": "Sempre a frente em soluções digitais",
            "img": {ImgHome},
            "botao": "Saiba mais"
        },

        "SobreNos":
        {
            "tittle": "SOBRE NÓS",
            "tittle2": "Qual o seu próximo projeto?",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "botao": "Download CV",
            "img": {Sobre}
        },

        "Servicos":
        {
            "tittle": "SERVIÇOS",
            "subtittle": "Proporcionamos uma melhor experiência",

            "contentUI": {
                "tittle": "Design UI",
                "subtittle": "Photoshop, Ilustrator",
                "porcentage": "85%",
            },

            "content": {
                "img": {Art},
                "tittle": "Design",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "botao": "Saiba mais"
            },
        },

        "Portfolio":
        {
            "tittle": "PORTFOLIO",
            "subtittle": "Meus trabalhos",
            "images": {
                "image1": {PortImg1},
                "image2": {PortImg2},
                "image3": {PortImg3},
                "image4": {PortImg4}
            }
        },

        "Contato":
        {
            "tittle": "CONTATO",
            "subtittle": "Envie sua mensagem",
            "botao": "Enviar"
        },
    }
