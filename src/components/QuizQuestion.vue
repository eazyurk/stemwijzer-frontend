<template>
  <div class="w-1/4 border border-gray-300 rounded p-2 flex flex-col">
    <div class="py-3"> <!-- Question content -->
      <h3 class="text-2xl text-blue-700 font-bold">
        Vaccinatiebewijs
      </h3>
      <p>
        Organisatoren van evenementen moeten bij de toegang een vaccinatiebewijs kunnen vragen.
      </p>
    </div>
    <div class="flex justify-between"> <!-- Question footer -->
      <button class="bg-red-500 hover:bg-red-600 font-bold
      py-3 px-8 rounded inline-flex items-center text-white">
        Oneens
      </button>
      <button class="bg-gray-500 hover:bg-gray-600 font-bold
      py-3 px-8 rounded inline-flex items-center text-white">
        Geen van beide
      </button>
      <button class="bg-green-500 hover:bg-green-600 font-bold
      py-3 px-8 rounded inline-flex items-center text-white"
      @click="agree()">
        Mee eens
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class QuizQuestion extends Vue {
  agree(): any {
    console.log('123');
  }
}
</script>
