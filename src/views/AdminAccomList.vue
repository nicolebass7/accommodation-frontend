
import { VContainer } from 'vuetify/lib/components';
<style scoped>

</style>
<script setup>
import RequestServices from "../services/requestServices";
import { ref } from "vue";
import { useRouter} from "vue-router";
import requestServices from "../services/requestServices";

const router = useRouter();
const requests = ref([]);
const message = ref("Requests");


const viewRequest = (request) => {
    router.push({name: "ViewRequst", params: { id: request.id}});
}
const searchRequest = () => {
    
}

const retriveRequest = () => {
    requestServices.getAll()
    .then((response) =>{
        requests.value = response.data;
        console.log(requests.value);
    })
    .catch((e) => {
        message.value = e.response.data.message;

    });
};

retriveRequest();

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
            <template v-for="(item) in requests" : key="item.title">
                <v-list-item
                :title="item.studentID">
            
            </v-list-item>
                
            
            </template>

            </v-virtual-scroll>
        </v-card>
    </v-container>
</template>