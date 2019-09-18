<template>
    <div v-if="item" class="film">
        <div class="film__bg">
            <img :src="getBGUrl" alt="">
        </div>
        <div class="film__description">
            <div class="film__img">
                <img :src="getPosterUrl" :alt="item.original_title">
            </div>
            <div class="film__info">
                <div class="film__title">{{item.title}}</div>
                <div class="row">
                    <div class="col-8">
                        <div class="film__overview">{{item.overview}}</div>
                    </div>
                    <div class="col-4 film__tec-info">
                        <div class="film__tec-item">
                            <i class="fas fa-dollar-sign"></i>
                            {{item.budget}}
                        </div>
                        <div class="film__tec-item">
                            <i class="fas fa-calendar-alt"></i>
                            {{item.release_date}}
                        </div>
                        <div class="film__tec-item">
                            <i class="far fa-clock"></i>
                            {{item.runtime}}
                        </div>
                        <div class="film__tec-item">
                            <i class="far fa-star"></i>
                            {{item.vote_average}}
                        </div>
                        <div class="film__tec-item">
                            <i class="fas fa-eye"></i>
                            {{item.vote_count}}
                        </div>
                    </div>
                </div>
                <div v-if="item.genres.length > 0" class="film__genres">
                    <div v-for="ganre in item.genres" :key="ganre.id" class="film__ganre">
                        {{ganre.name}}
                    </div>
                </div>
                <div v-if="item.production_countries.length > 0" class="film__countries">
                    <div v-for="country in item.production_countries" :key="country.iso_3166_1" class="film__country">
                        {{country.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'

    import {POSTER_URL300, BG_URL} from '../utils/config'

    export default {
        name: 'Film',
        components: {},
        created() {
            this.detailsRequest(this.$route.params.id)
        },
        methods: {
            ...mapActions(['detailsRequest']),
            ...mapMutations(['resetDetails']),
        },
        computed: {
            ...mapGetters({item: 'getDetails'}),
            getPosterUrl: function () {
                return POSTER_URL300 + this.item.poster_path
            },
            getBGUrl: function () {
                return BG_URL + this.item.backdrop_path
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/include-media';
    @import '../assets/scss/variables';
    @import '../assets/scss/layout';

    .film {
        padding: 10px 0;
        color: $color-white;
        position: relative;
        @include media('>=tablet') {
            padding: 40px;
            margin-top: 26px;
        }
    }

    .film__bg {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: $color-primary-80;
        }

        @include media('>=tablet') {
            display: block;
        }
    }

    .film__description {
        display: flex;
        flex-direction: column;
        @include media('>=tablet') {
            flex-direction: row;
        }
    }

    .film__img {
        flex: 0 0 300px;

        img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
        }
    }

    .film__info {
        flex: 1 1 100%;
        @include media('>=tablet') {
            padding: 0 20px;
        }
    }

    .film__title {
        font-size: 2rem;
        margin-top: 16px;
        text-align: center;
        @include media('>=tablet') {
            margin: 0 0 30px;
            text-align: left;
            font-weight: 100;
            font-size: 3rem;
        }
    }

    .film__overview {
        margin-top: 10px;
        font-size: 0.9rem;
        @include media('>=tablet') {
            margin: 0;
            font-size: 1rem;
            line-height: 1.4rem;
        }
    }

    .film__tec-info {
        display: flex;
        font-size: 0.7rem;
        justify-content: space-around;
        color: $color-white-50;
        margin: 16px 0;
        @include media('>=tablet') {
            font-size: 0.8rem;
            margin: 0;
            flex-direction: column;
            justify-content: normal;
            align-items: flex-end;
        }
    }

    .film__tec-item {
        i {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;
            @include media('>=tablet') {
                margin: 0 0 0 10px;
            }
        }

        @include media('>=tablet') {
            margin-bottom: 12px;
            display: flex;
            flex-direction: row-reverse;

        }
    }

    .film__genres, .film__countries {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .film__ganre, .film__country {
        padding: 10px;
        background: $color-white-20;
        margin: 2px;
    }


</style>
