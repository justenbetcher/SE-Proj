<script setup lang="ts">
import { useTracker, setEntry } from '@/model/tracker';
import { ref } from 'vue';

    const track = useTracker();
    setEntry();

    const categories: string[] = [
        'Resturants & Dining',
        'Entertainment & Shopping',
        'Travel',
        'Transpertaion',
        'Groceries',
        'Personal & Family Care',
        'Health',
        'Finace'
    ]

    

</script>
<template>
    <div class="container" v-if="track.entry">
        <div class="box">
            <h1 class="title">Enter your recent payment</h1>

            <p class="field">What category does your purchase fall under?</p>
            <ol class="control">
                <li v-for="category, i in categories">
                    <label class="radio">
                        <input type="radio" name="category"  v-bind:value="category"  v-model="track.entry.category">
                        {{ category }}
                    </label>
                </li>
            </ol>
            

            <p class="field">Description of your purchase</p>
            <textarea class="textarea" placeholder="description" v-model="track.entry.description"></textarea>



            <p>{{ track.entry.category }}, {{ track.entry.description }}</p>
        </div>
    </div>
</template>



<style scoped>
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.title {
    margin: 0;
    width: fit-content;
}
</style>