"use strict";
function tema() {
    const label = document.querySelector("#label");
    const navFooter = document.querySelectorAll(".direcaoFooter ul label");
    const redesSociais = document.querySelectorAll(".redesSociais a img");
    const tema_escuro = document.querySelector("#tema_escuro");
    const main = document.querySelector("main");
    const esquerdo = document.querySelector(".esquerdo");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const paragrafo = document.querySelector("#paragrafo");
    const paragrafo1 = document.querySelector("#paragrafo1");
    const photo = document.querySelector("#photo");
    const SobreMim = document.querySelector(".SobreMim");
    const Sobre = document.querySelector("#SobreMim");
    const skills = document.querySelector(".skills");
    const nome = document.querySelector("#nome");
    const labels = document.querySelectorAll(".skills label");
    const links = document.querySelectorAll("header ul a");
    const habilidades = document.querySelector(".habilidades");
    if (label && tema_escuro && main && esquerdo && header && links && paragrafo && paragrafo1 && photo && SobreMim && Sobre && skills && skills && nome && labels && footer && navFooter && redesSociais && habilidades) {
        if (tema_escuro.checked) {
            // Tema claro
            //Sombras
            footer.style.boxShadow = "1px 1px 30px 1px #000000";
            header.style.boxShadow = "1px 1px 30px 1px #000000";
            photo.style.boxShadow = "1px 1px 30px 1px #000000";
            Sobre.style.boxShadow = "1px 1px 30px 1px #000000";
            skills.style.boxShadow = "1px 1px 30px 1px #000000";
            //Branco
            label.style.color = "#ffff";
            nome.style.color = "#ffff";
            skills.style.borderColor = "#ffff";
            Sobre.style.borderColor = "#ffff";
            //Background's
            main.style.background = "linear-gradient(270deg, rgba(35,0,97,0.9962359943977591) 0%, rgba(174,153,252,1) 100%)";
            SobreMim.style.background = "linear-gradient(270deg, rgba(174,153,252,1) 0%, rgba(35,0,97,0.9962359943977591) 100%)";
            habilidades.style.background = "linear-gradient(270deg, rgba(35,0,97,0.9962359943977591) 0%, rgba(174,153,252,1) 100%)";
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
                label.style.boxShadow = "1px 1px 30px 1px #000000";
            });
            //Pega todas as sombras/img do main altera a cor
            redesSociais.forEach(img => {
                img.style.boxShadow = "1px 1px 30px 1px #000000";
            });
        }
        else {
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

const inicio = document.querySelector("#labelInicio");
const sobreMim = document.querySelector("#labelSobreMim");
const habilidades = document.querySelector("#labelHabilidades");

function desmarcar(a, b) {
    a.checked = false;
    b.checked = false;
}
const refInicio = document.querySelector("#refInicio")
const refSobreMim = document.querySelector("#refSobreMim")
const refHabilidades = document.querySelector("#refHabilidades")

function eita(a, b, c) {
    a.style.backgroundColor = 'rgb(148, 95, 241)';
    a.style.width = "35px"
    a.style.height = "35px"

    b.style.backgroundColor = 'white';
    b.style.width = "30px";
    b.style.height = "30px"

    c.style.backgroundColor = 'white';
    c.style.height = "30px";
    c.style.width = "30px"
    
}

function sla() {
    if (inicio.checked) {
        window.location.href = '#inicio';
        desmarcar(sobreMim, habilidades);
        eita(refInicio, refSobreMim, refHabilidades)
        inicio.checked = true;
    }
}

function sla1() {
    if (sobreMim.checked) {
        window.location.href = '#sobre-mim';
        desmarcar(inicio, habilidades);
        eita(refSobreMim, refInicio, refHabilidades)
        checkbox.checked = true
        opa.style.backgroundColor = "red"
    }
}

function sla2() {
    if (habilidades.checked) {
        window.location.href = '#habilidades';
        eita(refHabilidades, refInicio, refSobreMim)
        desmarcar(sobreMim, inicio);
        checkbox.checked = true;
    }
}