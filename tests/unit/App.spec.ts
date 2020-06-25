import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Component: App', () => {
    it('renders', () => {
        const wrapper = shallowMount(App, {
            localVue,
        });

        expect(wrapper).toMatchSnapshot();
    });
});
