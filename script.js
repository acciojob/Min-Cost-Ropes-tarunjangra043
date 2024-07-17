function mincost(arr) {
    function heapify(arr, n, i) {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] < arr[smallest]) {
            smallest = left;
        }

        if (right < n && arr[right] < arr[smallest]) {
            smallest = right;
        }

        if (smallest != i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            heapify(arr, n, smallest);
        }
    }

    function buildMinHeap(arr) {
        let n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }

    function extractMin(arr) {
        let n = arr.length;
        if (n == 0) return Infinity;
        if (n == 1) return arr.pop();

        let root = arr[0];
        arr[0] = arr.pop();
        heapify(arr, arr.length, 0);
        return root;
    }

    if (arr.length === 1) return 0;

    buildMinHeap(arr);

    let totalCost = 0;

    while (arr.length > 1) {
        let firstMin = extractMin(arr);
        let secondMin = extractMin(arr);

        let cost = firstMin + secondMin;

        totalCost += cost;

        arr.push(cost);
        heapify(arr, arr.length, arr.length - 1);
    }

    return totalCost;
}

module.exports = mincost;
