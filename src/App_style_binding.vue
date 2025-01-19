<template>
	<div :style="styleObject">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
		nesciunt, facere nemo accusamus ex, dolor minima necessitatibus dolorem
		maiores pariatur nam, expedita possimus voluptatum? Quia voluptates ex dolor
		at quod!
	</div>
	<button v-on:click="fontSize--">-</button>
	<button v-on:click="fontSize++">+</button>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		/* const styleObject = reactive({
			color: 'red',
			fontSize: '13px',
		}); */
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
