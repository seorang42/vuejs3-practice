<template>
	<div class="row g-3">
		<!-- @click="$emit('createPost', 1, 2, 3, '김길동')" -->
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option selected>Open this select menu</option>
				<option value="1">뉴스</option>
				<option value="2">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createPost'],
	emits: {
		createPost: newPost => {
			if (!newPost.title) {
				return false;
			} else if (!newPost.type) {
				return false;
			}
			return true;
		},
		// createPost : null => 유효성 검사 X
	},
	setup(props, { emit }) {
		// context.emit
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return { createPost, title };
	},
};
</script>

<style lang="scss" scoped></style>
