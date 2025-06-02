<script setup>

    // Data Binding
    let Message = 'Hello World!';

    // Attribute binding
    let DarkTheme = 'dark';
    let GoogleLink = "https://google.com";
    let Target = "_blank";

    // Boolean attribute binding
    let isDisabled = false;
    let isChecked = true;

    // Dyanmically binding multiple attributes
    let DynamicAttributes = {
        class: 'box',
        id: 'myBox',
        style: 'background-color: red',
        'data-name': 'my name'
    };
    

    // Using JS Expressions
    let myNumber = 20;
    let isOlder = 12;


    // function to bind
    let printMyName = (str) => {
        return str;
    };

</script>

<template>

    <!-- Template Syntax 
        1. Data Binding
        2. Attribute Binding
        3. Boolean Attribute Binding
        4. Dyanmically binding multiple attributes    
    -->

    <h1>Template Syntax</h1>


    <!-- Data binding -->
    <h1>{{ Message }}</h1>

    <!-- Attribute Binding -->
    <div :class="DarkTheme">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta aspernatur qui maxime eius ipsa illum impedit autem dolorem ipsum corporis neque eaque cum mollitia laudantium doloribus quae hic, distinctio tenetur.</p>
        <a :href="GoogleLink" :target="Target">Open Google</a>
    </div>

    <br />

    <!-- Boolean Attribute Binding -->
    <input type="text" placeholder="Enter Name" :disabled="isDisabled">
    <br />
    <input type="checkbox" name="age" :checked="isChecked">

    <!-- Dyanmically binding multiple attributes  -->
    <div v-bind="DynamicAttributes">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate dolorem in, dolorum animi recusandae id perferendis, reprehenderit a, atque eveniet. Excepturi optio voluptatibus adipisci corrupti voluptas consequatur. Error, minima.</p>
    </div>

    <br />
    <br />
    <br />
    <br />

    <h1>Using JavaScript Expressions</h1>

    <!-- 

        Using JavaScript Expressions

         1. Increment/Decrement/Addition etc expressions
         2. Condition expression
         3. Inbuilt string/array methods/function
         4. Template Literals
         5. Calling functions

    -->

    <!-- 1. Increment/Decrement/Addition etc expressions -->

    <h2>{{ myNumber + 80 }}</h2>

    <!-- 2. Condition expression -->
    <p>is user older?</p>
    <h2>{{ isOlder > 18 ? 'Yes' : 'No' }}</h2>


    <!-- 3. Inbuilt string/array methods/function -->
    <h1>{{ Message.toUpperCase() }}</h1>
    <p>{{ Message.split('').reverse().join('').toUpperCase() }}</p>

    <!-- 4. Template Literals -->
    <div :class="`box-${isOlder}`"></div>
    <div class="box-13"></div>


    <br />
    <!-- 5. Calling functions -->
    <h1>{{ printMyName('my name is Bishal') }}</h1>
    
    

  

</template>

<style scoped>

.paragraph {
        color: orange;
        font-size: 16pt;
    }

    div.dark {
        background-color: black;
        padding: 20px;
    }
    div.dark p {
        color: white;
    }
    div.dark a {
        color: white;
    }


</style>