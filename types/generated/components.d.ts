import type { Struct, Schema } from '@strapi/strapi';

export interface ContentAvailability extends Struct.ComponentSchema {
  collectionName: 'components_content_availabilities';
  info: {
    displayName: 'Availability';
    icon: 'emotionHappy';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.availability': ContentAvailability;
    }
  }
}
