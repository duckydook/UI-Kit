import Swich from './Swich.vue';

import { ref } from 'vue'

export default {
  title: 'Components/Swich',
  component: Swich,
};

const Template = (args) => ({
  components: { Swich },
  setup() {
    let status = ref(true)

    const setStatus = (value) => {
      status.value = value
    }

    return { args, status, setStatus };
  },
  template: '<Swich v-bind="args" @change="setStatus" />',
});

export const Primary = Template.bind({});
Primary.args = {
  value: true,
};
