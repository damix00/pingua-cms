import type { CollectionConfig } from 'payload';
import { characters } from './Questions';

export const DialogueThemes: CollectionConfig = {
  slug: 'dialogue-themes',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'imageUrl',
      label: 'Image URL',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'aiRole',
      label: 'AI Role (e.g. Flight attendant)',
      type: 'text',
      required: true,
    },
    {
      name: 'aiVoice',
      label: 'AI Voice',
      type: 'select',
      options: [
        {
          label: 'Narrator',
          value: 'narrator',
        },
        ...characters,
      ],
      required: true,
    },
    {
      name: 'type',
      label: 'Difficulty level',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Beginner',
          value: 'beginner',
        },
        {
          label: 'Intermediate',
          value: 'intermediate',
        },
        {
          label: 'Advanced',
          value: 'advanced',
        },
        {
          label: 'Extreme',
          value: 'fluent',
        },
      ],
    },
  ],
};
