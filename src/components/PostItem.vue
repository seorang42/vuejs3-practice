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
import { computed } from 'vue';

export default {
	// props: ['title', 'contents'],
	props: {
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
	},
	emits: ['toggleLike', 'changeTitle'],
	setup(props, context) {
		// console.log('props.title: ', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		const toggleLike = () => {
			// props.isLike = !props.isLike;
			// props.obj.title = '김길동';
			context.emit('changeTitle');
			context.emit('toggleLike');
		};
		return { isLikeClass, typeName, toggleLike };
	},
};
</script>

<style></style>
