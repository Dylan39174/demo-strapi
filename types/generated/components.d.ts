import type { Schema, Attribute } from '@strapi/strapi';

export interface PanelsHeroscreen extends Schema.Component {
  collectionName: 'components_panels_heroscreens';
  info: {
    displayName: 'Heroscreen';
    icon: 'expand';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface PanelsSimple extends Schema.Component {
  collectionName: 'components_panels_simples';
  info: {
    displayName: 'Simple';
    icon: 'filter';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'panels.heroscreen': PanelsHeroscreen;
      'panels.simple': PanelsSimple;
    }
  }
}
