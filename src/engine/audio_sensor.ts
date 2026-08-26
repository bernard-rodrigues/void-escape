import { CONFIG } from './config.js';

export class ProximityAudioSensor {
    private ctx: AudioContext | null = null;
    private playing: boolean = false;
    private timerId: any = null;
    private level: number = 1; // 1 a 10

    constructor() {}

    setLevel(level: number) {
        this.level = Math.min(10, Math.max(1, level));
    }

    private _params() {
        const t = (this.level - 1) / 9;
        const curve = Math.pow(t, 1.5);
        return {
            freq: 150 + curve * 750,
            interval: 900 - t * 750,
            dur: 0.18 + t * 0.1,
            gain: CONFIG.PROXIMITY_VOLUME * (1 + t * 1.33),
        };
    }

    private _beep() {
        if (typeof window === 'undefined') return;

        if (!this.ctx) {
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }

        if (!this.ctx) return;

        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const { freq, dur, gain } = this._params();
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        g.gain.setValueAtTime(gain, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
        osc.connect(g).connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + dur);
    }

    start() {
        if (this.playing) return;
        this.playing = true;
        const loop = () => {
            if (!this.playing) return;
            try {
                this._beep();
            } catch (err) {
                console.warn("Failed to play proximity beep:", err);
            }
            this.timerId = setTimeout(loop, this._params().interval);
        };
        loop();
    }

    stop() {
        this.playing = false;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }
}
