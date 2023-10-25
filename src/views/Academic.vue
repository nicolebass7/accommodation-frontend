<script setup>
</script>
<style scoped>
textarea {
    white-space:pre-line;
    width:800 px;
    height:150px;
    border:3px solid #CCC;
    border-radius: 4px;
    resize: both;


}

.wrap {
    position: relative;
    display: inline-block;
}
</style>
<template>
    <v-container>
        <v-toolbar-title>Academic Accommodations</v-toolbar-title>
        <br /><br />
        <p>
            This is the page to request an academic accommodation
        </p>
         <p>
            Please specify below your reasons for requesting an academic accomodation:
        </p>
        <v-form>
            <textarea v-model="message" class="textarea" placeholder="Enter reasons here"></textarea>
        </v-form>
        <v-btn  @click="">Submit</v-btn>
    </v-container>
</template> 