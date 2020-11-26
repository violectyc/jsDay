/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * */

const nums = [2, 2, 1]

const singleNumber = (nums) => {
    const o = {};
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (o[item]) {
            const v = o[item];
            o[item] = v + 1;
        } else {
            o[item] = 1
        }
    }
    const temp = Object.keys(o);
    for (let i = 0; i < temp.length; i++) {
        if (o[temp[i]] === 1) {
            return temp[i]
        }
    }
};

console.log(singleNumber(nums));
