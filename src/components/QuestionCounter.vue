<template>
    <b-row align-h="center">
        <b-col sm="6">
            <p class="text-center mb-3">{{ currentCount }} / {{ totalCount }}</p>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class QuestionCounter extends Vue {
    @Prop() private readonly currentCount!: number;
    @Prop() private readonly totalCount!: number;
}
</script>
