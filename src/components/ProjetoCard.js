class ProjetoCard extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styleReset());
        shadow.appendChild(this.style());
    }

    build() {
        const elementRoot = document.createElement("a");
        const lista = document.getElementById("projects_nav");
        lista.appendChild(elementRoot);
        elementRoot.setAttribute("href", this.getAttribute("url"));
        elementRoot.setAttribute("rel", "external");
        elementRoot.setAttribute("target", "_blank");

        const item = document.createElement("li");
        elementRoot.appendChild(item);
        item.setAttribute("class", "project");

        const cover = document.createElement("div");
        item.appendChild(cover);
        cover.setAttribute("class", "project_cover");
        cover.setAttribute("id", "project_cover");

        const title = document.createElement("h1");
        item.appendChild(title);
        title.setAttribute("class", "project_title");
        title.textContent = this.getAttribute("title");

        const tecnology = document.createElement("p");
        item.appendChild(tecnology);
        tecnology.setAttribute("class", "project_descrition");
        tecnology.textContent = "Tecnologias: " + this.getAttribute("tecnology");

        return elementRoot;
    };

    style() {
        const style = document.createElement("style");
        style.textContent = `
        a {
            text-decoration: none;
            color: initial;
        }

        .project_cover {
            width: 100%;
            height: 130px;
            background-image: url(${this.getAttribute("cover")});
            background-color: #171717;
            border: 0.725px solid var(--gray-200);
            margin-bottom: 7.5px;
            background-position: center;
            background-size: cover;
        }

        .project {
            background-color: var(--gray-400);
            padding: 16px 6%;
            border: 0.725px solid var(--gray-200);
            margin-bottom: 32px;
            width: calc(80vw - 24px);
        }
        
        .project:hover {
            scale: 1.1;
        }
        
        .project:last-child {
            margin-bottom: 0;
        }
        
        .project_title {
            color: var(--white);
            font-size: 13.05px;
            font-weight: 500;
            line-height: 17px;
        }
        
        .project_descrition {
            font-weight: 400;
            font-size: 10.15px;
            line-height: 13px;
            color: var(--gray);
        }
        @media screen and (min-width: 600px) {
            .project {
                margin-bottom: 0;
                padding: 20px auto;
                width: 20vw;
            }
        
            .project_cover {
                width: auto;
            }
        
            .project_title {
                font-size: 18px;
                line-height: 23px;
                margin-top: 23px;
            }
        
            .project_descrition {
                font-size: 14px;
                line-height: 18px;
            }
        }
        
        @media screen and (min-width: 328px) {
            @media screen and (max-width: 600px) {
                .project {
                    width: calc(50vw);
                }
            }
        }
        `
        
        return style;
    };

    styleReset() {
        const head = document.getElementsByName("head");
        const css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "src/css/reset.css");
        
        return css;
    }

}

customElements.define("projeto-card", ProjetoCard)