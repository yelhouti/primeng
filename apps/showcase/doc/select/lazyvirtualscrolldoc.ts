import { AppCode } from '@/components/doc/app.code';
import { Code } from '@/domain/code';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollerOptions, SelectItem } from 'primeng/api';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'select-lazy-virtualscroll-demo',
    standalone: true,
    imports: [AppCode, FormsModule, SelectModule],
    template: `
        <div class="card flex justify-center">
            <p-select [options]="items()" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="32" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" [loading]="loading()" class="w-full md:w-56" />
        </div>
        <app-code [code]="code" selector="select-lazy-virtualscroll-demo"></app-code>
    `
})
export class LazyVirtualScrollDoc {
    items = signal<SelectItem[]>([]);

    selectedItem: string | undefined;

    loading = signal<boolean>(false);

    loadLazyTimeout = null;

    onLazyLoad(event) {
        this.loading.set(true);

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(
            () => {
                let { first, last } = event;
                const items = this.items()?.length ? [...this.items()] : (Array.from({ length: 10000 }) as SelectItem[]);

                for (let i = first; i < last; i++) {
                    items[i] = { label: `Item #${i}`, value: i };
                }

                this.items.set(items);
                this.loading.set(false);
            },
            Math.random() * 1000 + 250
        );
    }

    code: Code = {
        basic: `<p-select [options]="items()" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="32" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" [loading]="loading()" class="w-full md:w-56" />`,

        html: `<div class="card flex justify-center">
    <p-select [options]="items()" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="32" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" [loading]="loading()" class="w-full md:w-56" />
</div>`,

        typescript: `import { SelectItem } from 'primeng/api';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
    selector: 'select-lazy-virtualscroll-demo',
    templateUrl: './select-lazy-virtualscroll-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectLazyVirtualscrollDemo {
    items = signal<SelectItem[]>([]);

    selectedItem: string | undefined;

    loading = signal<boolean>(false);

    loadLazyTimeout = null;

    onLazyLoad(event) {
        this.loading.set(true);

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            let { first, last } = event;
            const items = this.items()?.length ? [...this.items()] : Array.from({ length: 10000 }) as SelectItem[];

            for (let i = first; i < last; i++) {
                items[i] = { label: \`Item #\${i}\`, value: i };
            }

            this.items.set(items);
            this.loading.set(false);
        }, Math.random() * 1000 + 250);
    }
}`
    };
}
