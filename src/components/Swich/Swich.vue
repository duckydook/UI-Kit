<template>
  <div :class="['dg-swich',{active:value}]" @click="onToggleClick">
    <div v-if="value" class="dg-swich_label dg-swich_on">ON</div>
    <div class="dg-swich_circle"></div>
    <div v-if="!value" class="dg-swich_label dg-swich_off">OFF</div>
  </div>
</template>


<script>

export default {
  name: "dg-table",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["change"],
  methods: {
    onToggleClick() {
      this.$emit("change", !this.value);
    },
  },
};
</script>

<style>
.dg-swich {
    @apply bg-blue-500 w-20 h-8 text-blue-500 rounded-full flex p-1 justify-between;

    &:hover {
      @apply cursor-pointer;
    }

    &_label{
      @apply text-white text-center text-sm pt-1 pr-3 pl-2 leading-none averta-semi-bold;
    }

    &_circle{
      @apply bg-blue-200 w-6 h-6 rounded-full
    }

    .active{
      @apply bg-blue-100
    }
}
</style>