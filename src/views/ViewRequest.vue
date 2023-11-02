<script setup>
import {ref, onMounted} from "vue";
import requestServices from '../services/requestServices';
import studentServices from "../services/studentServices";
import { useRouter } from "vue-router";


const router = useRouter();
const Request = ref({})
const Student = ref({})
const message = ref("");
const props = defineProps({
  id: {
    required: true,
  },
});

const requests = () => {
    router.push({name: "adminAccomList"});
}
const retriveStudentName = () => {
    studentServices.get(Request.value.studentId)
        .then((response) =>{
            Student.value = response.data;
        })
        .catch((e) =>{
            message.value = e.response.data.message;
        })
}

const rejectRequest = async () => {
    const data = {
        status: "Rejected",
    };
    console.log(props.id);
    console.log(data);
    await requestServices.update(props.id, data)
    .then(() => {
        router.push({ name: "adminAccomList" });
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
}
async function retrieveRequest(){
  await requestServices.get(props.id)
  .then((response) => {
    Request.value = response.data;
  })
  .catch((e) => {
    message.value = e.response.data.message;
  });
};

onMounted(async () => {
  await retrieveRequest();
  retriveStudentName();
   
});
</script>

<template>
    <v-btn
    variant="text"
    prepend-icon="mdi-arrow-left"
    @click="requests()">
        Requests
    </v-btn>
    <v-card-text>
        <b>{{ message }}</b> 
    </v-card-text> 
    <v-container>
        <v-text> 
            <p class="text-h5">{{ Student.fName }} {{ Student.lName }}'s Request</p>
            <v-divider></v-divider>
            <div>Student ID: {{ Student.studentId }}</div>
            
        </v-text>
    </v-container>
    <v-container>
    <v-card
        class="mx-auto"
        width = "1000"

    >
        <v-card-text>
            <p class = "text-h4">
                {{ Request.category }} Request
            </p>
            <p class="text-subtitle-1 font-italic">{{ Request.status }}</p>
            <v-divider></v-divider>
            <p class = "text-h5"> Student States:</p>
            <div>{{ Request.grievances }}</div>
        </v-card-text>
   
    <v-toolbar
    class="mx-auto"
    width = "600"
    >
        
        <v-btn 
        color="green"
        @click="acceptRequest()"
        >
        Accept
        </v-btn>
        <v-spacer></v-spacer>
       
        <v-btn
        color="red">
        Reject
            <v-overlay
                activator="parent"
                class="align-center justify-center"
            >
            <v-card
            :width="800"
            :height="250"
            >
                <v-container>
                <v-textarea
                    :height="500"
                    :width="800"
                    no-resize
                    variant="outlined"
                    placeholder="Enter reasons for rejection here">
                </v-textarea>
                </v-container>
                <v-row 
                    justify="center" 
                    align="right"
                    >
                    <v-column>
                    <v-btn 
                    variant="tonal"
                    @click = "rejectRequest()"
                    >
                    Save
                    
                    </v-btn>
                    </v-column>
                </v-row>
            </v-card>
        </v-overlay>
        </v-btn>
        
        
        
    </v-toolbar>
</v-card>
</v-container>   
</template>