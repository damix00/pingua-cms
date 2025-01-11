import type { CollectionConfig } from 'payload';

export const Sections: CollectionConfig = {
  slug: 'sections',
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

    // Translations
    {
      name: 'title_hr',
      label: 'Title (HR)',
      type: 'text',
    },

    {
      name: 'level',
      label: 'Level',
      type: 'number',
      required: true,
    },
    {
      name: 'units',
      label: 'Units',
      type: 'join',
      on: 'section',
      collection: 'units',
    },
  ],
};
