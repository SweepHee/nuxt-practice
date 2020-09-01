<template>
    <div>
        <header 
        data-aos="fade-up"
        data-aos-duration="1000"
        @mouseleave="onSpreadSubMenus(2)"
        >
            <div class="menu-wrap">

                <div class="logo-wrap">
                    <img src="~assets/img/logo.png" alt="수퍼트리">
                </div> <!-- logo-wrap end -->

                <div class="header-menus"
                @mouseover="onSpreadSubMenus(1)"
                >
                    <ul>
                        <li
                        v-for="menu in menus"
                        :key="menu.idx"
                        @mouseover="headerHoverOn(menu.idx, 1)"
                        @mouseleave="headerHoverOn(menu.idx, 2)" 
                        class="menu-list"
                        >
                            <nuxt-link :to="menu.href">{{ menu.name }}</nuxt-link>
                        </li>
                    </ul>
                </div> <!-- header-menus end -->

                <div class="header-info">
                    <ul>
                        <li>
                            <img src="~assets/img/top_banner.png" alt="플레이앱">
                        </li>
                        <li>
                            <nuxt-link to="/signup">sign up</nuxt-link>
                        </li>
                    
                    </ul>
                </div> <!-- header-info end -->

            </div> <!-- menu-wrap end -->

            <menu2depth :dropdowns="dropdowns" />
        </header>
        <nuxt />
    </div>
</template>


<script>
import menu2depth from "~/components/menu2depth";
import { testing, say } from "~/modules/common";

export default {
    components: {
        menu2depth
    },
    data() {
        return {
            
        }
    },
    mounted() {
        testing();
        say();
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        onSpreadSubMenus(type) {
            const depth2 = document.getElementById("menuDropdown");
            if (type == 1) {
                depth2.classList.add("spread-on");
            } else if (type == 2) {
                depth2.classList.remove("spread-on");
            }
        },
        headerHoverOn(idx, type) {
            const target = document.querySelector(`.header-menus ul li:nth-child(${idx}) a`);
            const header = document.querySelector("header");
            let defaultColor = "#ffffff";
            if (header.classList.contains("on")) {
                defaultColor = "#444444";
            };
            target.style.transition = "0.6s";
            target.style.color = type == 1 ? "#1ec29a" : defaultColor;
        },
        handleScroll() {
            const y = window.pageYOffset;
            const header = document.querySelector("header");
            const list = document.querySelectorAll(".menu-list a");
            const info = document.querySelectorAll(".header-info ul li");
            const logo = document.querySelector(".logo-wrap img");

            if(y > 0) {
                header.style.transition = "0.5s";
                header.style.backgroundColor = "#ffffff";
                Array.prototype.slice.call(list).forEach(el => {
                    el.style.transition = "1.5s";
                    el.style.color = "#444";
                });
                Array.prototype.slice.call(info).forEach(el => {
                    el.style.transition = "1.5s";
                    el.style.color = "#444";
                });

                logo.src = require("~/assets/img/logo_on.png");

            }else {
                header.style.transition = "0.5s";
                header.style.backgroundColor = "transparent";
                Array.prototype.slice.call(list).forEach(el => {
                    el.style.transition = "1.5s";
                    el.style.color = "#ffffff"
                });
                Array.prototype.slice.call(info).forEach(el => {
                    el.style.transition = "1.5s";
                    el.style.color = "#ffffff";
                });

                logo.src = require("~/assets/img/logo.png");
            }
       
        }
    },
    computed: {
        menus() {
            return this.$store.state.menus.menu;
        },
        dropdowns() {
            return this.$store.state.menus.dropdown;
        }
    }
}
</script>

<style>
    @import "~/style/font.css";
    @import "~/style/default.css";
    @import "~/style/style.css";
    @import "~/style/animation.css";
    @import "~/style/bri_jeon.css";
</style>

<style scoped>
  @import "~/style/header.css";
</style>