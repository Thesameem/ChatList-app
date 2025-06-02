<script setup>

    import Comp1 from '@/components/Comp1.vue';
    import WebButton from '@/components/WebButton.vue';

    let DangerColor = 'danger';

    let isActive = true;
    let isDanger = true;

    let ClassObject = {
        active: true,
        'has-error': true,
        'has-everything': false
    };

    // binding with array
    let class1 = 'active';
    let class2 = 'has-error';


    // conditional rendering
    let Category = 'E';

    let ShowMe = true;


    // reactive, ref


</script>

<template>
    <!-- 
        
        Class and Style Binding
        1. HTML Class Binding

        a. Binding with Object
        b. Binding with Arrays
        c. Binding with Components
    
    -->

    <!-- a. Binding with Object -->
    <h1 :class="{ active: isActive }">Hello World</h1>
    <h1 :class="{ 'has-danger': isDanger }">Hello World</h1>

    <h1 :class="{ active: isActive, 'has-danger': isDanger}">Hello World with multiple class value</h1>

    <h1 class="css-style" :class="ClassObject">Hello Wrold</h1>

    <br />
    <br />
    <br />
    <!-- b. Binding with Arrays -->
    <h1 :class="[class1, class2]">Binding with Array, Hello!</h1>

    <br />
    <br />

    <!-- c. Binding with Components -->
    <Comp1 class="paragraph" />

    <WebButton class="btn-primary">Submit</WebButton>
    <WebButton class="btn-secondary">Cancel</WebButton>

    <!-- HTML Style Bindings -->
    <p :style="{backgroundColor: 'red', fontSize: '20px'}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum et dolorum accusamus non? Inventore error perspiciatis, quod ullam ex, magni maiores dignissimos similique a quidem amet, facilis odit! Fuga?</p>


    <!-- 

        Conditional Rendering
        v-if, v-else-if, v-else, v-show

    -->

    <h4 v-if="Category == 'A'">I am Category A</h4>
    <h4 v-else-if="Category == 'B'">I am Category B</h4>
    <h4 v-else-if="Category == 'C'">I am Category C</h4>
    <h4 v-else>I am Category X</h4>

    <h4 v-show="ShowMe">I am v-Show</h4>

    <h4 v-if="ShowMe">I am from v-If</h4>


</template>

<style>

    h4 {
        font-weight: bolder;
        color: chartreuse;
        font-size: 32pt;
    }

    .btn-primary {
        background: blue;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 7px;
        display: block;
        margin: 10px;
    }
    .btn-secondary {
        background: orange;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 7px;
        display: block;
        margin: 10px;
    }

    

    .css-style {
        text-align: center;
    }

    h1.active {
        color: blue;
    }

    .has-danger {
        color: red;
    }

</style>