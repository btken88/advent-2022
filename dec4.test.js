const {convertList, cleanupOverlapFull, cleanupOverlapAny} = require('./dec4');

describe('december 4th tests', () => {
    const testData = `2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8`
    test('correctly converts data', () => {
        expect(convertList(testData)).toEqual([[[2,4],[6,8]],[[2,3],[4,5]],[[5,7],[7,9]],[[2,8],[3,7]],[[6,6],[4,6]],[[2,6],[4,8]]])
    })
    test('correctly solves problem 1', () =>{
        expect(cleanupOverlapFull(convertList(testData))).toEqual(2)
    })
    test('correctly solves problem 2', () =>{
        expect(cleanupOverlapAny(convertList(testData))).toEqual(4)
    })
})