import { VContainer } from 'vuetify/lib/components';
<style scoped>

</style>
<script setup>


import { reactive, ref, onMounted } from "vue";
import { useRouter} from "vue-router";
import requestServices from "../services/requestServices";
import studentServices from "../services/studentServices"

const router = useRouter();
const requests = ref([]);
const displayedRequests = ref([]);
const message = ref("Requests");
const studentNames = reactive(new Map());
const keyword = ref("");
const snackbar = ref(false); 

const viewRequest = (request) => {
    router.push({name: "viewRequest", params: { id: request.id}});
}
function searchRequest() {
    displayedRequests.value = [];
    requests.value.forEach(request =>{
        console.log(keyword);
        if(keyword.value == request.studentId){
            console.log(request);
            displayedRequests.value.push(request);
            console.log(displayedRequests.value);
            
            }
        
    })
    let nameRet = searchStudentName(keyword);
    if(nameRet.length != 0){
        nameRet.forEach(id =>{
            requests.value.forEach(request =>{
            if(id == request.studentId){
                console.log(request);
                displayedRequests.value.push(request);
                console.log(displayedRequests.value);
                
                }
            })
        
    })
    }
    if(displayedRequests.value.length == 0){
        displayedRequests.value = requests.value;
        snackbar.value = true;
    }
}
    


async function retrieveRequests () {
    requestServices.getAll()
    .then(async (response) =>{
        requests.value = response.data;
        displayedRequests.value = response.data;
        requests.value.forEach(async element => {
            console.log("requests loop");
            retriveStudent(element.studentId);
        });
        console.log(requests);
    })
    .catch((e) => {
        message.value = e.response.data.message;

    });
};
async function retriveStudent (studentId) {
        console.log(studentId);
        studentServices.get(studentId)
        .then((response) =>{
            let studentName = response.data.fName + " " + response.data.lName;
            let id = response.data.id;
            studentNames.set(id, studentName );
            console.log(studentNames.get(id));
        })
        .catch((e) =>{
            message.value = e.response.data.message;
        })
    
};
function searchStudentName (search) {
    console.log(search);
    let returnArr = [];
    for(let [key, value] of studentNames.entries()){
        if(value.toLowerCase().includes(search.value.toLowerCase())){
            returnArr.push(key);
        }
    }
    return returnArr;
}

onMounted(async () => {
    console.log("1")
    await retrieveRequests();       
});

</script>
<script>
</script>
<template>
    <v-snackbar v-model="snackbar">
        No results for {{ keyword }}
        <template v-slot:actions>
            <v-btn
            color = "red"
            variant = "text"
            @click = "snackbar = false">
            Close
            </v-btn>
        </template>
    </v-snackbar>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="1100"
        >
            <v-toolbar 
                    color="red"
                    dense
                    :elevation="8"
                >
                <v-toolbar-title>Accommodations</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field 
                    class="pa-6"
                    v-model="keyword"
                    prepend-inner-icon="mdi-magnify"
                    label = "Search Accomodation"
                    variant="outlined"
                    density="compact"
                    hide-details
                    single-line
                    @click:prepend-inner="searchRequest()"
                    v-on:keyup.enter="searchRequest()"
                >
            </v-text-field>
            </v-toolbar>
            <v-card-text>
                <b>{{ message }}</b> 
            </v-card-text>        
            
            <template v-for="(request) in displayedRequests" : key="request.id">
                
                <v-card variant="outlined">
                    <template v-slot:title >
                        <p v-text=studentNames.get(request.studentId)></p>
                    </template>
                    <template v-slot:subtitle>
                        {{request.category}}
                    </template>
                    <template v-slot:text>
                        {{request.status}}
                        <v-divider></v-divider>
                        
                    </template>
                    <v-card-actions>
                        <v-btn @click = "viewRequest(request)"
                        prepend-icon = "md:checklist"
                        >
                        Review
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </template>
        </v-card>
    </v-container>
</template>