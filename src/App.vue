<template>
    <b-container>
        <b-row align-h="center">
            <b-col sm="6">
                <h2 class="text-center mb-3">Trivia Quiz</h2>
            </b-col>
        </b-row>
        <b-row align-h="center" v-if="!currentCategory">
            <b-col sm="6" class="categories text-center">
                <button type="button" class="btn btn-category" @click="setCurrentCategory('art')">
                    <img alt="Art Category" src="./assets/art.svg" />
                    <span>Art</span>
                </button>
                <button
                    type="button"
                    class="btn btn-category"
                    @click="setCurrentCategory('entertainment')"
                >
                    <img alt="Entertainment Category" src="./assets/entertainment.svg" />
                    <span>Entertainment</span>
                </button>
                <button
                    type="button"
                    class="btn btn-category"
                    @click="setCurrentCategory('history')"
                >
                    <img alt="History Category" src="./assets/history.svg" />
                    <span>History</span>
                </button>
            </b-col>
        </b-row>
        <question-counter
            v-if="!hasCompleted && currentCategory"
            :currentCount="currentQuestionIndex + 1"
            :totalCount="questions.length"
        />
        <b-row align-h="center" v-if="currentCategory">
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
import { Question } from '@/models/Question';
import questionsArt from '@/data/art.json';
import questionsEntertainment from '@/data/entertainment.json';
import questionsHistory from '@/data/history.json';

@Component({
    components: {
        'question-box': QuestionBox,
        'question-counter': QuestionCounter,
        result: Result,
    },
})
export default class App extends Vue {
    private questions: Question[] = [];
    private currentQuestionIndex = 0;
    private correctAnswers = 0;
    private hasCompleted = false;
    private currentCategory = '';

    setCurrentCategory(category: string) {
        this.currentCategory = category;

        switch (category) {
            case 'art':
                this.questions = questionsArt;
                return;
            case 'entertainment':
                this.questions = questionsEntertainment;
                return;
            case 'history':
                this.questions = questionsHistory;
                return;
        }
    }

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
        this.correctAnswers = 0;
        this.currentCategory = '';
        this.questions = [];
    }
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
        background: #eeeeee;

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
