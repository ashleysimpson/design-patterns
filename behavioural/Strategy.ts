// The strategy pattern is one that allows you to control the different algorithms that are used during runtime of an object
// Consider that some class has a sorting algorithm, this algorithm is determined based on if the class has a large dataset or a small dataset
// We therefore create a sorting strategy interface and the different implementations for the sorting strategies

interface SortingStrategy {
    sort(items: number[]): number[];
}

class SmallDatasetSort implements SortingStrategy {
    sort(items: number[]) {
        console.log('Let\'s pretend we sorted the small dataset');
        return items;
    }
}

class LargeDatasetSort implements SortingStrategy {
    sort(items: number[]) {
        console.log('Let\'s pretend we sorted the large dataset');
        return items;
    }
}

// Then we create our class that needs the sorting algorithm and add a function that takes a sorting strategy and then uses the appropriate sort

class Dataset {
    items: number[];

    constructor(someDataset: number[]) {
        this.items = someDataset;
    }

    sort(sortingStrategy: SortingStrategy) {
        this.items = sortingStrategy.sort(this.items);
    }

    isBig() {
        return this.items.length > 100;
    }
}

// Then based when using the classes we can determine which sorting algorithm to use depending on the size of the items list

const someList = [1, 2, 3];

const smallListSortingStrategy = new SmallDatasetSort();
const largeListSortingStrategy = new LargeDatasetSort();

const dataset = new Dataset(someList);

if (dataset.isBig()) {
    dataset.sort(largeListSortingStrategy);
} else {
    dataset.sort(smallListSortingStrategy);
}

// The sorting strategy can then be determined at runtime and changed when necessary
