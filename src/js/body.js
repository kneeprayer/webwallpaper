document.getElementById("app").innerHTML = `
    <div class="slideBackground"></div>
    <header class="js-header">
        <div class="welcome">
            <div class="js-name name"></div>
        </div>
        <div class="head-center">
            <form class="todo-form">
                <input class="todo-input" placeholder="오늘 해야 할 일은?" type="text" aria-label="todo"/>
            </form>
        </div>
        <div class="js-weather weather">
            <span class="weather__text"></span>
        </div>
    </header>
    <section class="center-box">
        <div class="todo-box">
            <div class="todo-section" id="todo">
                <ul class="js-list">해야할 일</ul>
            </div>
            <div class="todo-section" id="doing">
                <ul class="js-list">진행중</ul>
            </div>
            <div class="todo-section" id="done">
                <ul class="js-list">완료</ul>
            </div>
        </div>
    </section>

    <div class="js-location location">
        <span class="location__text"></span>
    </div>
    <div class="js-clock clock">
        <p id="clock">00:00:00</p>
    </div>
    <div class="slideLeft"></div>
    <div class="slideRight"></div>
`;
