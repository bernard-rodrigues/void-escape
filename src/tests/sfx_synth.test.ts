import { describe, it, expect, beforeEach } from 'vitest';
import { SFXSynth } from '../engine/sfx_synth.js';
import { CONFIG } from '../engine/config.js';

describe('SFXSynth — Procedural FM Audio Synthesis Engine', () => {
    let sfx: SFXSynth;

    beforeEach(() => {
        CONFIG.SFX_ENABLED = true;
        CONFIG.SFX_VOLUME = 0.25;
        sfx = new SFXSynth();
    });

    it('should instantiate successfully with or without pre-existing AudioContext', () => {
        expect(sfx).toBeDefined();
        sfx.init();
        expect(sfx.getContext()).toBeDefined();

        const sharedCtx = sfx.getContext();
        const secondSfx = new SFXSynth(sharedCtx);
        expect(secondSfx.getContext()).toBe(sharedCtx);
    });

    it('should trigger elevator movement sounds without throwing errors', () => {
        expect(() => sfx.playElevatorUp()).not.toThrow();
        expect(() => sfx.playElevatorDown()).not.toThrow();
    });

    it('should trigger statue charge and shot sounds without throwing errors', () => {
        expect(() => sfx.playStatueCharging(1.5)).not.toThrow();
        expect(() => sfx.playStatueShot()).not.toThrow();
    });

    it('should trigger monster awakening and glitch death sounds without throwing errors', () => {
        expect(() => sfx.playHuntersAwake()).not.toThrow();
        expect(() => sfx.playDeathGlitch()).not.toThrow();
    });

    it('should trigger jelly god portal and protection hum without throwing errors', () => {
        expect(() => sfx.playJellyPortalActivated()).not.toThrow();
        expect(() => sfx.playTeleportSafeHum()).not.toThrow();
    });

    it('should trigger hit damage, screen rumble and glorious alternative exit', () => {
        expect(() => sfx.playHitDamage()).not.toThrow();
        expect(() => sfx.playScreenRumble(0.5)).not.toThrow();
        expect(() => sfx.playAlternativeExitGlorious()).not.toThrow();
    });

    it('should trigger keys, mana, warp, radar, unlocked exit and UI click sounds', () => {
        expect(() => sfx.playKeyCollected()).not.toThrow();
        expect(() => sfx.playManaCollected()).not.toThrow();
        expect(() => sfx.playTeleportWarp()).not.toThrow();
        expect(() => sfx.playPathfinderRadar()).not.toThrow();
        expect(() => sfx.playExitUnlocked()).not.toThrow();
        expect(() => sfx.playUIClick()).not.toThrow();
    });

    it('should respect CONFIG.SFX_ENABLED when disabled', () => {
        CONFIG.SFX_ENABLED = false;
        const disabledSfx = new SFXSynth();
        expect(() => disabledSfx.playKeyCollected()).not.toThrow();
    });
});
