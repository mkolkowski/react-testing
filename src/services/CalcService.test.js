import { sum, sumFunctionResults } from "./CalcService"

beforeEach(() => {
});

afterEach(() => {
});

beforeAll(() => {
});

afterAll(() => {
});

//Matchers
describe('Sum tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds a + b greater or equal a and b', () => {
        expect(sum(1, 2)).toBeGreaterThanOrEqual(1);
        expect(sum(1, 2)).toBeGreaterThanOrEqual(2);
    });

    test('adds 1 + 2 not equal 4', () => {
        expect(sum(1, 2)).not.toBe(4);
    });
});

test('should find end in weekend', () => {
    expect('weekend').toMatch(/end/);
});

const alphabet = [
    'a', 'b', 'c', 'd'
];

test('alphabet contain c', () => {
    expect(alphabet).toContain('c');
});

//Async code
function fetchData(callback) {
    callback('a');
}

test('letter is a', done => {
    function callback(data) {
        expect(data).toBe('a');
        done(); //test will wait for done
    }

    fetchData(callback);
});


//mocking

test('alphabet contain c', () => {
    const fun1Mock = jest.fn();
    fun1Mock.mockReturnValueOnce(1);

    const fun2Mock = jest.fn();
    fun2Mock.mockReturnValueOnce(2);

    var result = sumFunctionResults(fun1Mock, fun2Mock);
    expect(result).toBe(3);

});

test('functions called once', () => {
    const fun1Mock = jest.fn();
    fun1Mock.mockReturnValueOnce(1);

    const fun2Mock = jest.fn();
    fun2Mock.mockReturnValueOnce(2);

    sumFunctionResults(fun1Mock, fun2Mock);

    expect(fun1Mock.mock.calls.length).toBe(1);
    expect(fun2Mock.mock.calls.length).toBe(1);
});

