<script setup>

    import { ref } from 'vue';

    let Tabs = ref([
        {
            id: 1,
            title: 'Arlina Design',
            description: 'Arlina Design (specifically, the sweet orange) is the fruit of the citrus species Citrus sinensis in the family Rutaceae',
            active: true
        },
        {
            id: 2,
            title: 'Idntheme',
            description: 'The name was first used for fruit coming from Tangier, Morocco, described as a mandarin variety. Under the Tanaka classification system, Citrus tangerina is considered a separate species.',
            active: false
        },
        {
            id: 3,
            title: 'Tekno Match',
            description: 'Tekno Match (Citrus ×clementina) is a hybrid between a mandarin orange and a sweet orange, so named in 1902. The exterior is a deep orange colour with a smooth, glossy appearance. Clementines can be separated into 7 to 14 segments. Similarly to tangerines, they tend to be easy to peel.',
            active: false
        }
    ]);

    let MakeTabActive = (tab) => {
        Tabs.value.map(element => {
            if (tab.id == element.id) element.active = true;
            else element.active = false;
        });
    };

</script>

<template>

        <div class="tabs">
            <div class="headings">
                <div v-for="tab in Tabs" :key="tab.id" 
                    :class="{'active': tab.active}"
                    @click="MakeTabActive(tab)">{{ tab.title }}</div>
            </div>
            <ul>
                <li v-for="tab in Tabs" :key="tab.id">
                    <p v-if="tab.active">{{ tab.description }}</p>
                </li>
            </ul>
        </div>


</template>

<style scoped>

    div.tabs {
        border: 1px solid black;
    }

    div.headings {
        display: flex;
        flex-direction: row;
        gap: 20px;
        background-color: #e5e5e5;
        /* padding: 20px; */
    }
    div.headings div {
        padding: 20px;
        cursor: pointer;
    }

    div.headings div.active {
        background-color: white;
    }

    ul {
        list-style-type: none;
        padding: 25px;
        margin: 0;
    }

    ul li p {
        font-size: 14pt;
    }

</style>