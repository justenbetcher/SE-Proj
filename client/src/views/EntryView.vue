<script setup lang="ts">
import { useTracker, setEntry } from '@/model/tracker';

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

        <div class="control">
            <label class="radio" v-for="category, i in categories">
                <input type="radio" name="category"  v-bind:value="category"  v-model="track.entry.category">
                {{ category }}
            </label>
        </div>

        <p>{{ track.entry.category }}</p>
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