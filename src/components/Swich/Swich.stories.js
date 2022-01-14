import Swich from './Swich.vue';

import { ref } from 'vue'

export default {
  title: 'Components/Swich',
  component: Swich,
};

const Template = (args) => ({
  components: { Swich },
  setup() {
    let selected = ref()

    const setSelected = (value) => {
      selected.value = value
    }

    return { args, selected, setSelected };
  },
  template: '<Swich v-bind="args" :value="selected" @select="setSelected" />',
});

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Placeholder",
  label: "Label",
};
