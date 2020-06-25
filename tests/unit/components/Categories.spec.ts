import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Categories from '@/components/Categories.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Component: Categories', () => {
    it('renders', () => {
        const wrapper = shallowMount(Categories, {
            localVue,
            propsData: { setCurrentCategory: jest.fn() },
        });

        expect(wrapper).toMatchSnapshot();
    });
});
