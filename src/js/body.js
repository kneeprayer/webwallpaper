document.getElementById("app").innerHTML = `
    <div class="slideBackground"></div>
    <header class="js-header">
        <div class="welcome">
            <div class="js-name name"></div>
        </div>
        <div class="center">
            <form class="js-to-do to-do">
                <input class="js-add-to-do to-do__add-to-do" placeholder="오늘 해야 할 일은?" type="text" aria-label="todo"/>
            </form>
        </div>
        <div class="js-weather weather">
            <span class="weather__text"></span>
        </div>
    </header>
    <section>
        <ul class="js-list list"></ul>
    </section>
    <div class="js-location location">
        <span class="location__text"></span>
    </div>
    <div class="js-clock clock">
        <h3 class="clock__text clock__hangul">00:00:00</h3>
    </div>

    <div class="slideLeft"></div>
    <div class="slideRight"></div>
`;
