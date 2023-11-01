<script setup>
</script>
<style scoped>
textarea {
    white-space:pre-line;
    width:900 px;
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
            Please complete the form below to request an academic accomodation
        </p> 
        <v-form>
            <v-container>
                <v-row>
                    <v-col
                      cols="12"
                        sm="6"
                    >
                    <v-text-field
                        v-model = "Class"
                        label = "Class"
                        hint = "What class are you requesting an accommodation for (For example: CMSC-1000-01)">
                    </v-text-field>

                    </v-col>
                    <v-col
                      cols="12"
                        sm="6"
                    >
                    <v-text-field
                        v-model = "Disability"
                        label = "Disabilitiy"
                        hint = "">
                    </v-text-field>
                    
                    </v-col>
                    <v-col
                      cols="12"
                        sm="6"
                    >
                    <textarea 
                        v-model="message"
                        class="textarea"
                        placeholder="">
                    </textarea>
                    </v-col>
                </v-row>
                
            </v-container>
        </v-form>
        <v-btn  @click="">Submit</v-btn>
    </v-container>
</template> 