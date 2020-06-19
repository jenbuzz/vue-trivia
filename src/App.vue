<template>
    <b-container>
        <b-row align-h="center">
            <b-col sm="6">
                <h2 class="text-center mb-3">Trivia Quiz</h2>
            </b-col>
        </b-row>
        <question-counter
            v-if="!hasCompleted"
            :currentCount="currentQuestionIndex + 1"
            :totalCount="questions.length"
        />
        <b-row align-h="center">
            <b-col sm="6">
                <question-box
                    v-if="!hasCompleted"
                    :currentQuestion="questions[currentQuestionIndex]"
                    :nextQuestion="nextQuestion"
                    :incrementCorrectAnswers="incrementCorrectAnswers"
                />
                <result v-if="hasCompleted" :correctAnswers="correctAnswers" :reset="reset" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QuestionBox from '@/components/QuestionBox.vue';
import QuestionCounter from '@/components/QuestionCounter.vue';
import Result from '@/components/Result.vue';
import questions from '@/data/questions.json';

@Component({
    components: {
        'question-box': QuestionBox,
        'question-counter': QuestionCounter,
        result: Result,
    },
})
export default class App extends Vue {
    private readonly questions = questions;
    private currentQuestionIndex = 0;
    private correctAnswers = 0;
    private hasCompleted = false;

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length) {
            this.hasCompleted = true;
        }
    }

    incrementCorrectAnswers() {
        this.correctAnswers++;
    }

    reset() {
        this.currentQuestionIndex = 0;
        this.hasCompleted = false;
    }
}
</script>
