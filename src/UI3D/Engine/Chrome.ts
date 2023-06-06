export interface ChromeHeap {
    limitSize: number; 
    totalSize:   number;
    usedSize:  number;
    allocated: number;  // ALlocated heap in percent
    consumed: number    // Used heap in percent
}

interface ExtendedPerformance extends Performance {
	memory?: {
		totalJSHeapSize: number;
        usedJSHeapSize: number;
        jsHeapSizeLimit: number; 
	};
}

export const Chrome = {
    isChrome: () => {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.userAgent);
    },

    getHeapInfo: () => {
        const performance = window.performance as ExtendedPerformance;
        const heap: ChromeHeap = {totalSize: 0, usedSize: 0, limitSize: 0, allocated: 0, consumed: 0};
        if (performance && performance.memory) {
            heap.limitSize = performance.memory.jsHeapSizeLimit;
            heap.totalSize = performance.memory.totalJSHeapSize;
            heap.usedSize  = performance.memory.usedJSHeapSize;
            heap.allocated = 100 * heap.totalSize / heap.limitSize;
            heap.consumed  = 100 * heap.totalSize / heap.usedSize;
        }
        return heap;
    }
}



