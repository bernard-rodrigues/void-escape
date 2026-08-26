export class VoidBackgroundSynth {
    private ctx: AudioContext | null = null;
    private playing: boolean = false;

    // Nós de áudio do canal esquerdo
    private carrierL: OscillatorNode | null = null;
    private modulatorL: OscillatorNode | null = null;
    private modGainL: GainNode | null = null;

    // Nós de áudio do canal direito
    private carrierR: OscillatorNode | null = null;
    private modulatorR: OscillatorNode | null = null;
    private modGainR: GainNode | null = null;

    // Filtros e ganho geral
    private filterL: BiquadFilterNode | null = null;
    private filterR: BiquadFilterNode | null = null;
    private pannerL: StereoPannerNode | null = null;
    private pannerR: StereoPannerNode | null = null;
    private mainGain: GainNode | null = null;

    // LFO lento para o uivo do vento no filtro
    private filterLfo: OscillatorNode | null = null;
    private filterLfoGain: GainNode | null = null;

    // Frequência moduladora atual (controlada por knob via lerp linear no update)
    private currentModFreq: number = 30;
    private targetModFreq: number = 30;

    constructor() {}

    start() {
        if (this.playing) return;
        this.playing = true;

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

        const now = this.ctx.currentTime;

        // Criar nó de ganho principal (volume geral baixo do drone)
        this.mainGain = this.ctx.createGain();
        this.mainGain.gain.setValueAtTime(0.04, now); // Volume bem discreto de fundo

        // Criar modulador lento para varrer a frequência de corte do filtro (uivo do vento)
        this.filterLfo = this.ctx.createOscillator();
        this.filterLfo.type = 'sine';
        this.filterLfo.frequency.setValueAtTime(0.08, now); // Oscilação super lenta (12 segundos por ciclo)
        
        this.filterLfoGain = this.ctx.createGain();
        this.filterLfoGain.gain.setValueAtTime(80, now); // Amplitude de varredura do filtro (+- 80Hz)

        this.filterLfo.connect(this.filterLfoGain);

        // --- CANAL ESQUERDO ---
        this.carrierL = this.ctx.createOscillator();
        this.carrierL.type = 'sine';
        this.carrierL.frequency.setValueAtTime(49.7, now); // Desafinação de sub-grave esquerdo

        this.modulatorL = this.ctx.createOscillator();
        this.modulatorL.type = 'sine';
        this.modulatorL.frequency.setValueAtTime(this.currentModFreq, now);

        this.modGainL = this.ctx.createGain();
        this.modGainL.gain.setValueAtTime(40, now); // Índice de modulação inicial

        // Filtro passa-faixas (bandpass) para dar ressonância sombria
        this.filterL = this.ctx.createBiquadFilter();
        this.filterL.type = 'bandpass';
        this.filterL.frequency.setValueAtTime(180, now); // Frequência central
        this.filterL.Q.setValueAtTime(2.0, now); // Ressonância estreita

        this.pannerL = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
        if (this.pannerL) this.pannerL.pan.setValueAtTime(-0.8, now); // Panning esquerdo

        // Conectar conexões FM esquerdo
        this.modulatorL.connect(this.modGainL);
        this.modGainL.connect(this.carrierL.frequency);
        
        // Modulação lenta do filtro esquerdo
        this.filterLfoGain.connect(this.filterL.frequency);

        this.carrierL.connect(this.filterL);
        if (this.pannerL) {
            this.filterL.connect(this.pannerL);
            this.pannerL.connect(this.mainGain);
        } else {
            this.filterL.connect(this.mainGain);
        }

        // --- CANAL DIREITO ---
        this.carrierR = this.ctx.createOscillator();
        this.carrierR.type = 'sine';
        this.carrierR.frequency.setValueAtTime(50.3, now); // Desafinação de sub-grave direito

        this.modulatorR = this.ctx.createOscillator();
        this.modulatorR.type = 'sine';
        this.modulatorR.frequency.setValueAtTime(this.currentModFreq, now);

        this.modGainR = this.ctx.createGain();
        this.modGainR.gain.setValueAtTime(40, now); // Índice de modulação inicial

        this.filterR = this.ctx.createBiquadFilter();
        this.filterR.type = 'bandpass';
        this.filterR.frequency.setValueAtTime(185, now); // Frequência central ligeiramente deslocada
        this.filterR.Q.setValueAtTime(2.0, now);

        this.pannerR = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
        if (this.pannerR) this.pannerR.pan.setValueAtTime(0.8, now); // Panning direito

        // Conectar conexões FM direito
        this.modulatorR.connect(this.modGainR);
        this.modGainR.connect(this.carrierR.frequency);
        
        // Modulação lenta do filtro direito
        this.filterLfoGain.connect(this.filterR.frequency);

        this.carrierR.connect(this.filterR);
        if (this.pannerR) {
            this.filterR.connect(this.pannerR);
            this.pannerR.connect(this.mainGain);
        } else {
            this.filterR.connect(this.mainGain);
        }

        // Conectar saída final
        this.mainGain.connect(this.ctx.destination);

        // Iniciar osciladores
        this.filterLfo.start(now);
        this.carrierL.start(now);
        this.modulatorL.start(now);
        this.carrierR.start(now);
        this.modulatorR.start(now);
    }

    setFastMode(fast: boolean) {
        this.targetModFreq = fast ? 120 : 30;
    }

    update(dt: number) {
        if (!this.playing || !this.ctx) return;

        // Se o AudioContext foi suspenso pelo navegador, tentar dar resume
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        // Interpolar frequência de modulação linearmente e de forma rápida
        // Aumenta/diminui a frequência em até 180Hz por segundo
        const maxDelta = 180 * dt;
        const diff = this.targetModFreq - this.currentModFreq;
        
        if (Math.abs(diff) <= maxDelta) {
            this.currentModFreq = this.targetModFreq;
        } else {
            this.currentModFreq += Math.sign(diff) * maxDelta;
        }

        const now = this.ctx.currentTime;

        // Atualizar as frequências dos osciladores moduladores
        if (this.modulatorL) {
            this.modulatorL.frequency.setValueAtTime(this.currentModFreq, now);
        }
        if (this.modulatorR) {
            this.modulatorR.frequency.setValueAtTime(this.currentModFreq, now);
        }

        // Escalar o ganho da modulação FM junto com a frequência
        // No modo normal (30Hz), ganho = 40. No modo rápido (120Hz), ganho = 180.
        const t = (this.currentModFreq - 30) / 90; // 0 a 1
        const targetGain = 40 + t * 140;

        if (this.modGainL) {
            this.modGainL.gain.setValueAtTime(targetGain, now);
        }
        if (this.modGainR) {
            this.modGainR.gain.setValueAtTime(targetGain, now);
        }
    }

    stop() {
        this.playing = false;

        // Parar e limpar nós
        try {
            if (this.filterLfo) { this.filterLfo.stop(); this.filterLfo.disconnect(); this.filterLfo = null; }
            if (this.carrierL) { this.carrierL.stop(); this.carrierL.disconnect(); this.carrierL = null; }
            if (this.modulatorL) { this.modulatorL.stop(); this.modulatorL.disconnect(); this.modulatorL = null; }
            if (this.carrierR) { this.carrierR.stop(); this.carrierR.disconnect(); this.carrierR = null; }
            if (this.modulatorR) { this.modulatorR.stop(); this.modulatorR.disconnect(); this.modulatorR = null; }
            if (this.modGainL) { this.modGainL.disconnect(); this.modGainL = null; }
            if (this.modGainR) { this.modGainR.disconnect(); this.modGainR = null; }
            if (this.filterLfoGain) { this.filterLfoGain.disconnect(); this.filterLfoGain = null; }
            if (this.filterL) { this.filterL.disconnect(); this.filterL = null; }
            if (this.filterR) { this.filterR.disconnect(); this.filterR = null; }
            if (this.pannerL) { this.pannerL.disconnect(); this.pannerL = null; }
            if (this.pannerR) { this.pannerR.disconnect(); this.pannerR = null; }
            if (this.mainGain) { this.mainGain.disconnect(); this.mainGain = null; }
        } catch (err) {
            // Pode falhar se já tiverem parado
        }
    }
}
