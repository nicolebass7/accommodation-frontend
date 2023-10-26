<script setup>
import { ref, onMounted } from "vue";
import requestServices from "../services/requestServices";
import Utils from "../config/utils.js";
import { useRouter } from "vue-router";

const router = useRouter();
const valid = ref(false);
const user = Utils.getStore("user");
const checkedNames = ref([]);
const selected = ref('');

const student = ref({
  id: null,
  fName: "",
  lName: "",
  studentId: "",
  
});

const saverequest = () => {
  const data = {
    fName: student.value.fName,
    lName: student.value.lName,
    studentId: student.value.studentId,
   
    //userId: user.userId,

  };
  requestServices.create(data)
    .then((response) => {
      student.value.id = response.data.id;
      console.log("add " + response.data);
      router.push({ name: "student" });
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const cancel = () => {
  router.push({ name: "student" });
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
      <!-- <h4>{{ message }}</h4> -->

      <br />
      <v-form ref="form" v-model="valid" lazy validation>
        <v-text-field
          v-model="student.fName"
          id="fName"
          :counter="50"
          label="First Name "
          required
        ></v-text-field>
        <v-text-field
          v-model="student.lName"
          id="lName"
          :counter="50"
          label="Last Name "
          required
        ></v-text-field>
        <v-text-field
          v-model="student.studentId"
          id="studentId"
          :counter="7"
          label="Student ID"
          required
        ></v-text-field> 

        <div class="mainSelection">Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>2023FA</option>
  <option>2024SP</option>
 
</select><br>

   <input type="checkbox" id="Academic" value="Academic" v-model="checkedNames">
    <label for="Academic">Academic</label> 

    <input type="checkbox" id="Housing" value="Housing" v-model="checkedNames">
    <label for="Housing">Housing</label>

    <input type="checkbox" id="Meals" value="Meals" v-model="checkedNames">
    <label for="Meals">Meals</label>

    <input type="checkbox" id="Chapel" value="Chapel" v-model="checkedNames">
    <label for="Chapel">Chapel</label><br>

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

.mainSelection {
    overflow:hidden;
    width:350px;
    margin-left:35px;
    background: url("/dropdown-arrow.png") no-repeat #fff 319px 2px;
    /* dropdown_arrow.png is a 31x28 image */
}

  select {
    border: 0;
    background:transparent;
    height:32px;
    border:3px solid #CCC;
    width:175px;

 
}


</style>
