<script setup>
import {ref, onMounted} from "vue";
import requestServices from '../services/requestServices';
import studentServices from "../services/studentServices";
import { useRouter } from "vue-router";


const router = useRouter();
const Request = ref({})
const Student = ref({})
const message = ref("Request Details");
const props = defineProps({
  id: {
    required: true,
  },
});

const retriveStudentName = () => {
    studentServices.get(Request.value.studentId)
        .then((response) =>{
            Student.value = response.data;
        })
        .catch((e) =>{
            message.value = e.response.data.message;
        })
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
    <v-card
        class="mx-auto"
        width = "800"

    >
        <v-card-text>
            <p class = "text-h5">
                {{ Request.category }} Request
            </p>
            <div>{{ Request.status }}</div>
        </v-card-text>
    </v-card>
    <v-card>
        <v-btn>Accept Accomodation</v-btn>
        <v-btn
        @click="rejectOverlay = !rejectOverlay"
        >Reject Accomodation</v-btn>
        <v-overlay v-model="rejectOverlay"></v-overlay>
    </v-card>   
</template>