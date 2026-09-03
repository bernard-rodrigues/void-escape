// Mock Canvas getContext for jsdom
const mockGetContext = function (type: string) {
  if (type === '2d') {
    return {
      fillRect: () => {},
      clearRect: () => {},
      getImageData: (x: number, y: number, w: number, h: number) => {
        return {
          data: new Array(w * h * 4).fill(0)
        };
      },
      putImageData: () => {},
      createImageData: () => [],
      setTransform: () => {},
      drawImage: () => {},
      save: () => {},
      fillText: () => {},
      restore: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      stroke: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
      arc: () => {},
      fill: () => {},
      measureText: () => {
        return { width: 0 };
      },
      transform: () => {},
      rect: () => {},
      clip: () => {},
      globalCompositeOperation: '',
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 0,
      globalAlpha: 1,
    };
  }
  return null;
};

if (typeof window !== 'undefined' && window.HTMLCanvasElement) {
    window.HTMLCanvasElement.prototype.getContext = mockGetContext as any;
}
if (typeof HTMLCanvasElement !== 'undefined') {
    HTMLCanvasElement.prototype.getContext = mockGetContext as any;
}

// Mock AudioContext for jsdom
class MockAudioContext {
    currentTime = 0;
    sampleRate = 44100;
    state = 'running';
    destination = {};

    createGain() {
        return {
            gain: {
                value: 1,
                setValueAtTime: () => {},
                linearRampToValueAtTime: () => {},
                exponentialRampToValueAtTime: () => {}
            },
            connect: (target?: any) => target,
            disconnect: () => {}
        };
    }

    createOscillator() {
        return {
            type: 'sine',
            frequency: {
                value: 440,
                setValueAtTime: () => {},
                linearRampToValueAtTime: () => {},
                exponentialRampToValueAtTime: () => {}
            },
            connect: (target?: any) => target,
            disconnect: () => {},
            start: () => {},
            stop: () => {}
        };
    }

    createBiquadFilter() {
        return {
            type: 'lowpass',
            frequency: {
                value: 1000,
                setValueAtTime: () => {},
                linearRampToValueAtTime: () => {},
                exponentialRampToValueAtTime: () => {}
            },
            Q: {
                value: 1,
                setValueAtTime: () => {}
            },
            connect: (target?: any) => target,
            disconnect: () => {}
        };
    }

    createBuffer(channels: number, length: number, sampleRate: number) {
        return {
            getChannelData: () => new Float32Array(length)
        };
    }

    createBufferSource() {
        return {
            buffer: null,
            connect: (target?: any) => target,
            start: () => {},
            stop: () => {}
        };
    }

    createStereoPanner() {
        return {
            pan: {
                value: 0,
                setValueAtTime: () => {}
            },
            connect: (target?: any) => target,
            disconnect: () => {}
        };
    }

    resume() {
        return Promise.resolve();
    }
}

if (typeof window !== 'undefined') {
    (window as any).AudioContext = MockAudioContext;
    (window as any).webkitAudioContext = MockAudioContext;
}

