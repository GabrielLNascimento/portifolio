import './css/Projects.css'; // Importando o arquivo CSS
import clockImage from '/assets/img/clock.png';
import convertImage from '/assets/img/conversorMoedas.png';
import gerenciadorImage from '/assets/img/gerenciadortarefas.png';
import roychange from '/assets/img/roychange.png';
import quiz from '/assets/img/quiz.png';

const Projects = () => {
    return (
        <div className="projects-container container">
            <a
                href="https://gabriellnascimento.github.io/clock/"
                target="_blank"
            >
                <div className="project-item">
                    <span className="project-title">Relógio</span>
                    <img src={clockImage} alt="Clock" className="project-img" />
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

            <a href="https://roychange.onrender.com/" target="_blank">
                <div className="project-item">
                    <span className="project-title">Roy Change</span>
                    <img
                        src={roychange}
                        alt="Roy Change"
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
        </div>
    );
};

export default Projects;
