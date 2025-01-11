import type { CollectionConfig } from 'payload';

export const Units: CollectionConfig = {
  slug: 'units',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'section',
      label: 'Section',
      type: 'relationship',
      relationTo: 'sections',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'title_hr',
      label: 'Title (HR)',
      type: 'text',
      required: true,
    },
    {
      name: 'max_completion_xp',
      label: 'Max Completion XP',
      type: 'number',
      required: true,
      min: 1,
      max: 10,
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Questions',
          value: 'questions',
        },
        {
          label: 'Story',
          value: 'story',
        },
      ],
    },
    {
      admin: {
        condition: (ctx, data) => {
          return ctx.type == 'questions';
        },
      },
      name: 'questions',
      label: 'Questions',
      type: 'join',
      on: 'unit',
      collection: 'questions',
    },
    {
      admin: {
        condition: (ctx, data) => {
          return ctx.type == 'story';
        },
      },
      name: 'story',
      label: 'Story',
      type: 'relationship',
      relationTo: 'stories',
    },
  ],
};
