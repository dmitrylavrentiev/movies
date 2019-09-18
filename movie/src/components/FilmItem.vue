<template>
    <div class="film-item">
        <router-link :to="'/film/' + item.id">
            <div class="film-item__img">
                <img :src="getPosterUrl" :alt="item.original_title">
                <div class="film-item__popularity">
                    <i class="far fa-star"></i>
                    {{item.vote_average}}
                </div>
            </div>
            <div class="film-item__description">
                <div class="film-item__title">
                    {{item.title}}
                </div>
                <div class="film-item__info">
                    <div class="film-item__year">{{getYear}}</div>
                    <div class="film-item__vote">
                        <i class="fas fa-eye"></i>
                        {{item.vote_count}}
                    </div>
                </div>
            </div>

        </router-link>
    </div>
</template>

<script>
    import {POSTER_URL185} from '../utils/config'

    export default {
        name: 'FilmItem',
        props: {
            item: {
                type: Object,
            }
        },
        computed: {
            getPosterUrl: function () {
                return POSTER_URL185 + this.item.poster_path
            },
            getYear: function () {
                return this.item.release_date.split('-')[0]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';
    @import '../assets/scss/layout';

    .film-item {
        height: 100%;

        &:hover {
            .film-item__img {
                img {
                    transform: scale(1.08);
                }
            }
        }
    }

    .film-item a {
        color: $color-white;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .film-item__img {
        flex: 0 0 $size-height-card;
        width: $size-width-card;
        height: $size-height-card;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        img {
            transition: transform 300ms;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .film-item__description {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .film-item__popularity {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
        background: $color-accent-50;
        border-top-right-radius: 10px;
    }

    .film-item__title {
        font-size: 1.2rem;
        padding: 5px 0;
    }

    .film-item__info {
        display: flex;
        font-size: 0.7rem;
        justify-content: space-between;
        color: $color-white-50;
    }

</style>
