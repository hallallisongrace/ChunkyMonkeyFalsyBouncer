// Falsy Bouncer

function bouncer(arr) {
    var truthies = [];
    for (var elem of arr) {
        console.log(elem);
        if (elem) truthies.push(elem);
    }
    return truthies; 
}

bouncer([7, "ate", "", false, 9]); 


// Chunky Monkey

function chunkArrayInGroups(arr, size) {
    var groups = [];
    while (arr.length > 0) {
        groups.push(arr.slice(0, size));
        arr=arr.slice(size);
    }
    return groups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);