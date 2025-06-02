<script setup>

    import { ref } from 'vue';

    // props
    let props = defineProps({
        editUser: {
            type: Object,
            default: {}
        }
    });

    // emits
    let emit = defineEmits(['updateuser', 'close']);

    // forms data
    let UserName =  props.editUser.name;
    let Thread = props.editUser.thread;

    // validation data
    let UserNameError = ref(false);
    let ThreadError = ref(false);

    // this function create new object of updated user
    // it update username and thread only
    const UpdateUser = () => {
        // validation for name thread
        if (UserName.length < 3) UserNameError.value = true;
        else UserNameError.value = false;
        
        if (Thread.length < 3) ThreadError.value = true;
        else ThreadError.value = false;

        
        if (!UserNameError.value && !ThreadError.value) {
            let CurrentUser = {
                id: props.editUser.id,
                name: UserName,
                thread: Thread
            };

            // emited with updated user
            emit('updateuser', CurrentUser);
        }
    };

</script>

<template>
    <div class="add-chat">
        <div class="ac-header">
            <h2>Edit User</h2>
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
            <div class="btn-primary" @click="UpdateUser">Update</div>
            <div @click="emit('close')" class="btn-secondary">Close</div>
        </div>
    </div>

    <div class="overlay"></div>
</template>