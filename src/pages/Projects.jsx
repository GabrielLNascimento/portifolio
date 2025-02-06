import clockImage from '/assets/img/clock.png';
import convertImage from '/assets/img/conversorMoedas.png';
import gerenciadorImage from '/assets/img/gerenciadortarefas.png';
import roychange from '/assets/img/roychange.png';

const Projects = () => {
    return (
        <>
            <style>
                {`
                    .project-item {
                        background-color: #334155;
                        padding: 1rem;
                        border-radius: 0.5rem;
                        min-height: auto;
                        cursor: pointer;
                        transition: background-color 0.3s ease, box-shadow 0.3s ease;
                        color: white;
                        font-weight: bold;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        flex: 1;
                        height: 100%;
                    }

                    .project-item:hover {
                        background-color: #1e293b;
                        box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.67);
                    }

                    .project-title {
                        font-size: 20px;
                        margin: 0;
                        margin-bottom: 10px;
                    }

                    .projects-container {
                        width: 100%;
                        max-width: 100vw; /* Limita a largura máxima do container */
                        overflow: hidden;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 1rem;
                        padding: 1rem; 
                        box-sizing: border-box; 
                    }

                    .project-img {
                        width: 100%;
                        max-width: 300px;
                        height: auto;
                        border-radius: 20px;
                        margin-top: 10px;
                        margin: auto;
                    }

            
                `}
            </style>
            <div className="projects-container">
                <a
                    href="https://gabriellnascimento.github.io/clock/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="project-item">
                        <span className="project-title">Relógio</span>
                        <img
                            src={clockImage}
                            alt="Clock"
                            className="project-img"
                        />
                    </div>
                </a>

                <a
                    href="https://gabriellnascimento.github.io/conversor_moedas/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="project-item">
                        <span className="project-title">
                            Conversor de Moedas
                        </span>
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
                    rel="noopener noreferrer"
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

                <a
                    href="https://roychange.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="project-item">
                        <span className="project-title">Roy Change</span>
                        <img
                            src={roychange}
                            alt="Roy Change"
                            className="project-img"
                        />
                    </div>
                </a>
            </div>
        </>
    );
};

export default Projects;