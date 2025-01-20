<template>
	<div class="container py-4">
		{{ msg }}
		<input v-model="message" type="text" />
		<button @click="sayHello">Say Hello</button>
		<PostItem type="news" title="제목" contents="내용" :is-like="true" />
		<hr />
		<TemplateRefChild ref="child" />
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from './setup/PostItem.vue';
import TemplateRefChild from './setup/TemplateRefChild.vue';
import MyButton from './setup/MyButton.vue';
import axios from 'axios';

const msg = 'Hello World!';
const message = ref('');
const sayHello = () => {
	alert('Hello World');
};
const child = ref(null);
defineExpose({ msg });
// async가 없어도 top level에서 await 사용 가능 => async setup() 역할을 하기 때문
const response = await axios('https://jsonplaceholder.typicode.com/posts');
console.log('response: ', response);
/* async function callApi() {
	axios('https://jsonplaceholder.typicode.com/posts').then(response => {
		console.log('response: ', response);
	});
}
callApi(); */
</script>

<style lang="scss" scoped></style>
