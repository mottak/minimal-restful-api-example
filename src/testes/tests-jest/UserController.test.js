
const { usersController } = require('../../controllers/')
const { usersService } = require('../../services')
const { userValidation } = require('../../validations')
const { mockUserValidate,
  mockUserService,
  validNewUser,
  invalidNameNewUser,
  invalidNoNameNewUser,
  invalidemailNewUser,
  invalidNoEmailNewUser } = require('../mocks/mockControllerDependencies')


describe('@userController.add - testa criação de novo usuário', () => {
  it('Um usuario é criado com sucesso', async () => {
    // https://archive.jestjs.io/docs/pt-br/22.x/mock-function-api#mockfnmockresolvedvaluevalue
    // dentro do fn eu informo qual a função eu to mockando
    // dentro de mockResolvedValue coloco a função mockada
    jest.fn(usersService.add).mockResolvedValue(mockUserService(validNewUser))
    jest.fn(userValidation.bodyAdd).mockResolvedValue(mockUserValidate(validNewUser))

    const result = await usersController.add(validNewUser)

    expect(result).not.toBeNull()
    expect(result).toHaveProperty('_id');
  })


})

describe('Testa validações  - @userController.add - userValidation', () => {
  it('Um usuario não é criado, displayName não informado', async () => {
    // https://dev.to/dotmendes/testando-lancamento-de-excecoes-com-jest-4p8c

    jest.fn(userValidation.bodyAdd)

    const result = userValidation.bodyAdd(invalidNoNameNewUser);


    // await expect(goo()).rejects.toThrow();
    await expect(result).rejects.toThrow();
    await expect(result).rejects.toThrowError("\"displayName\" is required")


  })
  it('Um usuario não é criado, displayName invalido', async () => {
    // https://dev.to/dotmendes/testando-lancamento-de-excecoes-com-jest-4p8c

    jest.fn(userValidation.bodyAdd)

    const result = userValidation.bodyAdd(invalidNameNewUser);


    // await expect(goo()).rejects.toThrow();
    await expect(result).rejects.toThrow();
    await expect(result).rejects.toThrowError("\"displayName\" is not allowed to be empty")


  })
  it('Um usuario não é criado, email não informado', async () => {

    jest.fn(userValidation.bodyAdd)

    const result = userValidation.bodyAdd(invalidemailNewUser);


    await expect(result).rejects.toThrow();
    await expect(result).rejects.toThrowError("\"email\" must be a valid email")


  })
  it('Um usuario não é criado, displayName invalido', async () => {


    jest.fn(userValidation.bodyAdd)

    const result = userValidation.bodyAdd(invalidNoEmailNewUser);

    await expect(result).rejects.toThrow();
    await expect(result).rejects.toThrowError("\"email\" is required")


  })
})
