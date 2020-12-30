class Kontzeng {
    constructor() {
        this.ham = document.querySelector(".hamburger");
        this.burgers = document.querySelectorAll(".burg");
        this.navigate = document.querySelector("nav.nav");
        this.heroImage = document.querySelector(".hero-img");
        this.heroImageSubs = document.querySelector(".hero-img-subs");
        this.subImages = document.querySelectorAll('.sub-img');
        this.mainImages = document.querySelector('.main-img');
        this.ctrlBtn = document.querySelectorAll(".btn");
        this.subImgArr = [...this.subImages];
        this.prevImage = document.querySelector('.previmg');
        this.nextImage = document.querySelector('.nextimg');
        this.count = 0;
        this.prevCount = 1;
        this.nextCount = 1;
        this.lineProgress = document.querySelector('.line-progress');
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


    switchImage() {
        let awardArr = [...this.heroImageSubs.children];
        let heroImagePicSrc = this.heroImage.children[0];
        let heroImageTxt = this.heroImage.children[1];



        awardArr.forEach(award => {
            let newHeroImagePicSrc = award.children[0].attributes[0].value;
            let newHeroImageTxt = award.children[1].innerText;
            let counter = awardArr.length;



            setInterval(() => {
                counter++;
                if (counter > awardArr.length) {
                    counter = 1;
                }

                if (counter == award.dataset.award) {


                    heroImagePicSrc.src = newHeroImagePicSrc;
                    heroImageTxt.innerText = newHeroImageTxt;
                }
            }, 2000);
        })


    }

    nxtImage(e) {
        const clickBtn = e.target.classList[0];
        let main = this.mainImages.children[0];
        let prev = this.prevImage.children[0];
        let next = this.nextImage.children[0];
        let countWidth;



        if (clickBtn == 'right') {
            this.count++;
            this.nextCount = this.count + 1;
            this.prevCount = this.count - 1;
        }

        if (clickBtn == 'left') {
            this.count--;
            this.nextCount--;
            this.prevCount++;
        }

        if (this.count > this.subImgArr.length || this.count < 1) {
            this.count = 1;
        }
        if (this.nextCount > this.subImgArr.length) {
            this.nextCount = this.subImgArr.length;
        }
        if (this.nextCount < 1 || this.nextCount == this.count) {
            this.nextCount = Math.floor((Math.random() * this.subImgArr.length) + 1);;
        }

        if (this.prevCount > this.subImgArr.length) {
            this.prevCount = this.subImgArr.length - (this.subImgArr.length - 1);
        }
        if (this.prevCount < 1 || this.prevCount == this.count) {
            this.prevCount = Math.floor((Math.random() * this.subImgArr.length) + 1);;
        }


        countWidth = (this.count / this.subImgArr.length) * 100;
        this.lineProgress.style.width = `${countWidth}%`;


        this.subImgArr.forEach(subImage => {
            if (this.count == subImage.dataset.imgtag) {
                let newSub = subImage.children[0].attributes[0].value;
                main.src = newSub;

            }
            if (this.prevCount == subImage.dataset.imgtag) {
                let newSub = subImage.children[0].attributes[0].value;
                prev.src = newSub;
            }
            if (this.nextCount == subImage.dataset.imgtag) {
                let newSub = subImage.children[0].attributes[0].value;
                next.src = newSub;
            }
        })

    }


}


const kontz = new Kontzeng();

kontz.ham.addEventListener("click", () => { kontz.togglers(); });

kontz.switchImage();

kontz.ctrlBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        kontz.nxtImage(e)
    })
})