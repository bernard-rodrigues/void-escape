import { test } from 'node:test';
import assert from 'node:assert';
import { getTranslation, TRANSLATIONS } from '../translations.js';

test('i18n translations - standard key retrieval', () => {
    const title = getTranslation('gameTitle');
    assert.strictEqual(title, 'VOID ESCAPE');
});

test('i18n translations - dynamic parameter replacement', () => {
    // Test keySecured parameter replacement
    const securedMsg = getTranslation('msgKeySecured', { collected: 2, total: 5 });
    assert.strictEqual(securedMsg, 'Key secured (2/5)');

    // Test keysRemaining parameter replacement
    const remainingMsg = getTranslation('msgKeysRemaining', { count: 3 });
    assert.strictEqual(remainingMsg, '3 key(s) remaining');
});

test('i18n translations - fallback for unknown keys', () => {
    const unknownKey = 'non_existent_key_123';
    const result = getTranslation(unknownKey);
    assert.strictEqual(result, unknownKey);
});
