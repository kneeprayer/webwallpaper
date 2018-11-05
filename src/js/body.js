document.getElementById("app").innerHTML = `
    <section class="center">
        <div class="js-clock clock">
            <h3 class="clock__text clock__hangul">00:00:00</h3>
        </div>
        <div class="js-name name"></div>
        <div>
            <form class="js-to-do to-do">
                <input class="js-add-to-do to-do__add-to-do" placeholder="Write a To Do here" type="text" />
            </form>
            <ul class="js-list list"></ul>
        </div>
    </section>

    <div class="js-location location">
        <span class="location__text"></span>
    </div>

    <div class="js-weather weather">
        <span class="weather__text"></span>
    </div>
`;
