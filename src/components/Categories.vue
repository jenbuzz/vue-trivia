<template>
    <b-row align-h="center">
        <b-col sm="6" class="categories text-center">
            <button type="button" class="btn btn-category" @click="setCurrentCategory('art')">
                <img alt="Art Category" src="../assets/art.svg" />
                <span>Art</span>
            </button>
            <button
                type="button"
                class="btn btn-category"
                @click="setCurrentCategory('entertainment')"
            >
                <img alt="Entertainment Category" src="../assets/entertainment.svg" />
                <span>Entertainment</span>
            </button>
            <button type="button" class="btn btn-category" @click="setCurrentCategory('history')">
                <img alt="History Category" src="../assets/history.svg" />
                <span>History</span>
            </button>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Categories extends Vue {
    @Prop() private setCurrentCategory!: Function;
}
</script>

<style scoped lang="scss">
.categories {
    flex-direction: row;
    display: flex;
    align-items: stretch;
    justify-content: center;

    .btn-category {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 140px;
        margin: 0 0.5rem;
        background: #e2e2e2;

        &:hover {
            background: #feb300;
        }

        img {
            width: 60px;
        }

        span {
            margin-top: auto;
            font-weight: bold;
        }
    }
}
</style>
