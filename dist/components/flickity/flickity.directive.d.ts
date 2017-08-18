import { ElementRef, OnDestroy, EventEmitter, AfterContentInit } from '@angular/core';
import { FlickityOptions } from '../../interfaces/flickity-options.interface';
import { AppConfigService } from '../../services/app-config.service';
export declare class FlickityDirective implements AfterContentInit, OnDestroy {
    private el;
    private appConfigService;
    config: FlickityOptions;
    slideSelect: EventEmitter<number>;
    cellStaticClick: EventEmitter<number>;
    childrenUpdated: EventEmitter<void>;
    private flkty;
    private appendElements;
    private childrenUpdate;
    private childrenUpdateInterval;
    constructor(el: ElementRef, appConfigService: AppConfigService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    init(): void;
    destroy(): void;
    resize(): void;
    reposition(): void;
    previous(): void;
    previousAvailable(): boolean;
    next(): void;
    nextAvailable(): boolean;
    readonly selectedIndex: number;
    readonly cells: number;
    readonly slides: number;
    append(el: HTMLElement): void;
    prepend(el: HTMLElement): void;
    private updateElements();
    select(index: number, isWrapped?: boolean, isInstant?: boolean): void;
}
