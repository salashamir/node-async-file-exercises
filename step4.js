class Solution {
    findLongestUniqueSubstring(string) {
        if (string == null || string.length === 0){
            console.log(0);
            return;
        }

        let i = 0;
        let j = 0;
        let max = 0;

        const set = new Set();

        while (i < string.length) {
            while (set.has(string[i])){
                set.delete(string[j]);
                j++;
            }
            set.add(string[i]);
            max = Math.max(max, i - j + 1);
            i++;
        }
        console.log(max);
    }
}

const solution = new Solution();
solution.findLongestUniqueSubstring('fheyhedhfgdhfabcdefghijklmn');