<script setup>
import studentServices from "../services/studentServices";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const students = ref([]);
const user = Utils.getStore("user");
const message = ref("Search, Edit or Delete Tutorials");

const editTutorial = (students) => {
  router.push({ name: "edit", params: { id: students.id } });
};

const viewTutorial = (students) => {
  router.push({ name: "view", params: { id: students.id } });
};

const deleteTutorial = (students) => {
  studentServices.delete(students.id)
    .then(() => {
      retrieveTutorials();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const retrieveTutorials = () => {
  studentServices.getAllForUser(user.userId)
    .then((response) => {
      student.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveTutorials();
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
        <v-card-title> Tutorials </v-card-title>
        <v-card-text>
          <b>{{ message }}</b>
        </v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Description</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in students" :key="item.fName">
              <td>{{ item.fName }}</td>
              <td>{{ item.lName }}</td>
              <td>
                <v-icon small class="mx-4" @click="editTutorial(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="viewTutorial(item)">
                  mdi-format-list-bulleted-type
                </v-icon>
                <v-icon small class="mx-4" @click="deleteTutorial(item)">
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
