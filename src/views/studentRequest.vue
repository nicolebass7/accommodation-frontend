<script setup>
import studentServices from "../services/studentServices";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const students = ref([]);
const user = Utils.getStore("user");
const message = ref("Search, Edit or Delete Requests");

const editRequest = (students) => {
  router.push({ name: "edit", params: { id: students.id } });
};

const viewRequest = (students) => {
  router.push({ name: "view", params: { id: students.id } });
};

const deleteRequest = (students) => {
  studentServices.delete(students.id)
    .then(() => {
      retrieveRequests();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const retrieveRequests = () => {
  studentServices.getAllForUser(user.userId)
    .then((response) => {
      student.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveRequests();
</script>

<template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title
          >Hello, {{ user.fName }} {{ user.lName }}!</v-toolbar-title
        >
      </v-toolbar>
      <br /><br />
      <v-card>
        <v-card-title> Requests </v-card-title>
        <v-card-text>
          <b>{{ message }}</b>
        </v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Student Name</th>
              <th class="text-left">Last Name</th>
              <th class="text-left">Student Id</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in students" :key="item.fName">
              <td>{{ item.fName }}</td>
              <td>{{ item.lName }}</td>
              <td>
                <v-icon small class="mx-4" @click="editRequest(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="viewRequest(item)">
                  mdi-format-list-bulleted-type
                </v-icon>
                <v-icon small class="mx-4" @click="deleteRequest(item)">
                  mdi-trash-can
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
  </div>
</template>
