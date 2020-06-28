<template>
    <b-container>
        <headline :reset="reset" />
        <categories v-if="!currentCategory" :setCurrentCategory="setCurrentCategory"></categories>
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
import Categories from '@/components/Categories.vue';
import Headline from '@/components/Headline.vue';
import QuestionBox from '@/components/QuestionBox.vue';
import QuestionCounter from '@/components/QuestionCounter.vue';
import Result from '@/components/Result.vue';
import { Question } from '@/models/Question';
import questionsArt from '@/data/art.json';
import questionsEntertainment from '@/data/entertainment.json';
import questionsHistory from '@/data/history.json';

@Component({
    components: {
        categories: Categories,
        headline: Headline,
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
