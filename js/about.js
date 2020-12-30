class Kontzeng {
    constructor() {
        this.ham = document.querySelector(".hamburger");
        this.burgers = document.querySelectorAll(".burg");
        this.navigate = document.querySelector("nav.nav");
        this.readMoreBtn = document.querySelector(".read");
        this.readMoreText = document.querySelector(".unread");
        this.mvpImage = document.querySelectorAll(".mvp");
        this.mvpText = document.querySelectorAll(".mvp p");

    }

    togglers() {
        this.ham.classList.toggle(".active");
        this.burgers.forEach(burg => burg.classList.toggle("active"));

        const ems = 100;

        if (this.ham.classList.contains(".active")) {
            this.navigate.style.left = 0;
        } else {
            this.navigate.style.left = `-${ems}%`;

        }

        if (window.innerWidth > 699) {
            this.navigate.style.left = `auto`;

        }
    }

    read() {
        this.readMoreText.style.display = 'inline';
    }
    unread() {
        this.readMoreBtn.style.display = 'none';
    }

    zoomBack() {
        let backScale = 1;
        let flag = true;
        const divisor = 1;
        let textScale;

        let bacFig;
        let textFig;


        setInterval(() => {
            if (flag) {
                backScale += 0.1;
                bacFig = Math.round(backScale * 10) / 10;

                textScale = divisor / bacFig;
                textFig = Math.round(textScale * 10) / 10;


            } else {
                backScale -= 0.1;
                bacFig = Math.round(backScale * 10) / 10;

                textScale = divisor / bacFig;
                textFig = Math.round(textScale * 10) / 10;
            }

            if (backScale > 3) {
                flag = !flag;
            }
            if (backScale < 1.1) {
                flag = !flag;
            }

            this.mvpImage.style.transform = `scale(${bacFig})`;
            this.mvpText.style.transform = `scale(${textFig})`;
        }, 100);
    }
}


const kontz = new Kontzeng();

kontz.ham.addEventListener("click", () => { kontz.togglers(); });
kontz.readMoreBtn.addEventListener('click', () => {
    kontz.unread();
    kontz.read();
});

kontz.zoomBack();