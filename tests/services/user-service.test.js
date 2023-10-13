import UserService from '../../src/services/user-service.js';
import UserRepository from '../../src/repository/user-repository.js';
jest.mock('../../src/repository/user-repository.js');


test('testinf the signup function' , async() =>{
    const data = 
    {
        email : "a@b.com",
        password : "123456"
    };
    (UserRepository.prototype.create).mockReturnValue({...data, createdAt : '19-06-2001' , updatedAt : '19-06-2001'});
    const service = new UserService();
    const response = await service.signup(data);
    expect(response.email).toBe(data.email);
}) 