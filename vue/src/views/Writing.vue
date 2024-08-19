<script setup>
import { ref } from 'vue';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

const contentStyle = {
    marginTop: '64px',
    backgroundColor: '#fff'
}

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: '#fff',
}




const essayMsg = ref('');
const allWords = ref(0);
function countWords() {
    if(!essayMsg.value){
        allWords.value = 0
    }
    else{
     allWords.value = essayMsg.value.trim().split(' ').length
    }
}

const tab1 = ref(true);
const tab2 = ref(false)

function setActiveTab (name) {
  if(name === 'tab1'){
    tab1.value = true;
    tab2.value = false
    console.log(tab1.value, tab2.value)
  }
  else if(name === 'tab2'){
    tab2.value = true;
    tab1.value = false
    console.log(tab1.value, tab2.value)
  }
}
</script>

<template>
    <a-layout>
        <a-layout-header class="w-header" :style="{position: 'fixed', zIndex: 1, width: '100%'}">
            <div class="logo">
                Inspera
            </div>
            
        </a-layout-header>
        <a-layout-content :style="contentStyle">
            <a-card class="w-card" v-if="tab1">
                <p><b>Part 1</b></p>
                <p>You should spend about 20 minutes on this task. Write at least 150 words.</p>
            </a-card>

            <a-card class="w-card" v-if="tab2">
                <p><b>Part 2</b></p>
                <p>You should spend about 40 minutes on this task. Write at least 250 words.</p>
            </a-card>

            <section style="margin: 30px;" v-if="tab1">
                <splitpanes class="default-theme" vertical style="height: 70vh">
                    <pane class="w-pane">
                        <p><b>The chart below shows the number of adults participating in different major sports in one area, in 1997 and 2017. 
                        </b></p>
                        <p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>

                        <img src="https://demo-ielts.inspera.com/file/cil/content_item_53239007_128124906/img?cacheable=true&assessmentRunId=131013741" alt="">
                    </pane>
                    <pane class="w-pane">
                        <a-textarea @input="countWords"  v-model:value="essayMsg" style="height: 200px;"></a-textarea>
                        <p style="float: right; margin-top: 10px;">Words: {{ allWords }}</p>
                    </pane>
                </splitpanes>
            </section>

            <section style="margin: 30px;"  v-if="tab2">
                <splitpanes class="default-theme" vertical style="height: 70vh">
                    <pane class="w-pane">
                        <p>Write about the following topic:
                        </p>
                        <p><b>The world of work is changing rapidly and employees cannot depend on having the same job or the same working conditions for life. 
                        </b></p>
                        <p><b>Discuss the possible causes for this rapid change, and suggest ways of preparing people for the world of work in the future.
                        </b></p>
                        <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.
                        </p>
                    </pane>
                    <pane class="w-pane">
                        <a-textarea @input="countWords"  v-model:value="essayMsg" style="height: 200px;"></a-textarea>
                        <p style="float: right; margin-top: 10px;">Words: {{ allWords }}</p>
                    </pane>
                </splitpanes>
            </section>
        </a-layout-content>

            <a-row style="width: 100%; position: fixed; bottom: 0;">
                <a-col @click="setActiveTab('tab1')" :class="tab1 ? 'active-tab' : ''" class="w-part1" :span="12">Part 1</a-col>
                <a-col  @click="setActiveTab('tab2')" :class="tab2 ? 'active-tab' : ''"  class="w-part2" :span="12">Part 2</a-col>
            </a-row>
    </a-layout>
</template>

<style scoped>
 .w-header{
    background: #fff;
    border-bottom: 1px solid #d5d5d5;
 }

 .logo{
    font-size: 25px;
    color: red;
    font-weight: 900;
 }

 .w-card{
 width: 95%;
 margin: auto;
 background: #f1f2ec;
 border: 1px solid #d5d5d5;
 padding: .1em 1em;
 margin-top: 20px;
 font-size: 17px;
 }

 .w-pane {
    padding: 20px;
    display: block;
    line-height: 40px;
 }

 .w-part1{
 width: 50%;
 background: #fff;
 height: 60px;
 padding: 10px;
 font-size: 20px;
 cursor: pointer;
 }

 .w-part2{
 width: 50%;
 background: #fff;
 height: 60px;
 padding: 10px;
 font-size: 20px;
 cursor: pointer;

 }

 .w-part2:hover{
    background: #e6e6e6;
    border-top: 2px solid gray;
 }

 .w-part1:hover{
    background: #e6e6e6;
    border-top: 2px solid gray;
 }

 .active-tab{
    border-top: 2px solid gray;
    font-weight: 600;
    background: #e6e6e6;
 }
</style>