export interface ChromeHeap {
    limitSize: number;
    totalSize: number;
    usedSize: number;
    allocated: number;  // ALlocated heap in percent
    consumed: number    // Used heap in percent
}

interface ExtendedPerformance extends Performance {
    memory?: {
        jsHeapSizeLimit: number;    // Limit
        totalJSHeapSize: number;    // Total
        usedJSHeapSize: number;     // Used
    };
}

export const Chrome = {
    isChrome: () => {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.userAgent);
    },

    getHeapInfo: () => {
        const performance = window.performance as ExtendedPerformance;
        const heap: ChromeHeap = { totalSize: 0, usedSize: 0, limitSize: 0, allocated: 0, consumed: 0 };
        if (performance && performance.memory) {
            heap.limitSize = performance.memory.jsHeapSizeLimit;    // Limit memory
            heap.totalSize = performance.memory.totalJSHeapSize;    // Allocated memory
            heap.usedSize = performance.memory.usedJSHeapSize;      // Used memory
            heap.allocated = 100 * heap.totalSize / heap.limitSize;
            heap.consumed = 100 * heap.usedSize / heap.limitSize;
        }
        return heap;
    }
}



