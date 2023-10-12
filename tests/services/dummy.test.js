import { execute } from '../../src/services/dummy-service.js';
import { helper } from '../../src/services/helper-service.js';
jest.mock('../../src/services/helper-service.js'); // this will mock the whole code 

test('result is true and returning Leraning JS', () =>{
    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Learning JS')
})

test('result is false and returning Learning ReactJS', ()=>{
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Learning ReactJS')
})