<template>
	<div>
		<p>{{ message }}</p>
		<button v-on:click="addMessage">Add !</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello World');
		const addMessage = () => {
			message.value += '!';
		};
		return { message, addMessage };
	},
};
</script>

<style lang="scss" scoped></style>
