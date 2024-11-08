export default function Faqs() {
    return (
        <div className="faqs_container">
            <div className="sectiontitle">Perguntas Frequentes</div>
            <div className="question_container">
                {faqs.map(({ title, answer }) =>
                    <div className="question_item">
                        <img src="public/assets/icon_target.jpeg" alt="faq" />
                        <div className="title">{title}</div>
                        <div className="answer">{answer}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

const faqs = [
    {
        title: "O que é a QOOV ? ",
        answer: "A Qoov é um servico de software que oferece aos seus clientes a possibilidade de gerir a sua frota TVDE numa plataforma que reúne as maiores plataforma de ride hailing em Portugal",
    },

    {
        title: "Quanto custa a QOOV ",
        answer: "A QOOV segue um plano de subscrição mensal por motorista gerido.  O valor por motorista diminui quanto maior é a frota",
    },

    {
        title: "O que posso fazer na QOOV ",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo laoreet sit amet cursus.",
    },

    {
        title: "Como posso cancelar?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Consequat semper viverra nam libero justo laoreet sit amet cursus.",
    },
]