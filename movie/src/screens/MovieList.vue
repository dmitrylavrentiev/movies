<template>
    <div class="movies-wrap">
        <div class="movies">
            <div v-for="item in getList" :key="item.id" class="movies__item">
                <FilmItem :item="item"/>
            </div>

        </div>
        <div @click="loadMore()" class="btn">
            <i class="fas fa-angle-double-down"></i>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'

    import FilmItem from '../components/FilmItem'

    export default {
        name: 'MovieList',
        components: {
            FilmItem,
        },
        mounted() {
            this.popularRequest()
        },
        methods: {
            ...mapActions(['popularRequest']),
            loadMore: function () {
                if(!this.isLoading){
                    this.popularRequest()
                }
            }
        },
        computed: {
            ...mapGetters(['getList', 'isLoading']),
            ...mapState({
                total: state => state.movies.totalPages,
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';
    @import '../assets/scss/layout';
    @import '../assets/scss/components/btn';

    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .movies__item {
        flex: 0 0 $size-width-card;
        margin: 30px 20px;
    }

</style>
