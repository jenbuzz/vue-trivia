<template>
    <div class="text-center">
        <p>
            You got <strong>{{ correctAnswers }}</strong> correct!
        </p>
        <p>Thank you for playing!</p>
        <b-button @click="reset" variant="info">
            Play again!
        </b-button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Result extends Vue {
    @Prop() private readonly correctAnswers!: number;
    @Prop() private reset!: Function;
}
</script>
