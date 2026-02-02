import "./css/Projects.css"; // Importando o arquivo CSS
import clockImage from "/assets/img/clock.png";
import convertImage from "/assets/img/conversorMoedas.png";
import gerenciadorImage from "/assets/img/gerenciadortarefas.png";
import geradorcpf from "/assets/img/geradorcpf.png";
import quiz from "/assets/img/quiz.png";
import lizShops from "/assets/img/liz-shops.png";
import geradorsenha from "/assets/img/geradorsenha.png";
import rangehotels from "/assets/img/range-hotels.png";
import calculadora from "/assets/img/calculadora.png";
import impostorGame from "/assets/img/impostor-game.png"

// components
import Card from "../Components/Card";

const Projects = () => {
    return (
        <div className="projects-container container">
            <Card
                link={"https://liz-shops.vercel.app/"}
                title={"Liz`s Shops"}
                image={lizShops}
            />
            <Card
                link={"https://impostor-game-plum.vercel.app/"}
                title={"Impostor Game"}
                image={impostorGame}
            />
            <Card
                link={"https://gabriellnascimento.github.io/clock/"}
                title={"Relógio"}
                image={clockImage}
            />
            <Card
                link={"https://gabriellnascimento.github.io/conversor_moedas/"}
                title={"Conversor de Moedas"}
                image={convertImage}
            />
            <Card
                link={"https://gerenciamento-tarefas-react.vercel.app/"}
                title={"Gerenciador de Tarefas"}
                image={gerenciadorImage}
            />
            <Card
                link={"https://gerador-cpf-delta.vercel.app/"}
                title={"Generator"}
                image={geradorcpf}
            />
            <Card
                link={"https://quiz-geo-three.vercel.app/"}
                title={"Quiz"}
                image={quiz}
            />
            <Card
                link={"https://gerador-senhas-omega.vercel.app/"}
                title={"Generator Password"}
                image={geradorsenha}
            />
            <Card
                link={"https://gabriellnascimento.github.io/angels-hotels/index.html"}
                title={"Angels Hotels"}
                image={rangehotels}
            />
            <Card
                link={"https://calculadora-seven-weld.vercel.app/"}
                title={"Calculadora"}
                image={calculadora}
            />
        </div>
    );
};

export default Projects;
