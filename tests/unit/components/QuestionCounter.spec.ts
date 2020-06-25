import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import QuestionCounter from '@/components/QuestionCounter.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Component: QuestionCounter', () => {
    it('renders', () => {
        const wrapper = shallowMount(QuestionCounter, {
            localVue,
            propsData: { currentCount: 1, totalCount: 2 },
        });

        expect(wrapper).toMatchSnapshot();
    });
});
