<template>
	<div>
		<div class="card">
			<div class="card-body">
				<!-- {{ $props }} -->
				<!-- type : news , notice -->
				<span class="badge text-bg-secondary">{{ typeName }}</span>
				<h5 class="card-title mt-2">{{ title }}</h5>
				<p class="card-text">
					{{ contents }}
				</p>
				<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
					>좋아요</a
				>
				<br />
			</div>
		</div>
	</div>
</template>

<script>
// 로직을 한번만 실행하고 싶을 때
console.log('Normal Script Setup');
</script>

<script setup>
import { computed } from 'vue';
console.log('Script Setup');

const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => ({}),
	},
});
const emit = defineEmits(['toggleLike', 'changeTitle']);
// console.log('props.title: ', props.title);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => {
	// props.isLike = !props.isLike;
	// props.obj.title = '김길동';
	emit('changeTitle');
	emit('toggleLike');
};
</script>

<style></style>
