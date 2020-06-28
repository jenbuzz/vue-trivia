import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Headline from '@/components/Headline.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Component: Headline', () => {
    it('renders', () => {
        const wrapper = shallowMount(Headline, {
            localVue,
            propsData: { reset: jest.fn() },
        });

        expect(wrapper).toMatchSnapshot();
    });
});
