export default {
  beforeMount(el, binding) {
    el.innerHTML = binding.value;
  },
};
