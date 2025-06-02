<script setup>

    import { ref } from 'vue';

    // emits
    let emit = defineEmits(['adduser', 'close']);

    // forms data
    let UserName = '';
    let Thread = '';

    // validation data
    let UserNameError = ref(false);
    let ThreadError = ref(false);

    // add user 
    const AddUser = () => {
        // validation
        if (UserName.length < 3) UserNameError.value = true;
        else UserNameError.value = false;
        
        if (Thread.length < 3) ThreadError.value = true;
        else ThreadError.value = false;

        // emit data
        if (!UserNameError.value && !ThreadError.value) {
            emit('adduser', UserName, Thread);
        }
    };

</script>

<template>
    <div class="add-chat">
        <div class="ac-header">
            <h2>Add New Chat</h2>
            <span @click="emit('close')"><img src="./../../images/chat-list/close.svg" alt="close"></span>
        </div>
        <div class="ac-body">
            <div class="form-field">
                <p>User Name</p>
                <input type="text" :class="UserNameError ? '__error' : ''" v-model="UserName" placeholder="i.e. Jon Doe">
            </div>
            <div class="form-field">
                <p>Message</p>
                <input type="text" :class="ThreadError ? '__error' : ''" v-model="Thread" placeholder="Hello there!">
            </div>
        </div>
        <div class="action">
            <div class="btn-primary" @click="AddUser">Add</div>
            <div @click="emit('close')" class="btn-secondary">Close</div>
        </div>
    </div>

    <div class="overlay"></div>
</template>