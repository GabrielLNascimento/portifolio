import './css/Projects.css'; // Importando o arquivo CSS
import clockImage from '/assets/img/clock.png';
import convertImage from '/assets/img/conversorMoedas.png';
import gerenciadorImage from '/assets/img/gerenciadortarefas.png';
import geradorcpf from '/assets/img/geradorcpf.png';
import quiz from '/assets/img/quiz.png';
import jogovelha from '/assets/img/jogo-velha.png';
import lizShops from '/assets/img/liz-shops.png';
import chatreal from '/assets/img/chat-real.png';
import geradorsenha from '/assets/img/geradorsenha.png';
import rangehotels from '/assets/img/range-hotels.png';
import calculadora from '/assets/img/calculadora.png';

const Projects = () => {
    return (
        <div className="projects-container container">
            <a href="https://liz-shops.vercel.app/" target="_blank">
                <div className="project-item">
                    <span className="project-title">Liz`s Shops</span>
                    <img
                        src={lizShops}
                        alt="Liz's Shops"
                        className="project-img"
                    />
                </div>
            </a>

            <a
                href="https://gabriellnascimento.github.io/clock/"
                target="_blank"
            >
                <div className="project-item">
                    <span className="project-title">Relógio</span>
                    <img src={clockImage} alt="Clock" className="project-img" />
                </div>
            </a>

            <a href="https://jogo-velha-rh2b.vercel.app/" target="_blank">
                <div className="project-item">
                    <span className="project-title">
                        Jogo da Velha - Online
                    </span>
                    <img
                        src={jogovelha}
                        alt="jogo da velha"
                        className="project-img"
                    />
                </div>
            </a>

            <a href="https://chat-real-time-delta.vercel.app/" target="_blank">
                <div className="project-item">
                    <span className="project-title">Chat em tempo real</span>
                    <img
                        src={chatreal}
                        alt="chat em tempo real"
                        className="project-img"
                    />
                </div>
            </a>

            <a
                href="https://gabriellnascimento.github.io/conversor_moedas/"
                target="_blank"
            >
                <div className="project-item">
                    <span className="project-title">Conversor de Moedas</span>
                    <img
                        src={convertImage}
                        alt="Conversor de Moedas"
                        className="project-img"
                    />
                </div>
            </a>

            <a
                href="https://gerenciamento-tarefas-react.vercel.app/"
                target="_blank"
            >
                <div className="project-item">
                    <span className="project-title">
                        Gerenciador de Tarefas
                    </span>
                    <img
                        src={gerenciadorImage}
                        alt="Gerenciador de Tarefas"
                        className="project-img"
                    />
                </div>
            </a>

            <a href="https://gerador-cpf-delta.vercel.app/" target="_blank">
                <div className="project-item">
                    <span className="project-title">Generator</span>
                    <img
                        src={geradorcpf}
                        alt="Gerador de CPF"
                        className="project-img"
                    />
                </div>
            </a>

            <a href="https://quiz-geo-three.vercel.app/" target="_blank">
                <div className="project-item">
                    <span className="project-title">Quiz</span>
                    <img src={quiz} alt="quiz" className="project-img" />
                </div>
            </a>

            <a href="https://gerador-senhas-omega.vercel.app/" target="_blank">
                <div className="project-item">
                    <span className="project-title">Generator Password</span>
                    <img
                        src={geradorsenha}
                        alt="gerador de senha"
                        className="project-img"
                    />
                </div>
            </a>

            <a
                href="https://gabriellnascimento.github.io/angels-hotels/index.html"
                target="_blank"
            >
                <div className="project-item">
                    <span className="project-title">Angels Hotels</span>
                    <img
                        src={rangehotels}
                        alt="angels hotels"
                        className="project-img"
                    />
                </div>
            </a>

            <a
                href="https://calculadora-seven-weld.vercel.app/"
                target="_blank"
            >
                <div className="project-item">
                    <span className="project-title">Calculadora</span>
                    <img
                        src={calculadora}
                        alt="calculadora"
                        className="project-img"
                    />
                </div>
            </a>
        </div>
    );
};

export default Projects;
