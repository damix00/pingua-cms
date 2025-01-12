import type { CollectionConfig } from 'payload';

export enum QuestionType {
  Flashcard = 'flashcard',
  MultipleChoice = 'multiple-choice',
  ListenAndWrite = 'listen-and-write',
  ListenAndChoose = 'listen-and-choose',
  RecordVoice = 'record-voice',
  Translate = 'translate',
  TrueOrFalse = 'true-or-false',
}

export enum AppCharacter {
  Penguin = 'penguin',
  Glorp = 'glorp',
  Fujio = 'fujio',
  Jaxon = 'jaxon',
  Sara = 'sara',
}

const isMultipleChoice = (ctx: any) => {
  return (
    ctx.questionType === QuestionType.MultipleChoice ||
    ctx.questionType === QuestionType.ListenAndChoose ||
    ctx.questionType === QuestionType.TrueOrFalse
  );
};

export const Questions: CollectionConfig = {
  slug: 'questions',
  admin: {
    useAsTitle: 'question',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'unit',
      label: 'Unit',
      type: 'relationship',
      relationTo: 'units',
      required: true,
    },
    {
      name: 'isVariation',
      label: 'Variation',
      type: 'checkbox',
      defaultValue: false,
      required: true,
    },
    {
      admin: {
        condition: (ctx, data) => {
          return ctx.isVariation;
        },
      },
      type: 'array',
      name: 'variations',
      label: 'Variations',
      fields: [
        {
          name: 'character',
          label: 'Character',
          type: 'select',
          options: [
            {
              label: 'Pingua',
              value: AppCharacter.Penguin,
            },
            {
              label: 'Glorp (vanzemaljac, znatiželjan, misteriozan, neobičan)',
              value: AppCharacter.Glorp,
            },
            {
              label: 'Fujio (japanac, opak, borilac, hrabar)',
              value: AppCharacter.Fujio,
            },
            {
              label: 'Jaxon (crnac, beatboxer, reper, budući bogataš)',
              value: AppCharacter.Jaxon,
            },
            {
              label: 'Sara (tinejdžerka, svi su joj dosadni, ne zanima je ništa)',
              value: AppCharacter.Sara,
            },
          ],
        },
        {
          name: 'questionType',
          label: 'Question Type',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Flashcard',
              value: QuestionType.Flashcard,
            },
            {
              label: 'Odaberi točno',
              value: QuestionType.MultipleChoice,
            },
            {
              label: 'Poslušaj i odaberi',
              value: QuestionType.ListenAndChoose,
            },
            {
              label: 'Poslušaj i napiši',
              value: QuestionType.ListenAndWrite,
            },
            {
              label: 'Snimi glas',
              value: QuestionType.RecordVoice,
            },
            {
              label: 'Prevedi',
              value: QuestionType.Translate,
            },
            {
              label: 'Točno ili netočno',
              value: QuestionType.TrueOrFalse,
            },
          ],
        },
        {
          name: 'question',
          label: 'Question (English!)',
          type: 'textarea',
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          required: true,
          admin: {
            condition: (ctx, data) => {
              return isMultipleChoice(data);
            },
          },
          name: 'answers',
          label: 'Answers',
          type: 'array',
          fields: [
            {
              name: 'answer',
              label: 'Answer (English!)',
              type: 'text',
              required: true,
            },
            {
              name: 'correct',
              label: 'Correct',
              type: 'checkbox',
              required: true,
            },
            {
              name: 'answerImage',
              label: 'Answer Image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          admin: {
            condition: (ctx, data) => {
              return !isMultipleChoice(data);
            },
          },
          name: 'correctAnswer',
          label: 'Correct Answer',
          type: 'text',
          required: true,
        },
        {
          admin: {
            condition: (ctx, data) => {
              return !isMultipleChoice(data);
            },
          },
          name: 'answerImage',
          label: 'Answer Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      admin: {
        condition: (ctx, data) => {
          return !ctx.isVariation;
        },
      },
      name: 'character',
      label: 'Character',
      type: 'select',
      options: [
        {
          label: 'Pingua',
          value: AppCharacter.Penguin,
        },
        {
          label: 'Glorp (vanzemaljac, znatiželjan, misteriozan, neobičan)',
          value: AppCharacter.Glorp,
        },
        {
          label: 'Fujio (japanac, opak, borilac, hrabar)',
          value: AppCharacter.Fujio,
        },
        {
          label: 'Jaxon (crnac, beatboxer, reper, budući bogataš)',
          value: AppCharacter.Jaxon,
        },
        {
          label: 'Sara (tinejdžerka, svi su joj dosadni, ne zanima je ništa)',
          value: AppCharacter.Sara,
        },
      ],
    },
    {
      admin: {
        condition: (ctx, data) => {
          return !ctx.isVariation;
        },
      },
      name: 'questionType',
      label: 'Question Type',
      type: 'select',
      options: [
        {
          label: 'Flashcard',
          value: QuestionType.Flashcard,
        },
        {
          label: 'Odaberi točno',
          value: QuestionType.MultipleChoice,
        },
        {
          label: 'Poslušaj i odaberi',
          value: QuestionType.ListenAndChoose,
        },
        {
          label: 'Poslušaj i napiši',
          value: QuestionType.ListenAndWrite,
        },
        {
          label: 'Snimi glas',
          value: QuestionType.RecordVoice,
        },
        {
          label: 'Prevedi',
          value: QuestionType.Translate,
        },
      ],
    },
    {
      admin: {
        condition: (ctx, data) => {
          return !ctx.isVariation;
        },
      },
      name: 'question',
      label: 'Question (English!)',
      type: 'textarea',
    },
    {
      admin: {
        condition: (ctx, data) => {
          return !ctx.isVariation;
        },
      },
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      required: true,
      admin: {
        condition: (ctx, data) => {
          return isMultipleChoice(ctx) && !ctx.isVariation;
        },
      },
      name: 'answers',
      label: 'Answers',
      type: 'array',
      fields: [
        {
          name: 'answer',
          label: 'Answer (English!)',
          type: 'text',
          required: true,
        },
        {
          name: 'correct',
          label: 'Correct',
          type: 'checkbox',
          required: true,
        },
        {
          name: 'answerImage',
          label: 'Answer Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      admin: {
        condition: (ctx, data) => {
          return !isMultipleChoice(ctx) && !ctx.isVariation;
        },
      },
      name: 'correctAnswer',
      label: 'Correct Answer',
      type: 'text',
    },
    {
      admin: {
        condition: (ctx, data) => {
          return !isMultipleChoice(ctx) && !ctx.isVariation;
        },
      },
      name: 'answerImage',
      label: 'Answer Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
