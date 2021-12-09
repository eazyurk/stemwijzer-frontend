<template>
  <QuizQuestion />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import QuizQuestion from '@/components/QuizQuestion.vue';

@Options({
  components: {
    QuizQuestion,
  },
})
export default class Home extends Vue {}
</script>
