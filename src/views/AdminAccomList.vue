
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
const message = ref("Requests");

const studentNames = reactive(new Map()); 

const viewRequest = (request) => {
    router.push({name: "ViewRequest", params: { id: request.id}});
}
const searchRequest = () => {
    
}

async function retrieveRequests () {
    await requestServices.getAll()
    .then(async (response) =>{
        requests.value = response.data;
        requests.value.forEach(element => {
            console.log("requests loop")
            //retriveStudent(element.studentId);
        });
        console.log(requests);
    })
    .catch((e) => {
        message.value = e.response.data.message;

    });
};
async function retriveStudent (studentId) {
        console.log(studentId);
        await studentServices.get(studentId)
        .then((response) =>{
            let studentName = response.data.fName + " " + response.data.lName;
            let id = response.data.id;
            studentNames.set(id, studentName );
            console.log(studentNames.get(id));
        })
        .catch((e) =>{
            message.value = e.response.data.message;
        })
    
}
async function retriveStudents () {
    console.log("3");
    studentServices.getAll()
    .then((response) =>{
        console.log(response.data);
        for(let n in response){
            let studentName = n.fName + " " + n.lName;
            console.log()
            studentNames.set(n.id, studentName);
            console.log(studentNames);
        }
    })
    .catch((e) =>{
        message.value = e.response.data.message;
    })
}

onMounted(async () => {
    console.log("1")
    retrieveRequests();
    /*for(n in requests.value){
        console.log('loop');
        await retriveStudent(n.studentId);
    }*/        
});

async function findStudentNameWID (studentId) { 
        console.log("studentId=" + studentId);
        studentServices.get(studentId)
        .then((response) =>{
            console.log(response.data);
            let studentName = response.data.fName + " " + response.data.lName;
            console.log(studentName);
            return studentName;
        })
        .catch((e) =>{
            message.value = e.response.data.message;
        })
    }
async function findStudentNameFromMap(key) {
        let sName = String;
        sName = await studentNames.get(key);
        console.log("name is "+ sName);
        return sName;
    }



</script>
<script>
</script>
<template>
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
                >
            </v-text-field>
            </v-toolbar>
            <v-card-text>
                <b>{{ message }}</b> 
            </v-card-text>        
            <v-virtual-scroll
            :items="items"
            height="320"
            item-height="48"
            >
            <template v-for="(item) in requests" : key="item.id">
                
                <v-card variant="outlined">
                    <template v-slot:title>
                        {{ item.studentId }}
                        {{ retriveStudent(item.studentId).finally(findStudentNameFromMap(item.studentId)) }}
                        
                    </template>
                    <template v-slot:subtitle>
                        {{item.category}}
                    </template>
                    <template v-slot:text>
                        {{item.status}}
                        <v-divider></v-divider>
                        
                    </template>
                    <v-card-actions>
                        <v-btn
                            prepend-icon = "mdi-check-circle"
                            @click = "viewRequest(item)"
                        >
                        Review
                        </v-btn>
                    </v-card-actions>
                </v-card>
                
            
            </template>

            </v-virtual-scroll>
        </v-card>
    </v-container>
</template>