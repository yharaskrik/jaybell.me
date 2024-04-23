import { AfterViewInit, Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

declare var tsParticles: {
    load: (id: string, options: unknown) => Promise<void>;
};

@Component({
    selector: `app-particles`,
    standalone: true,
    template: `
        <div id="tsparticles"></div>
    `,
})
export class ParticlesComponent implements AfterViewInit {
    private readonly deviceService = inject(DeviceDetectorService);

    async ngAfterViewInit(): Promise<void> {
        await tsParticles.load('tsparticles', {
            background: {
                color: '#121824', // the canvas background color
            },
            interactivity: {
                events: {
                    onClick: {
                        // this handles the mouse click event
                        enable: true,
                        mode: 'push', // this adds particles
                    },
                    onHover: {
                        // this handles the mouse hover event
                        enable: true,
                        mode: 'repulse', // this make particles move away from the mouse
                    },
                },
                modes: {
                    push: {
                        quantity: 6, // number of particles to add
                    },
                    repulse: {
                        distance: 100, // the distance of the particles from the mouse
                    },
                },
            },
            particles: {
                links: {
                    enable: true, // this enables links between particles
                    opacity: 0.3,
                    distance: 200,
                },
                move: {
                    enable: true, // this makes particles move
                    speed: { min: 1, max: 3 }, // this is the speed of the particles
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
                },
                size: {
                    value: { min: 1, max: 3 }, // this sets the size of the particles
                },
                number: {
                    value: this.deviceService.isMobile() ? 50 : 100,
                },
                color: {
                    value: '#7cafd1',
                },
            },
        });
    }
}
