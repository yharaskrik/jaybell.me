import { Component, computed, input, model, output } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import type { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { speedDialFabAnimations } from './mat-fab-menu.animations';

export interface MatFabMenu {
    id: string | number;
    imgUrl: string; // please use either icon or imgUrl
    fragment: string;
}

export type MatFabMenuDirection = 'top' | 'bottom' | 'left' | 'right';

@Component({
    selector: 'mat-fab-menu',
    templateUrl: 'mat-fab-menu.component.html',
    styleUrls: ['mat-fab-menu.component.scss'],
    animations: speedDialFabAnimations,
    standalone: true,
    imports: [MatIcon, MatFabButton, RouterLink],
})
export class MatFabMenuComponent {
    readonly fabButtons = input.required<MatFabMenu[]>();

    readonly icon = input('add');

    readonly direction = input<MatFabMenuDirection>('top');

    readonly color = input<ThemePalette>('primary');

    readonly isActive = model(false);

    readonly disabled = input(false);

    readonly closeAfterSelection = input(true);

    readonly onFabMenuItemSelected = output<string | number>();

    protected readonly layout = computed(() => {
        const direction = this.direction();
        switch (this.direction()) {
            case 'top':
                return 'column-reverse';
            case 'bottom':
                return 'column';

            case 'left':
                return 'row-reverse';

            case 'right':
                return 'row';
        }
    });

    toggle(): void {
        this.isActive.set(!this.isActive());
    }

    selectFabMenu(fab: MatFabMenu): void {
        this.onFabMenuItemSelected.emit(fab.id);

        if (this.closeAfterSelection()) {
            this.isActive.set(false);
        }
    }
}
