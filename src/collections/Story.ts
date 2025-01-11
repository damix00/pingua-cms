import type { CollectionConfig } from 'payload';
import { AppCharacter } from './Questions';

export const Stories: CollectionConfig = {
  slug: 'stories',
  admin: {
    useAsTitle: 'title',
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
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'dialogue',
      label: 'Dialogue',
      type: 'array',
      required: true,
      fields: [
        {
          required: true,
          name: 'character',
          label: 'Character',
          type: 'select',
          options: [
            {
              label: 'User',
              value: 'user',
            },
            {
              label: 'Narrator',
              value: 'narrator',
            },
            {
              label: 'Pingua',
              value: AppCharacter.Penguin,
            },
          ],
        },
        {
          admin: {
            // condition: (ctx, data) => data.character != 'user',
          },
          name: 'text',
          label: 'Text',
          type: 'textarea',
          required: true,
        },
        {
          admin: {
            condition: (ctx, data) => data.character == 'user',
          },
          name: 'answers',
          label: 'Answers',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'text',
              label: 'Text',
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
      ],
    },
  ],
};
