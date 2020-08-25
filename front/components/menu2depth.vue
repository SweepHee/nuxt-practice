<template>
    <div id="menuDropdown" class="menu-dropdown">
        <div class="dropdown-wrap">
            <ul
            v-for="(val, key) in dropdowns"
            :key="key"
            >
                <li
                v-for="dropdown in val"
                :key="dropdown.idx"
                @mouseover="groupHover(dropdown, 1)"
                @mouseleave="groupHover(dropdown, 2)"
                >
                    <nuxt-link :to="dropdown.href">{{ dropdown.name }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dropdowns: {
            type: Array,
            required: false
        }
    },
    data() {
        return {

        }
    },
    methods: {
        groupHover(dropdown, type) {
            let targetGroup = document.querySelector(`.header-menus ul li:nth-child(${dropdown.group}) a`);
            let target = document.querySelector(`#menuDropdown ul:nth-child(${dropdown.group}) li:nth-child(${dropdown.idx}) a`);
            const header = document.querySelector("header");
            let defaultColor = "#ffffff";
            if (header.classList.contains("on")) {
                defaultColor = "#444";
            }

            targetGroup.style.transition = "0.6s";
            targetGroup.style.color = type == 1 ? "#1ec29a" : defaultColor;
            target.style.transition = "0.6s";
            target.style.color = type == 1 ? "#1ec29a" : "#555555";
        }
    }
}
</script>

<style scoped>
  @import "~/style/header.css";
</style>