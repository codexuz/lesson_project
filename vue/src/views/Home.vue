<template>
  <div>
    <SurveyComponent 
      :model="surveyModel"
      @complete="onComplete"
    />
  </div>
</template>

<script setup>
import { Model } from 'survey-core';
import 'survey-core/defaultV2.min.css';
import { ref } from 'vue';

// Register the UI components

const surveyJson = {
  title: "IELTS Listening Test Builder",
  elements: [
    {
      type: "text",
      name: "testTitle",
      title: "Test Title",
      isRequired: true
    },
    {
      type: "paneldynamic",
      name: "questions",
      title: "Questions",
      isRequired: true,
      panelCount: 1,
      minPanelCount: 1,
      panelAddText: "Add Question",
      templateElements: [
        {
          type: "dropdown",
          name: "questionType",
          title: "Select Question Type",
          isRequired: true,
          choices: [
            "Multiple Choice",
            "Matching",
            "Plan/Map/Diagram Labeling",
            "Completion",
            "Sentence Completion",
            "Short Answer"
          ]
        },
        {
          type: "text",
          name: "questionText",
          title: "Question",
          visibleIf: "{panel.questionType} != 'Matching'",
          isRequired: true
        },
        // Multiple Choice Options
        {
          type: "panel",
          name: "multipleChoicePanel",
          title: "Multiple Choice Options",
          visibleIf: "{panel.questionType} == 'Multiple Choice'",
          elements: [
            {
              type: "text",
              name: "option1",
              title: "Option 1",
              isRequired: true
            },
            {
              type: "text",
              name: "option2",
              title: "Option 2",
              isRequired: true
            },
            {
              type: "text",
              name: "option3",
              title: "Option 3",
              isRequired: true
            },
            {
              type: "text",
              name: "option4",
              title: "Option 4",
              isRequired: true
            },
            {
              type: "text",
              name: "correctAnswer",
              title: "Correct Answer",
              isRequired: true
            }
          ]
        },
        // Matching Information
        {
          type: "matrixdropdown",
          name: "matchingPanel",
          title: "Matching Information",
          visibleIf: "{panel.questionType} == 'Matching'",
          columns: [
            {
              name: "item",
              title: "Item"
            },
            {
              name: "matchTo",
              title: "Match To"
            }
          ],
          rows: [
            "1", "2", "3", "4"
          ]
        },
        // Plan/Map/Diagram Labeling
        {
          type: "matrixdropdown",
          name: "labelingPanel",
          title: "Plan/Map/Diagram Labeling",
          visibleIf: "{panel.questionType} == 'Plan/Map/Diagram Labeling'",
          columns: [
            {
              name: "label",
              title: "Label"
            },
            {
              name: "location",
              title: "Location"
            }
          ],
          rows: [
            "1", "2", "3", "4", "5"
          ]
        },
        // Completion (Form/Note/Table/Summary)
        {
          type: "text",
          name: "completionText",
          title: "Completion (Form/Note/Table/Summary)",
          visibleIf: "{panel.questionType} == 'Completion'",
          isRequired: true
        },
        // Sentence Completion
        {
          type: "text",
          name: "sentenceCompletion",
          title: "Sentence Completion",
          visibleIf: "{panel.questionType} == 'Sentence Completion'",
          isRequired: true
        },
        // Short Answer
        {
          type: "text",
          name: "shortAnswer",
          title: "Short Answer",
          visibleIf: "{panel.questionType} == 'Short Answer'",
          isRequired: true
        }
      ]
     },
     {
      "type": "paneldynamic",
      "name": "answers",
      "title": "Answers",
      "templateElements": [
        {
          "type": "text",
          "name": "label",
          "title": "Label"
        },
        {
          "type": "text",
          "name": "correct_answer",
          "title": "Correct Answer"
        }
      ]
    },
  ]
};

const surveyModel = ref(new Model(surveyJson));

const onComplete = async (survey) => {
  const surveyData = survey.data;
  try {
    const { data, error } = await $supabase
      .from('listening_tests')
      .insert([
        { title: surveyData.testTitle, questions: surveyData.questions }
      ]);

    if (error) throw error;

    alert('Test created successfully!');
  } catch (error) {
    console.error('Error creating test:', error.message);
  }
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
