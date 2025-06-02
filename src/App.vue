<script setup>

  /* 
      Template Syntax 
      1. Data Binding
      2. Attribute Binding
      3. Boolean Attribute Binding
      4. Dyanmically binding multiple attributes 
      
      Using JavaScript Expressions
      1. Increment/Decrement/Addition etc expressions
      2. Condition expression
      3. Inbuilt string/array methods/function
      4. Template Literals
      5. Calling functions
  */
  import Class1 from './classes/Class1.vue';

  /*
      Class and Style Binding
        1. HTML Class Binding

        a. Binding with Object
        b. Binding with Arrays
        c. Binding with Components

        2. Conditional Rendering
        v-if, v-else-if, v-else, v-show
   */

  import Class2 from './classes/Class2.vue';
  import Class3 from './classes/Class3.vue';
  import Class4 from './classes/Class4.vue';

  // reactivity data and practice
  import Class5 from './classes/Class5.vue';
  import Tabs from './classes/class5/Tabs.vue';
  import Password from './classes/class5/Password.vue';

  // accordion and model box practice
  import Class6 from './classes/Class6.vue';
  import Accordion from './classes/class6/Accordion.vue';

  // class 7, 8 and 9 -> chat-list v1, v2, final version
  import Class7 from './classes/Class7.vue';
  import Class8 from './classes/Class8.vue';
  import Class9 from './classes/Class9.vue';


</script>

<template>


  <Class9 />

</template>

<style>

  * {
    padding: 0;
    margin: 0;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;
  }
  

  div.body-wrapper {
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

</style>