export default function Header() {
    return
    (
        <header>
            <img src="./public/assets/Logo_Blck.svg" alt="Welcome to Qoov" className="brand" />

            <div className="options">
                <div className="idioms simplebutton">
                    <img id="portugalicon" src="./public/assets/portugal_icon.png" alt="portuguese idiom" />
                    <div className="idiomname">
                        Portugal (PT)
                    </div>
                    <img src="././public/assets/seta_para_baixo.png" alt="seta virada para baixo" />
                </div>
                <button className="simplebutton signin">
                    Iniciar Sessão
                </button>
            </div>

        </header>
    )
}