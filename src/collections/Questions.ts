import type { CollectionConfig } from 'payload';

export enum QuestionType {
  Flashcard = 'flashcard',
  MultipleChoice = 'multiple-choice',
  ListenAndWrite = 'listen-and-write',
  ListenAndChoose = 'listen-and-choose',
  RecordVoice = 'record-voice',
  Translate = 'translate',
}

export enum AppCharacter {
  Penguin = 'penguin',
  Fujio = 'fujio',
  Jaxon = 'jaxon',
  Sara = 'sara',
  MrWilliams = 'mr-williams',
}

export const characters = [
  {
    label: 'Pingua',
    value: AppCharacter.Penguin,
  },
  {
    label: 'Fujio (opak, borilac, hrabar, samuraj, fitness expert)',
    value: AppCharacter.Fujio,
  },
  {
    label: 'Jaxon (beatboxer, reper, pop culture expert, zabavan)',
    value: AppCharacter.Jaxon,
  },
  {
    label: 'Sara (tinejdžerica)',
    value: AppCharacter.Sara,
  },
  {
    label: 'Mr. Williams (učitelj, strog, ozbiljan, voli ispravljati gramatičke greške)',
    value: AppCharacter.MrWilliams,
  },
];

const isMultipleChoice = (ctx: any) => {
  return (
    ctx.questionType === QuestionType.MultipleChoice ||
    ctx.questionType === QuestionType.ListenAndChoose
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
          ],
        },
        {
          name: 'question',
          label: 'Question (English!)',
          type: 'textarea',
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
  ],
};
