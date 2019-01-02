/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  statistic,
} from './components/statistics/interfaces';


export namespace Components {

  interface PbpAngleControl {
    'jsonOpen': boolean;
    'onViewChange': (e: any) => void;
    'view': string;
  }
  interface PbpAngleControlAttributes extends StencilHTMLAttributes {
    'jsonOpen'?: boolean;
    'onViewChange'?: (e: any) => void;
    'view'?: string;
  }

  interface PbpBall {
    'opacity': number;
    'position': {
      top: number
      left: number
    };
  }
  interface PbpBallAttributes extends StencilHTMLAttributes {
    'opacity'?: number;
    'position'?: {
      top: number
      left: number
    };
  }

  interface PbpField {
    'jsonOpen': boolean;
    'view': 'bird' | 'camera' | 'side';
  }
  interface PbpFieldAttributes extends StencilHTMLAttributes {
    'jsonOpen'?: boolean;
    'view'?: 'bird' | 'camera' | 'side';
  }

  interface PbpJsonViewer {
    'items': any[];
    'onToggle': any;
    'open': boolean;
  }
  interface PbpJsonViewerAttributes extends StencilHTMLAttributes {
    'items'?: any[];
    'onToggle'?: any;
    'open'?: boolean;
  }

  interface PbpMessage {
    'jsonOpen': boolean;
    'message': {
      date: Date
      text: string
      type?: 'ERROR' | 'INFO'
    };
  }
  interface PbpMessageAttributes extends StencilHTMLAttributes {
    'jsonOpen'?: boolean;
    'message'?: {
      date: Date
      text: string
      type?: 'ERROR' | 'INFO'
    };
  }

  interface PbpNet {}
  interface PbpNetAttributes extends StencilHTMLAttributes {}

  interface PlayByPlay {
    'fixtureid': string;
    'onconnected': () => void;
    'ondisconnected': () => void;
    'onloaderror': () => void;
  }
  interface PlayByPlayAttributes extends StencilHTMLAttributes {
    'fixtureid'?: string;
    'onconnected'?: () => void;
    'ondisconnected'?: () => void;
    'onloaderror'?: () => void;
  }

  interface PbpPlayer {
    'position': {
      top: number
      left: number
    };
    'view': 'bird' | 'camera' | 'side';
  }
  interface PbpPlayerAttributes extends StencilHTMLAttributes {
    'position'?: {
      top: number
      left: number
    };
    'view'?: 'bird' | 'camera' | 'side';
  }

  interface PbpScoreBoard {
    'jsonOpen': boolean;
    'open': boolean;
  }
  interface PbpScoreBoardAttributes extends StencilHTMLAttributes {
    'jsonOpen'?: boolean;
    'open'?: boolean;
  }

  interface PbpProgress {
    'data': statistic;
  }
  interface PbpProgressAttributes extends StencilHTMLAttributes {
    'data'?: statistic;
  }

  interface PbpStatistics {
    'open': boolean;
  }
  interface PbpStatisticsAttributes extends StencilHTMLAttributes {
    'open'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'PbpAngleControl': Components.PbpAngleControl;
    'PbpBall': Components.PbpBall;
    'PbpField': Components.PbpField;
    'PbpJsonViewer': Components.PbpJsonViewer;
    'PbpMessage': Components.PbpMessage;
    'PbpNet': Components.PbpNet;
    'PlayByPlay': Components.PlayByPlay;
    'PbpPlayer': Components.PbpPlayer;
    'PbpScoreBoard': Components.PbpScoreBoard;
    'PbpProgress': Components.PbpProgress;
    'PbpStatistics': Components.PbpStatistics;
  }

  interface StencilIntrinsicElements {
    'pbp-angle-control': Components.PbpAngleControlAttributes;
    'pbp-ball': Components.PbpBallAttributes;
    'pbp-field': Components.PbpFieldAttributes;
    'pbp-json-viewer': Components.PbpJsonViewerAttributes;
    'pbp-message': Components.PbpMessageAttributes;
    'pbp-net': Components.PbpNetAttributes;
    'play-by-play': Components.PlayByPlayAttributes;
    'pbp-player': Components.PbpPlayerAttributes;
    'pbp-score-board': Components.PbpScoreBoardAttributes;
    'pbp-progress': Components.PbpProgressAttributes;
    'pbp-statistics': Components.PbpStatisticsAttributes;
  }


