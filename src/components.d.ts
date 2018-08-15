/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';


declare global {

  namespace StencilComponents {
    interface MyAudi {
      'istNeu': boolean;
      'marke': string;
      'preis': number;
    }
  }

  interface HTMLMyAudiElement extends StencilComponents.MyAudi, HTMLStencilElement {}

  var HTMLMyAudiElement: {
    prototype: HTMLMyAudiElement;
    new (): HTMLMyAudiElement;
  };
  interface HTMLElementTagNameMap {
    'my-audi': HTMLMyAudiElement;
  }
  interface ElementTagNameMap {
    'my-audi': HTMLMyAudiElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-audi': JSXElements.MyAudiAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAudiAttributes extends HTMLAttributes {
      'istNeu'?: boolean;
      'marke'?: string;
      'preis'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyAutoapp {

    }
  }

  interface HTMLMyAutoappElement extends StencilComponents.MyAutoapp, HTMLStencilElement {}

  var HTMLMyAutoappElement: {
    prototype: HTMLMyAutoappElement;
    new (): HTMLMyAutoappElement;
  };
  interface HTMLElementTagNameMap {
    'my-autoapp': HTMLMyAutoappElement;
  }
  interface ElementTagNameMap {
    'my-autoapp': HTMLMyAutoappElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-autoapp': JSXElements.MyAutoappAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAutoappAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyAutos {
      'autos': any;
      'marke': string;
      'preis': number;
      'showPrompt': () => void;
    }
  }

  interface HTMLMyAutosElement extends StencilComponents.MyAutos, HTMLStencilElement {}

  var HTMLMyAutosElement: {
    prototype: HTMLMyAutosElement;
    new (): HTMLMyAutosElement;
  };
  interface HTMLElementTagNameMap {
    'my-autos': HTMLMyAutosElement;
  }
  interface ElementTagNameMap {
    'my-autos': HTMLMyAutosElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-autos': JSXElements.MyAutosAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAutosAttributes extends HTMLAttributes {
      'autos'?: any;
      'marke'?: string;
      'preis'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyButtons {

    }
  }

  interface HTMLMyButtonsElement extends StencilComponents.MyButtons, HTMLStencilElement {}

  var HTMLMyButtonsElement: {
    prototype: HTMLMyButtonsElement;
    new (): HTMLMyButtonsElement;
  };
  interface HTMLElementTagNameMap {
    'my-buttons': HTMLMyButtonsElement;
  }
  interface ElementTagNameMap {
    'my-buttons': HTMLMyButtonsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-buttons': JSXElements.MyButtonsAttributes;
    }
  }
  namespace JSXElements {
    export interface MyButtonsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyMercedes {
      'istNeu': boolean;
      'marke': string;
      'preis': number;
    }
  }

  interface HTMLMyMercedesElement extends StencilComponents.MyMercedes, HTMLStencilElement {}

  var HTMLMyMercedesElement: {
    prototype: HTMLMyMercedesElement;
    new (): HTMLMyMercedesElement;
  };
  interface HTMLElementTagNameMap {
    'my-mercedes': HTMLMyMercedesElement;
  }
  interface ElementTagNameMap {
    'my-mercedes': HTMLMyMercedesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-mercedes': JSXElements.MyMercedesAttributes;
    }
  }
  namespace JSXElements {
    export interface MyMercedesAttributes extends HTMLAttributes {
      'istNeu'?: boolean;
      'marke'?: string;
      'preis'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyVolkswagen {
      'istNeu': boolean;
      'marke': string;
      'preis': number;
    }
  }

  interface HTMLMyVolkswagenElement extends StencilComponents.MyVolkswagen, HTMLStencilElement {}

  var HTMLMyVolkswagenElement: {
    prototype: HTMLMyVolkswagenElement;
    new (): HTMLMyVolkswagenElement;
  };
  interface HTMLElementTagNameMap {
    'my-volkswagen': HTMLMyVolkswagenElement;
  }
  interface ElementTagNameMap {
    'my-volkswagen': HTMLMyVolkswagenElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-volkswagen': JSXElements.MyVolkswagenAttributes;
    }
  }
  namespace JSXElements {
    export interface MyVolkswagenAttributes extends HTMLAttributes {
      'istNeu'?: boolean;
      'marke'?: string;
      'preis'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
