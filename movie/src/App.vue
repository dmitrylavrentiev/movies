<template>
    <div id="app">
        <div class="container">
            <div id="nav" class="nav">
                <router-link class="nav__item" to="/">List</router-link>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    @import './assets/scss/variables';
    @import './assets/scss/layout';


    .nav {
        border-bottom: 1px solid $color-white-20;
        padding: 0 20px;
        display: flex;
    }

    .nav__item {
        display: block;
        padding: 20px 30px;
        text-decoration: none;
        color: $color-white;
        transition: background-color 300ms;

        &:hover {
            background: $color-accent-50;
        }

        &.router-link-exact-active {
            background: $color-accent-50;
        }
    }


</style>
