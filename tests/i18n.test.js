import { test } from 'node:test';
import assert from 'node:assert';
import { getTranslation, TRANSLATIONS } from '../translations.js';

test('i18n translations - standard key retrieval', () => {
    const titleEn = getTranslation('gameTitle', {}, 'en');
    const titlePt = getTranslation('gameTitle', {}, 'ptBr');
    assert.strictEqual(titleEn, 'VOID ESCAPE');
    assert.strictEqual(titlePt, 'VOID ESCAPE');
});

test('i18n translations - dynamic parameter replacement', () => {
    // Test keySecured parameter replacement in English
    const securedMsgEn = getTranslation('msgKeySecured', { collected: 2, total: 5 }, 'en');
    assert.strictEqual(securedMsgEn, 'Key secured (2/5)');

    // Test keySecured parameter replacement in Portuguese
    const securedMsgPt = getTranslation('msgKeySecured', { collected: 2, total: 5 }, 'ptBr');
    assert.strictEqual(securedMsgPt, 'Chave obtida (2/5)');

    // Test keysRemaining parameter replacement in English
    const remainingMsgEn = getTranslation('msgKeysRemaining', { count: 3 }, 'en');
    assert.strictEqual(remainingMsgEn, '3 key(s) remaining');

    // Test keysRemaining parameter replacement in Portuguese
    const remainingMsgPt = getTranslation('msgKeysRemaining', { count: 3 }, 'ptBr');
    assert.strictEqual(remainingMsgPt, '3 chave(s) restante(s)');
});

test('i18n translations - fallback for unknown keys', () => {
    const unknownKey = 'non_existent_key_123';
    const result = getTranslation(unknownKey);
    assert.strictEqual(result, unknownKey);
});

test('i18n translations - issue #33 dialogue keys exist', () => {
    assert.strictEqual(getTranslation('msgWhereAmI', {}, 'en'), 'Where am I?');
    assert.strictEqual(getTranslation('msgElevatorUp', {}, 'en'), 'Up?');
    assert.strictEqual(getTranslation('msgElevatorDown', {}, 'en'), 'Down?');
    assert.strictEqual(getTranslation('msgWhichWay', {}, 'en'), 'Which way?');
    assert.strictEqual(getTranslation('msgDidYouHearThat', {}, 'en'), 'Did you hear that?');
    assert.strictEqual(getTranslation('msgIWasDetected', {}, 'en'), 'Damn! I was detected.');
    assert.strictEqual(getTranslation('msgFoundPathfinder', {}, 'en'), 'Found a pathfinder!');
    assert.strictEqual(getTranslation('msgWorldSaved', {}, 'en'), 'World saved. What now?');
});