  interface HTMLPbpAngleControlElement extends Components.PbpAngleControl, HTMLStencilElement {}
  var HTMLPbpAngleControlElement: {
    prototype: HTMLPbpAngleControlElement;
    new (): HTMLPbpAngleControlElement;
  };

  interface HTMLPbpBallElement extends Components.PbpBall, HTMLStencilElement {}
  var HTMLPbpBallElement: {
    prototype: HTMLPbpBallElement;
    new (): HTMLPbpBallElement;
  };

  interface HTMLPbpFieldElement extends Components.PbpField, HTMLStencilElement {}
  var HTMLPbpFieldElement: {
    prototype: HTMLPbpFieldElement;
    new (): HTMLPbpFieldElement;
  };

  interface HTMLPbpJsonViewerElement extends Components.PbpJsonViewer, HTMLStencilElement {}
  var HTMLPbpJsonViewerElement: {
    prototype: HTMLPbpJsonViewerElement;
    new (): HTMLPbpJsonViewerElement;
  };

  interface HTMLPbpMessageElement extends Components.PbpMessage, HTMLStencilElement {}
  var HTMLPbpMessageElement: {
    prototype: HTMLPbpMessageElement;
    new (): HTMLPbpMessageElement;
  };

  interface HTMLPbpNetElement extends Components.PbpNet, HTMLStencilElement {}
  var HTMLPbpNetElement: {
    prototype: HTMLPbpNetElement;
    new (): HTMLPbpNetElement;
  };

  interface HTMLPlayByPlayElement extends Components.PlayByPlay, HTMLStencilElement {}
  var HTMLPlayByPlayElement: {
    prototype: HTMLPlayByPlayElement;
    new (): HTMLPlayByPlayElement;
  };

  interface HTMLPbpPlayerElement extends Components.PbpPlayer, HTMLStencilElement {}
  var HTMLPbpPlayerElement: {
    prototype: HTMLPbpPlayerElement;
    new (): HTMLPbpPlayerElement;
  };

  interface HTMLPbpScoreBoardElement extends Components.PbpScoreBoard, HTMLStencilElement {}
  var HTMLPbpScoreBoardElement: {
    prototype: HTMLPbpScoreBoardElement;
    new (): HTMLPbpScoreBoardElement;
  };

  interface HTMLPbpProgressElement extends Components.PbpProgress, HTMLStencilElement {}
  var HTMLPbpProgressElement: {
    prototype: HTMLPbpProgressElement;
    new (): HTMLPbpProgressElement;
  };

  interface HTMLPbpStatisticsElement extends Components.PbpStatistics, HTMLStencilElement {}
  var HTMLPbpStatisticsElement: {
    prototype: HTMLPbpStatisticsElement;
    new (): HTMLPbpStatisticsElement;
  };

  interface HTMLElementTagNameMap {
    'pbp-angle-control': HTMLPbpAngleControlElement
    'pbp-ball': HTMLPbpBallElement
    'pbp-field': HTMLPbpFieldElement
    'pbp-json-viewer': HTMLPbpJsonViewerElement
    'pbp-message': HTMLPbpMessageElement
    'pbp-net': HTMLPbpNetElement
    'play-by-play': HTMLPlayByPlayElement
    'pbp-player': HTMLPbpPlayerElement
    'pbp-score-board': HTMLPbpScoreBoardElement
    'pbp-progress': HTMLPbpProgressElement
    'pbp-statistics': HTMLPbpStatisticsElement
  }

  interface ElementTagNameMap {
    'pbp-angle-control': HTMLPbpAngleControlElement;
    'pbp-ball': HTMLPbpBallElement;
    'pbp-field': HTMLPbpFieldElement;
    'pbp-json-viewer': HTMLPbpJsonViewerElement;
    'pbp-message': HTMLPbpMessageElement;
    'pbp-net': HTMLPbpNetElement;
    'play-by-play': HTMLPlayByPlayElement;
    'pbp-player': HTMLPbpPlayerElement;
    'pbp-score-board': HTMLPbpScoreBoardElement;
    'pbp-progress': HTMLPbpProgressElement;
    'pbp-statistics': HTMLPbpStatisticsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
