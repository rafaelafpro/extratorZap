function createModal(numbers) {
    var numbersContainer = document.createElement("textarea");
    var modal = document.createElement("div");
    var pluginContainer = document.createElement("div");

    var close = document.createElement("div");
    var buttonsContainer = document.createElement("div");

    var svgClose = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-x-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>`;

    buttonsContainer.classList.add("buttons-container");

    var buttonsContainerHTML = `
        <button id="copy">
            <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"></path>
                <path fill="currentColor" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"></path>
                </svg>
            </div>
            </div>
            <span>Copiar</span>
        </button>

        <button id="remove">
            <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"></path>
                </svg>
            </div>
            </div>
            <span>Remover "+"</span>
        </button>

        <button id="csv">
            <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.517 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495Zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879l-1.327 4Z"></path>
                </svg>
            </div>
            </div>
            <span>Baixar CSV</span>
        </button>
    `;

    buttonsContainer.innerHTML = buttonsContainerHTML;

    close.innerHTML = svgClose;

    for (i = 0; i < numbers.length; i++) {
        numbersContainer.value += `${numbers[i]}\n`;
    }

    close.classList.add("close");
    modal.classList.add("modal");
    numbersContainer.classList.add("numbers-container");
    pluginContainer.classList.add("plugin-container");
    modal.setAttribute("data-backdrop", "false");

    modal.appendChild(pluginContainer);
    pluginContainer.appendChild(close);
    pluginContainer.appendChild(numbersContainer);
    pluginContainer.appendChild(buttonsContainer);
    document.body.appendChild(modal);

    close.addEventListener("click", () => {
        document.body.removeChild(modal);
    });

    var copyButton = document.getElementById("copy");
    var csvButton = document.getElementById("csv");
    var removeButton = document.getElementById("remove");

    copyButton.addEventListener("click", () => {
        navigator.clipboard
            .writeText(numbersContainer.value)
            .then(alert("Copiado para a área de transferência"));
    });

    removeButton.addEventListener("click", () => {
        numbersContainer.value = numbersContainer.value.replaceAll("+", "");
    });

    csvButton.addEventListener("click", () => {
        alert("Funcionalidade em desenvolvimento");
    });
}

const interval = setInterval(() => {
    const wrapper = document.querySelectorAll(".vq6sj");

    if (wrapper.length > 2) {
        alert(wrapper.length);
        clearInterval(interval);

        for (i = 0; i < wrapper.length; i++) {
            wrapper[i].addEventListener("click", () => {
                var numeros = document.querySelector("._2YPr_");
                if (
                    numeros.innerText != "clique aqui para dados do contato" &&
                    numeros.innerText != "Conta comercial" &&
                    numeros.innerText != "online" &&
                    numeros.innerText != "digitando..." &&
                    numeros.innerText != "Carregando" &&
                    numeros.innerText != "carregando"
                ) {
                    var novo = document
                        .querySelector("._1yNrt")
                        .querySelector("._2cNrC")
                        .cloneNode(true);
                    var container = document
                        .querySelector("._1yNrt")
                        .querySelector("._3UaCz");
                    novo.style.margin = 0;
                    novo.querySelector("path").setAttribute(
                        "d",
                        "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 3.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"
                    );
                    novo.querySelector("svg").setAttribute(
                        "viewBox",
                        "0 0 20 20"
                    );
                    novo.querySelector("svg").style.paddingTop = "2px";
                    container.appendChild(novo);
                    novo.querySelector("path").setAttribute("fill", "#26333a");

                    const interval2 = setInterval(() => {
                        numeros = document.querySelector("._2YPr_");
                        if (numeros.innerText != "clique para dados do grupo") {
                            novo.querySelector("path").setAttribute(
                                "fill",
                                "currentColor"
                            );
                            clearInterval(interval2);

                            numeros = numeros.title;
                            numerosArray = numeros.split(", ");

                            novo.addEventListener("click", () => {
                                createModal(numerosArray);
                            });
                        }
                    }, 1000);
                }
            });
        }
    }
}, 1000);
