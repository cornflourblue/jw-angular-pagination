import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class JwPaginationComponent implements OnInit, OnChanges {
    items: Array<any>;
    changePage: EventEmitter<any>;
    initialPage: number;
    pageSize: number;
    maxPages: number;
    pager: any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setPage(page: number): void;
}
