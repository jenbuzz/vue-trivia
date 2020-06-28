<template>
    <b-row align-h="center">
        <b-col sm="6">
            <h2 class="text-center mb-3" role="button" @click="reset">Trivia Quiz</h2>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Headline extends Vue {
    @Prop() private reset!: Function;
}
</script>
