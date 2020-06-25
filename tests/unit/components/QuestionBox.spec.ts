import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import QuestionBox from '@/components/QuestionBox.vue';
import { Question } from '@/models/Question';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Component: QuestionBox', () => {
    it('renders', () => {
        const question: Question = {
            difficulty: 'easy',
            question: 'Who painted the Mona Lisa?',
            correct: 'Leonardo da Vinci',
            incorrect: ['Pablo Picasso', 'Claude Monet', 'Vincent van Gogh'],
        };

        const wrapper = shallowMount(QuestionBox, {
            localVue,
            propsData: {
                currentQuestion: question,
                nextQuestion: jest.fn(),
                incrementCorrectAnswers: jest.fn(),
            },
            data: function() {
                return {
                    answers: [
                        'Leonardo da Vinci',
                        'Vincent van Gogh',
                        'Pablo Picasso',
                        'Claude Monet',
                    ],
                };
            },
            watch: {
                currentQuestion: jest.fn(),
            },
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
