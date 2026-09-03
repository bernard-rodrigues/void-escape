import { CONFIG } from './config.js';

/**
 * SFXSynth — Motor de Síntese Procedural de Efeitos Sonoros (SFX) via Síntese FM e Web Audio API
 * 
 * Inspirado nos clássicos chips FM dos consoles e computadores dos anos 80 e 90:
 * - Yamaha YM2612 (Sega Genesis / Mega Drive)
 * - Yamaha YM2608 / YM2203 (PC-8801 / PC-9801)
 * - Yamaha YM3812 / YMF262 (OPL2 / OPL3 das placas Sound Blaster em PC DOS)
 */
export class SFXSynth {
    private ctx: AudioContext | null = null;
    private masterGain: GainNode | null = null;
    private noiseBuffer: AudioBuffer | null = null;
    private activeChargeNode: { stop: () => void } | null = null;

    constructor(sharedContext?: AudioContext | null) {
        if (sharedContext) {
            this.ctx = sharedContext;
            this.initMasterGain();
        }
    }

    /**
     * Inicializa ou vincula o AudioContext compartilhado de forma segura
     */
    init(sharedContext?: AudioContext | null) {
        if (sharedContext) {
            this.ctx = sharedContext;
        } else if (!this.ctx && typeof window !== 'undefined') {
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        this.initMasterGain();
    }

    /**
     * Retorna a referência do AudioContext compartilhado
     */
    getContext(): AudioContext | null {
        return this.ctx;
    }

    private initMasterGain() {
        if (!this.ctx) return;
        if (!this.masterGain) {
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(this.getVolume(), this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);
        }
    }

    private ensureReady(): boolean {
        if (typeof window === 'undefined') return false;
        if (!this.ctx) {
            this.init();
        }
        if (!this.ctx) return false;

        if (this.ctx.state === 'suspended') {
            this.ctx.resume().catch(() => {});
        }

        if (!this.masterGain) {
            this.initMasterGain();
        }

        return !!this.masterGain;
    }

    private getVolume(): number {
        if (CONFIG.SFX_ENABLED === false) return 0;
        return typeof CONFIG.SFX_VOLUME === 'number' ? CONFIG.SFX_VOLUME : 0.25;
    }

    /**
     * Buffer de ruído procedural singleton em memória
     */
    private getNoiseBuffer(): AudioBuffer | null {
        if (this.noiseBuffer) return this.noiseBuffer;
        if (!this.ctx) return null;

        const bufferSize = this.ctx.sampleRate; // 1 segundo de ruído
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        this.noiseBuffer = buffer;
        return this.noiseBuffer;
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 1 & 2. ELEVADORES (Ascendente e Descendente)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Variação de frequência ascendente ao subir de andar em elevador (FM Sci-Fi)
     * Carrier: 130Hz -> 430Hz exponencial. Modulator: ratio 2.0 com decaimento harmônico.
     */
    playElevatorUp() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.45;

        const carrier = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const mainGain = this.ctx.createGain();

        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(130, now);
        carrier.frequency.exponentialRampToValueAtTime(430, now + duration);

        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(260, now);
        modulator.frequency.exponentialRampToValueAtTime(860, now + duration);

        modGain.gain.setValueAtTime(180, now);
        modGain.gain.linearRampToValueAtTime(15, now + duration);

        mainGain.gain.setValueAtTime(0.001, now);
        mainGain.gain.linearRampToValueAtTime(0.35, now + 0.05);
        mainGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        modulator.connect(modGain);
        modGain.connect(carrier.frequency);
        carrier.connect(mainGain);
        mainGain.connect(this.masterGain);

        modulator.start(now);
        carrier.start(now);
        modulator.stop(now + duration);
        carrier.stop(now + duration);
    }

    /**
     * Variação de frequência descendente ao descer de andar em elevador (FM com sub-grave reforçado)
     * Carrier: 430Hz -> 90Hz exponencial. Modulator aumenta a compressão nos sub-graves.
     */
    playElevatorDown() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.48;

        const carrier = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const mainGain = this.ctx.createGain();

        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(430, now);
        carrier.frequency.exponentialRampToValueAtTime(90, now + duration);

        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(215, now);
        modulator.frequency.exponentialRampToValueAtTime(45, now + duration);

        modGain.gain.setValueAtTime(30, now);
        modGain.gain.linearRampToValueAtTime(220, now + duration);

        mainGain.gain.setValueAtTime(0.001, now);
        mainGain.gain.linearRampToValueAtTime(0.38, now + 0.05);
        mainGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        modulator.connect(modGain);
        modGain.connect(carrier.frequency);
        carrier.connect(mainGain);
        mainGain.connect(this.masterGain);

        modulator.start(now);
        carrier.start(now);
        modulator.stop(now + duration);
        carrier.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 3 & 4. ESTÁTUAS DE GELÉIA (Carga e Tiros)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Som moderno de disparo das estátuas: Rajada percussiva de ruído filtrado + estalo FM
     */
    playStatueShot() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.16;

        // Camada 1: Ruído filtrado com sweep descendente passa-faixas rápido
        const noise = this.getNoiseBuffer();
        if (noise) {
            const noiseNode = this.ctx.createBufferSource();
            noiseNode.buffer = noise;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.Q.setValueAtTime(3.0, now);
            filter.frequency.setValueAtTime(3600, now);
            filter.frequency.exponentialRampToValueAtTime(280, now + duration);

            const noiseGain = this.ctx.createGain();
            noiseGain.gain.setValueAtTime(0.4, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            noiseNode.connect(filter);
            filter.connect(noiseGain);
            noiseGain.connect(this.masterGain);

            noiseNode.start(now);
            noiseNode.stop(now + duration);
        }

        // Camada 2: Estalo de plasma FM
        const carrier = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const fmGain = this.ctx.createGain();

        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(280, now);
        carrier.frequency.exponentialRampToValueAtTime(45, now + duration);

        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(140, now);

        modGain.gain.setValueAtTime(350, now);
        modGain.gain.exponentialRampToValueAtTime(1.0, now + duration);

        fmGain.gain.setValueAtTime(0.45, now);
        fmGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        modulator.connect(modGain);
        modGain.connect(carrier.frequency);
        carrier.connect(fmGain);
        fmGain.connect(this.masterGain);

        modulator.start(now);
        carrier.start(now);
        modulator.stop(now + duration);
        carrier.stop(now + duration);
    }

    /**
     * Som de carga das estátuas: Zumbido subindo de frequência com pulso acelerando
     * Sincronizado com o JELLY_STATUE_CHARGE_TIME (1.5s)
     */
    playStatueCharging(duration = 1.5) {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;

        const carrier = this.ctx.createOscillator();
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        const mainGain = this.ctx.createGain();

        carrier.type = 'triangle';
        carrier.frequency.setValueAtTime(80, now);
        carrier.frequency.exponentialRampToValueAtTime(520, now + duration);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(4, now);
        lfo.frequency.exponentialRampToValueAtTime(32, now + duration); // Tremor acelera

        lfoGain.gain.setValueAtTime(20, now);
        lfoGain.gain.linearRampToValueAtTime(80, now + duration);

        mainGain.gain.setValueAtTime(0.001, now);
        mainGain.gain.linearRampToValueAtTime(0.22, now + duration * 0.7);
        mainGain.gain.linearRampToValueAtTime(0.35, now + duration);
        mainGain.gain.setValueAtTime(0.001, now + duration + 0.05);

        lfo.connect(lfoGain);
        lfoGain.connect(carrier.frequency);
        carrier.connect(mainGain);
        mainGain.connect(this.masterGain);

        lfo.start(now);
        carrier.start(now);
        lfo.stop(now + duration + 0.05);
        carrier.stop(now + duration + 0.05);

        this.activeChargeNode = {
            stop: () => {
                try {
                    carrier.stop();
                    lfo.stop();
                } catch (e) {}
            }
        };
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 5. LIBERAÇÃO DOS VOID HUNTERS (Rugido Sub-Grave Gutural)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Som monstruoso na liberação dos Void Hunters (Drone sub-grave com batimentos inarmônicos)
     */
    playHuntersAwake() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 2.0;

        const carrierL = this.ctx.createOscillator();
        const carrierR = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        const mainGain = this.ctx.createGain();

        // Desafinação estéreo para batimento sinistro
        carrierL.type = 'sawtooth';
        carrierL.frequency.setValueAtTime(38, now);
        carrierL.frequency.exponentialRampToValueAtTime(28, now + duration);

        carrierR.type = 'sawtooth';
        carrierR.frequency.setValueAtTime(39.5, now);
        carrierR.frequency.exponentialRampToValueAtTime(29, now + duration);

        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(56, now);
        modulator.frequency.exponentialRampToValueAtTime(32, now + duration);

        modGain.gain.setValueAtTime(140, now);
        modGain.gain.linearRampToValueAtTime(40, now + duration);

        filter.type = 'lowpass';
        filter.Q.setValueAtTime(5.0, now);
        filter.frequency.setValueAtTime(120, now);
        filter.frequency.exponentialRampToValueAtTime(480, now + 0.4);
        filter.frequency.exponentialRampToValueAtTime(70, now + duration);

        mainGain.gain.setValueAtTime(0.001, now);
        mainGain.gain.linearRampToValueAtTime(0.45, now + 0.3);
        mainGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        modulator.connect(modGain);
        modGain.connect(carrierL.frequency);
        modGain.connect(carrierR.frequency);

        carrierL.connect(filter);
        carrierR.connect(filter);
        filter.connect(mainGain);
        mainGain.connect(this.masterGain);

        modulator.start(now);
        carrierL.start(now);
        carrierR.start(now);

        modulator.stop(now + duration);
        carrierL.stop(now + duration);
        carrierR.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 6. GLITCH DE MORTE DO JOGADOR
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Glitch sonoro acompanhando a animação de morte (desintegração digital no vazio)
     */
    playDeathGlitch() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const totalDuration = 0.8;

        // Frequências caóticas de corrupção
        const freqs = [75, 1450, 45, 920, 210, 1100, 60, 30];
        const stepTime = 0.05;

        for (let i = 0; i < freqs.length; i++) {
            const stepStart = now + i * stepTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = i % 2 === 0 ? 'square' : 'sawtooth';
            osc.frequency.setValueAtTime(freqs[i], stepStart);

            gain.gain.setValueAtTime(0.28, stepStart);
            gain.gain.exponentialRampToValueAtTime(0.001, stepStart + stepTime);

            osc.connect(gain);
            gain.connect(this.masterGain);

            osc.start(stepStart);
            osc.stop(stepStart + stepTime);
        }

        // Ruído estático de fundo
        const noise = this.getNoiseBuffer();
        if (noise) {
            const noiseNode = this.ctx.createBufferSource();
            noiseNode.buffer = noise;
            const noiseGain = this.ctx.createGain();

            noiseGain.gain.setValueAtTime(0.3, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + totalDuration);

            noiseNode.connect(noiseGain);
            noiseGain.connect(this.masterGain);

            noiseNode.start(now);
            noiseNode.stop(now + totalDuration);
        }
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 7. ATIVAÇÃO DO PORTAL DO DEUS GELÉIA
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Ativação mística do portal do deus geléia (acorde cósmico cristalino + implosão grave)
     */
    playJellyPortalActivated() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 1.4;

        // Acorde FM cristalino (3 operadoras harmônicas celestiais)
        const chordFreqs = [330, 495, 660];
        chordFreqs.forEach((baseFreq) => {
            const carrier = this.ctx!.createOscillator();
            const modulator = this.ctx!.createOscillator();
            const modGain = this.ctx!.createGain();
            const gain = this.ctx!.createGain();

            carrier.type = 'sine';
            carrier.frequency.setValueAtTime(baseFreq, now);

            modulator.type = 'sine';
            modulator.frequency.setValueAtTime(baseFreq * 2, now);

            modGain.gain.setValueAtTime(160, now);
            modGain.gain.exponentialRampToValueAtTime(5, now + duration);

            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            modulator.connect(modGain);
            modGain.connect(carrier.frequency);
            carrier.connect(gain);
            gain.connect(this.masterGain!);

            modulator.start(now);
            carrier.start(now);
            modulator.stop(now + duration);
            carrier.stop(now + duration);
        });

        // Implosão grave descendente
        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(240, now);
        sub.frequency.exponentialRampToValueAtTime(32, now + 0.6);

        subGain.gain.setValueAtTime(0.4, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

        sub.connect(subGain);
        subGain.connect(this.masterGain);

        sub.start(now);
        sub.stop(now + 0.8);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 8. SOM DE PROTEÇÃO SOBRE O PORTAL (Campo de Força Suave)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Som aveludado de proteção ao entrar em um teleporte seguro
     */
    playTeleportSafeHum() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.9;

        const carrier = this.ctx.createOscillator();
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(220, now);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(2.0, now); // Pulso suave de respiração (2Hz)

        lfoGain.gain.setValueAtTime(15, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        lfo.connect(lfoGain);
        lfoGain.connect(carrier.frequency);
        carrier.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        lfo.start(now);
        carrier.start(now);
        lfo.stop(now + duration);
        carrier.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 9. COLISÃO COM HUNTER OU PROJÉTIL (Impacto Seco e Cortante)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Impacto súbito de dano ao colidir com Void Hunter ou ser atingido por projétil
     */
    playHitDamage() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.12;

        const carrier = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const gain = this.ctx.createGain();

        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(190, now);
        carrier.frequency.exponentialRampToValueAtTime(25, now + duration);

        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(120, now);

        modGain.gain.setValueAtTime(320, now);
        modGain.gain.exponentialRampToValueAtTime(1.0, now + duration);

        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        modulator.connect(modGain);
        modGain.connect(carrier.frequency);
        carrier.connect(gain);
        gain.connect(this.masterGain);

        modulator.start(now);
        carrier.start(now);
        modulator.stop(now + duration);
        carrier.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 10. TREMOR DO CENÁRIO (Rumble Tectônico Sincronizado)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Rumble tectônico oscilante acompanhando o tremor de tela (screen shake)
     */
    playScreenRumble(duration = 0.8) {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;

        const sub = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        sub.type = 'sawtooth';
        sub.frequency.setValueAtTime(34, now);
        sub.frequency.linearRampToValueAtTime(28, now + duration);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(65, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.4, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        sub.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        sub.start(now);
        sub.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 11. REVELAÇÃO DA SAÍDA ALTERNATIVA (Glorioso)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Som majestoso e etéreo ao revelar a saída alternativa ("THE TRUTH HAS BEEN REVEALED")
     */
    playAlternativeExitGlorious() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 2.2;

        // Arpeggio celestial em cascata rápida (C5, G5, C6, E6)
        const notes = [523.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, idx) => {
            const noteStart = now + idx * 0.08;
            const carrier = this.ctx!.createOscillator();
            const modulator = this.ctx!.createOscillator();
            const modGain = this.ctx!.createGain();
            const gain = this.ctx!.createGain();

            carrier.type = 'sine';
            carrier.frequency.setValueAtTime(freq, noteStart);

            modulator.type = 'sine';
            modulator.frequency.setValueAtTime(freq * 2, noteStart);

            modGain.gain.setValueAtTime(140, noteStart);
            modGain.gain.exponentialRampToValueAtTime(5, noteStart + (duration - idx * 0.08));

            gain.gain.setValueAtTime(0.001, noteStart);
            gain.gain.linearRampToValueAtTime(0.2, noteStart + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, noteStart + (duration - idx * 0.08));

            modulator.connect(modGain);
            modGain.connect(carrier.frequency);
            carrier.connect(gain);
            gain.connect(this.masterGain!);

            modulator.start(noteStart);
            carrier.start(noteStart);
            modulator.stop(noteStart + duration);
            carrier.stop(noteStart + duration);
        });
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 12. COLETA DE CHAVES (Estilo Ring do Mega Drive)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Coleta de chave: Sino FM de 2 notas rápidas ascendentes (880Hz -> 1320Hz)
     */
    playKeyCollected() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;

        const tones = [
            { freq: 880, start: now, dur: 0.09 },
            { freq: 1320, start: now + 0.06, dur: 0.22 }
        ];

        tones.forEach(tone => {
            const carrier = this.ctx!.createOscillator();
            const modulator = this.ctx!.createOscillator();
            const modGain = this.ctx!.createGain();
            const gain = this.ctx!.createGain();

            carrier.type = 'sine';
            carrier.frequency.setValueAtTime(tone.freq, tone.start);

            modulator.type = 'sine';
            modulator.frequency.setValueAtTime(tone.freq * 3.5, tone.start);

            modGain.gain.setValueAtTime(220, tone.start);
            modGain.gain.exponentialRampToValueAtTime(2, tone.start + tone.dur);

            gain.gain.setValueAtTime(0.28, tone.start);
            gain.gain.exponentialRampToValueAtTime(0.001, tone.start + tone.dur);

            modulator.connect(modGain);
            modGain.connect(carrier.frequency);
            carrier.connect(gain);
            gain.connect(this.masterGain!);

            modulator.start(tone.start);
            carrier.start(tone.start);
            modulator.stop(tone.start + tone.dur);
            carrier.stop(tone.start + tone.dur);
        });
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 13. COLETA DE MANA (Chime Místico Suave)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Coleta de fragmento de mana: Chime sutil e cintilante
     */
    playManaCollected() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.22;

        const carrier = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const gain = this.ctx.createGain();

        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(659.25, now); // E5

        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(1318.5, now); // Ratio 2.0

        modGain.gain.setValueAtTime(90, now);
        modGain.gain.exponentialRampToValueAtTime(2, now + duration);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        modulator.connect(modGain);
        modGain.connect(carrier.frequency);
        carrier.connect(gain);
        gain.connect(this.masterGain);

        modulator.start(now);
        carrier.start(now);
        modulator.stop(now + duration);
        carrier.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 14. TELETRANSPORTE (Woosh de Sucção / Warp)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Transição de teletransporte (woosh espacial de ida e volta)
     */
    playTeleportWarp() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.42;

        const carrier = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        carrier.type = 'triangle';
        carrier.frequency.setValueAtTime(110, now);
        carrier.frequency.exponentialRampToValueAtTime(650, now + duration * 0.5);
        carrier.frequency.exponentialRampToValueAtTime(70, now + duration);

        filter.type = 'bandpass';
        filter.Q.setValueAtTime(2.5, now);
        filter.frequency.setValueAtTime(300, now);
        filter.frequency.exponentialRampToValueAtTime(1200, now + duration * 0.5);
        filter.frequency.exponentialRampToValueAtTime(200, now + duration);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.35, now + duration * 0.4);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        carrier.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        carrier.start(now);
        carrier.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 15. LOCALIZADOR / PATHFINDER (Sonar Radar Sci-Fi)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Pulso de sonar/radar que ecoa quando o localizador de caminhos é acionado
     */
    playPathfinderRadar() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.6;

        const carrier = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(1150, now);
        carrier.frequency.exponentialRampToValueAtTime(700, now + duration);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        carrier.connect(gain);
        gain.connect(this.masterGain);

        carrier.start(now);
        carrier.stop(now + duration);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 16. SAÍDA NORMAL DESTRAVADA (Todas as Chaves Obtidas)
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Destravamento mecânico ancestral seguido de sino triunfante
     */
    playExitUnlocked() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;

        // Estalo mecânico
        const click = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        click.type = 'square';
        click.frequency.setValueAtTime(160, now);
        click.frequency.exponentialRampToValueAtTime(40, now + 0.08);

        clickGain.gain.setValueAtTime(0.3, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        click.connect(clickGain);
        clickGain.connect(this.masterGain);

        click.start(now);
        click.stop(now + 0.08);

        // Sino triunfante (acorde C maior)
        const chord = [523.25, 659.25, 783.99];
        chord.forEach(freq => {
            const chime = this.ctx!.createOscillator();
            const chimeGain = this.ctx!.createGain();

            chime.type = 'sine';
            chime.frequency.setValueAtTime(freq, now + 0.07);

            chimeGain.gain.setValueAtTime(0.2, now + 0.07);
            chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

            chime.connect(chimeGain);
            chimeGain.connect(this.masterGain!);

            chime.start(now + 0.07);
            chime.stop(now + 1.2);
        });
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 17. INTERFACE / UI CLICKS
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Micro-clique de alta frequência para botões do HUD e pausa
     */
    playUIClick() {
        if (!this.ensureReady() || !this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const duration = 0.02;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + duration);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + duration);
    }
}
