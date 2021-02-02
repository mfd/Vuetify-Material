<template>
  <base-hero
    :src="require('@/assets/luke-matthews-T4PTfNwgbEM-unsplash.jpg')"
    gradient="to top, #419B911F, transparent"
    v-bind="$attrs"
  >
    <slot />
  </base-hero>
</template>
