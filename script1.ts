function tema() {
    const label = document.querySelector<HTMLInputElement>("#label");
    const navFooter = document.querySelectorAll<HTMLElement>(".direcaoFooter ul label")
    const redesSociais = document.querySelectorAll<HTMLElement>(".redesSociais a img")
    const tema_escuro = document.querySelector<HTMLInputElement>("#tema_escuro");
    const main = document.querySelector<HTMLElement>("main")
    const esquerdo = document.querySelector<HTMLElement>(".esquerdo")
    const header = document.querySelector<HTMLElement>("header")
    const footer = document.querySelector<HTMLElement>("footer")
    const paragrafo = document.querySelector<HTMLElement>("#paragrafo")
    const paragrafo1 = document.querySelector<HTMLElement>("#paragrafo1")
    const photo = document.querySelector<HTMLElement>("#photo")
    const SobreMim = document.querySelector<HTMLElement>(".SobreMim")
    const Sobre = document.querySelector<HTMLElement>("#SobreMim")
    const skills = document.querySelector<HTMLElement>(".skills")
    const nome = document.querySelector<HTMLElement>("#nome")
    const labels = document.querySelectorAll<HTMLElement>(".skills label");
    const links = document.querySelectorAll<HTMLElement>
        ("header ul a")
    const habilidades = document.querySelector<HTMLElement>
        (".habilidades")


    if (label && tema_escuro && main && esquerdo && header && links && paragrafo && paragrafo1 && photo && SobreMim && Sobre && skills && skills && nome && labels && footer && navFooter && redesSociais && habilidades) {
        if (tema_escuro.checked) {
            // Tema claro

            //Sombras
            footer.style.boxShadow = "1px 1px 30px 1px #000000"
            header.style.boxShadow = "1px 1px 30px 1px #000000"
            photo.style.boxShadow = "1px 1px 30px 1px #000000"
            Sobre.style.boxShadow = "1px 1px 30px 1px #000000"
            skills.style.boxShadow = "1px 1px 30px 1px #000000"

            //Branco
            label.style.color = "#ffff"
            nome.style.color = "#ffff";
            skills.style.borderColor = "#ffff";
            Sobre.style.borderColor = "#ffff";

            //Background's
            main.style.background = "linear-gradient(270deg, rgba(35,0,97,0.9962359943977591) 0%, rgba(174,153,252,1) 100%)"
            SobreMim.style.background = "linear-gradient(270deg, rgba(174,153,252,1) 0%, rgba(35,0,97,0.9962359943977591) 100%)"
            habilidades.style.background = "linear-gradient(270deg, rgba(35,0,97,0.9962359943977591) 0%, rgba(174,153,252,1) 100%)"


            //Preto
            label.style.backgroundColor = "#000000";
            paragrafo.style.color = "#000000";
            paragrafo1.style.color = "#000000";
            footer.style.borderBottomColor = "#000000";

            //Pega todas os link's do header e altera a cor    
            links.forEach(link => {
                link.style.color = "#000000";
            });
            //Pega todas as sombras/label's do footer e altera a cor
            navFooter.forEach(label => {
                label.style.boxShadow = "1px 1px 30px 1px #000000"
            });
            //Pega todas as sombras/img do main altera a cor
            redesSociais.forEach(img => {
                img.style.boxShadow = "1px 1px 30px 1px #000000"
            });

        } else {
            // Tema escuro

            //Sombras
            footer.style.boxShadow = "1px 1px 30px 1px rgba(255, 255, 255, 0.281)";
            header.style.boxShadow = "1px 1px 30px 1px rgba(255, 255, 255, 0.281)";
            photo.style.boxShadow = "1px 1px 30px 1px rgba(255, 255, 255, 0.281)";
            Sobre.style.boxShadow = "0 1px 30px 0 rgba(255, 255, 255, 0.195)";
            skills.style.boxShadow = "0 1px 30px 0 rgba(255, 255, 255, 0.195)";

            //Preto
            label.style.color = "#000000";
            nome.style.color = "rgb(148, 95, 241)";
            
            //Background's
            main.style.background = "linear-gradient(270deg, rgb(35, 0, 69) 30%, rgba(0, 0, 0, 0.952) 100%)";
            SobreMim.style.background = "linear-gradient(270deg, rgb(8, 5, 14), rgba(35, 0, 69, 0.995) 40%)";
            habilidades.style.background = "linear-gradient(270deg, rgb(35, 0, 69) 30%, rgba(0, 0, 0, 0.952) 100%)";
            
            //Branco
            label.style.backgroundColor = "#ffff";
            paragrafo.style.color = "#ffff";
            paragrafo1.style.color = "#ffff";
            skills.style.borderColor = "#ffff";
            Sobre.style.borderColor = "#ffff";
            footer.style.borderBottomColor = "#ffff";

            //Pega todas os link's do header e altera a cor    
            links.forEach(link => {
                link.style.color = "#ffff";
            });
            //Pega todas as sombras/label's do footer e altera a cor
            navFooter.forEach(label => {
                label.style.boxShadow = "1px 1px 30px 1px rgba(255, 255, 255, 0.281)";
            });
            //Pega todas as sombras/img do main altera a cor
            redesSociais.forEach(img => {
                img.style.boxShadow = "1px 1px 30px 1px rgba(255, 255, 255, 0.281)";
            });
        }
    }
}