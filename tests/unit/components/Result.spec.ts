import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Result from '@/components/Result.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Component: Result', () => {
    it('renders', () => {
        const wrapper = shallowMount(Result, {
            localVue,
            propsData: { correctAnswers: 2, reset: jest.fn() },
        });

        expect(wrapper).toMatchSnapshot();
    });
});
