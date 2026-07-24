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
