<template>
    <div>
        <p v-html="currentQuestion.question"></p>
        <b-list-group :class="[disableList && 'disabled']">
            <b-list-group-item
                v-for="(answer, index) in answers"
                :key="index"
                @click="setSelectedAnswer(index)"
                :class="getClassName(index)"
            >
                <span v-html="answer"></span>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Question } from '../models/Question';

@Component
export default class QuestionBox extends Vue {
    @Prop() private readonly currentQuestion!: Question;
    @Prop() private nextQuestion!: Function;
    @Prop() private incrementCorrectAnswers!: Function;

    private answers: string[] | null = null;
    private selectedAnswer: number | null = null;
    private correctAnswer: number | null = null;
    private disableList = false;

    @Watch('currentQuestion', { immediate: true })
    onNewQuestion() {
        this.selectedAnswer = null;
        this.disableList = false;

        const answers = [...this.currentQuestion.incorrect, this.currentQuestion.correct];

        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const tmp = answers[i];
            answers[i] = answers[j];
            answers[j] = tmp;
        }

        this.answers = answers;
        this.correctAnswer = answers.indexOf(this.currentQuestion.correct);
    }

    setSelectedAnswer(index: number) {
        this.selectedAnswer = index;
        this.disableList = true;

        if (this.selectedAnswer === this.correctAnswer) {
            this.incrementCorrectAnswers();
        }

        setTimeout(() => {
            this.nextQuestion();
        }, 500);
    }

    getClassName(index: number): string {
        if (index === this.selectedAnswer && index === this.correctAnswer) {
            return 'positive';
        }

        if (index === this.selectedAnswer && index !== this.correctAnswer) {
            return 'negative';
        }

        return '';
    }
}
</script>

<style scoped lang="scss">
p {
    font-weight: 600;
}

.list-group {
    border: 1px solid #222222;

    .list-group-item {
        border: 0;
        cursor: pointer;

        &:hover {
            background: #e2e2e2;
        }

        &.positive {
            background: #68d388;
            color: #ffffff;
        }

        &.negative {
            background: #ff0028;
            color: #ffffff;
        }
    }

    &.disabled {
        .list-group-item:not(.positive):not(.negative) {
            &:hover {
                background: none;
            }
        }
    }
}
</style>
