const Home = () => {
    return (
        <div className="w-screen flex flex-1">
            <div className="flex flex-col md:flex-row gap-10 justify-center w-screen items-center">
                <div className="text-white w-[90%] md:w-[800px] h-auto md:h-[500px] flex flex-col justify-center text-center md:text-left">
                    <p className="text-[35px] md:text-[45px] font-bold">
                        DESENVOLVEDOR{" "}
                        <span
                            className="text-[35px] md:text-[45px] font-bold text-slate-500 shadow-md"
                            style={{ textShadow: "0px 0px 7px" }}
                        >
                            FULLSTACK
                        </span>
                    </p>

                    <p className="text-[18px] md:text-[20px] text-justify indent-0 md:indent-[55px] mt-4 md:mt-6 px-4 md:px-0">
                        Desenvolvedor em formação, focado em se tornar um
                        profissional fullstack. Buscando oportunidades de
                        trabalho para crescer e contribuir na área de
                        desenvolvimento.
                    </p>
                </div>

                <div className="text-white w-[90%] md:w-[500px] h-[300px] md:h-[500px] border border-red-100 flex justify-center items-center">
                    imagem
                </div>
            </div>
        </div>
    );
};

export default Home;
