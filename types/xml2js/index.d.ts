// Type definitions for node-xml2js 0.4
// Project: https://github.com/Leonidas-from-XIV/node-xml2js
// Definitions by: Michel Salib <https://github.com/michelsalib>
//                 Jason McNeil <https://github.com/jasonrm>
//                 Christopher Currens <https://github.com/ccurrens>
//                 Edward Hinkle <https://github.com/edwardhinkle>
//                 Behind The Math <https://github.com/BehindTheMath>
//                 Claas Ahlrichs <https://github.com/claasahl>
//                 Grzegorz Redlicki <https://github.com/redlickigrzegorz>
//                 Mathieu Masy <https://github.com/tiush>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import { EventEmitter } from 'events';
import * as processors from './lib/processors';

export function parseString(xml: convertableToString, callback: (err: Error, result: any) => void): void;
export function parseString(xml: convertableToString, options: ParserOptions, callback: (err: Error, result: any) => void): void;

export const defaults: {
    '0.1': Options;
    '0.2': Options;
};

export class Builder {
    constructor(options?: BuilderOptions);
    buildObject(rootObj: any): string;
}

export class Parser extends EventEmitter {
    constructor(options?: ParserOptions);
    parseString(str: convertableToString, cb?: Function): void;
    reset(): void;
}

export interface ParserOptions {
    async?: boolean;
    attrkey?: string;
    attrNameProcessors?: Array<(name: string) => any>;
    attrValueProcessors?: Array<(value: string, name: string) => any>;
    charkey?: string;
    charsAsChildren?: boolean;
    childkey?: string;
    emptyTag?: any;
    explicitArray?: boolean;
    explicitCharkey?: boolean;
    explicitChildren?: boolean;
    explicitRoot?: boolean;
    ignoreAttrs?: boolean;
    includeWhiteChars?: boolean;
    mergeAttrs?: boolean;
    normalize?: boolean;
    normalizeTags?: boolean;
    preserveChildrenOrder?: boolean;
    strict?: boolean;
    tagNameProcessors?: Array<(name: string) => any>;
    trim?: boolean;
    validator?: Function;
    valueProcessors?: Array<(value: string, name: string) => any>;
    xmlns?: boolean;
}

export interface BuilderOptions {
    allowSurrogateChars?: boolean;
    attrkey?: string;
    cdata?: boolean;
    charkey?: string;
    doctype?: any;
    headless?: boolean;
    renderOpts?: {
        indent?: string;
        newline?: string;
        pretty?: boolean;
    };
    rootName?: string;
    xmldec?: {
        encoding?: string;
        standalone?: boolean;
        version: string;
    };
}

export type Options = ParserOptions;
export type OptionsV2 = Options;

export interface convertableToString {
    toString(): string;
}

export { processors };
