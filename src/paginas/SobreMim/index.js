import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Abimael!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Abimael Santos"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou desenvolvedor Full Stack e estou feliz pela sua visita aqui!
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Federal da Bahia (IFBA), quando cursei Tecnologia da Informação. Eu aprendi lógica de programação e várias linguagens como: Java, Asp.Net, C#, SQL, (Html e Css) entre outros. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola de Tecnologia fantástica, conteúdos ricos que elevam o meu conhecimento!
            </p>
        </PostModelo>
    )
}