<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput label="이름" data-id="id입니다"></LabelInput>
			<hr />
			<FancyButton></FancyButton>
			<FancyButton #="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<hr />
			<AppCard>
				<!-- <template #[slotArgs]>제목입니다</template> -->
				<!-- <template #header>제목입니다</template>
				암시적으로 Default 슬롯입니다!
				<template v-slot:footer>푸터입니다</template> -->
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<template #default="{ childMessage, helloMessage }">
					디폴트입니다. {{ message }}
					<br />
					{{ childMessage }}
					<br />
					{{ helloMessage }}
				</template>
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>
			<AppCard>게시글입니다</AppCard>
		</div>
	</main>
</template>

<script>
import FancyButton from './FancyButton.vue';
import LabelInput from './LabelInput.vue';
import MyButton from './MyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요');
		};
		const slotArgs = ref('header');
		const message = ref('안녕하세요!');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
