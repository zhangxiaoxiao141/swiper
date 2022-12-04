export class Swiper{
    constructor(options){
        this.$options = options
        this.__init()
        this.__pageEvent()
        this.$current = 0
        this.__thetime()
        console.log(this)
    }

    __init(){
        this.content = document.querySelector(this.$options.content)
        this.swiperItem = document.querySelectorAll(this.$options.swiperItem)
        this.page = document.querySelector(this.$options.page).children
        this.btn1 = document.querySelector(this.$options.btn1)
        this.btn2 = document.querySelector(this.$options.btn2)
    }

    __pageEvent(){
        [...this.page].forEach((item,index) => {
            item.onclick = () => {
                clearInterval(this.timer)
                this.$current = index
                this.__content()
                this.__thetime()
            }
        })
        this.btn1.onclick = () => {
            clearInterval(this.timer)
            this.content.style.transition = "all .7s"
            if(this.$current == 0){
                this.content.style.transition = ""
            }
            this.$current = (this.$current - 1 + 5) % 5
            this.__content()
            this.__thetime()
        }
        this.btn2.onclick = () => {
            clearInterval(this.timer)
            this.content.style.transition = "all .7s"
            if(this.$current == 4){
                this.content.style.transition = ""
            }
            this.$current = (this.$current + 1) % 5
            this.__content()
            this.__thetime()
        }
    }

    __content(){
        this.content.style.left = -800 * this.$current + "px"
    }

    __thetime(){
        this.timer = setInterval(() => {
            this.content.style.transition = "all .7s"
            if(this.$current == 4){
                this.content.style.transition = ""
            }
            this.$current = (this.$current + 1) % 5
            this.__content()
        },3000)
    }
}