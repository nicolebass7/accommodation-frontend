<script setup>
import { ref, onMounted } from "vue";
import requestServices from "../services/requestServices";
import Utils from "../config/utils.js";
import { useRouter } from "vue-router";

const router = useRouter();
const valid = ref(false);
const user = Utils.getStore("user");
const request = ref({
  id: null,
  fName: "",
  lName: "",
  studentId: "",
  published: false,
});

const saverequest = () => {
  const data = {
    fName: request.value.fName,
    lName: request.value.lName,
    studentId: request.value.studentId,
    published: true,
    userId: user.userId,
  };
  requestServices.create(data)
    .then((response) => {
      request.value.id = response.data.id;
      console.log("add " + response.data);
      router.push({ name: "tutorials" });
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const cancel = () => {
  router.push({ name: "tutorials" });
};


const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

onMounted(() => {
  user.value = Utils.getStore("user");
});
</script>

<template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title>Request Form</v-toolbar-title>
      </v-toolbar>

      <br />
      <h4>{{ message }}</h4>
      <br />
      <v-form ref="form" v-model="valid" lazy validation>
        <v-text-field
          v-model="request.fName"
          id="fName"
          :counter="100"
          label="First Name "
          required
        ></v-text-field>
        <v-text-field
          v-model="request.lName"
          id="lName"
          :counter="100"
          label="Last Name "
          required
        ></v-text-field>
        <v-text-field
          v-model="request.studentId"
          id="studentId"
          :counter="50"
          label="Student ID"
          required
        ></v-text-field> 

        <span>Requests:  </span>
          <p>{{ message }}</p>
          <textarea class= "wrap" v-model="message" placeholder="Type your grievances here..."></textarea>
        <br><br>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="saverequest"
        >
          Save
        </v-btn>

        <v-btn color="error" class="mr-4" @click="cancel">Cancel</v-btn>
      </v-form>
    </v-container>
  </div>
</template>
<style scoped>


textarea {
    white-space: pre-line;
    width: 450px;
    height: 150px;
    border:3px solid #CCC;
    border-radius: 4px;
    resize: both;
  
}

.wrap {
    position: relative;
    display: inline-block;
}
  
.wrap:after {
    content:"";
    border-top: 2px solid #555;
    width:16px;
    transform: rotate(-45deg);
    background:transparent;
    position: absolute;
    right: 1px;
    bottom: 14px;
    pointer-events: none;
    border-radius:25%;
}

</style>
