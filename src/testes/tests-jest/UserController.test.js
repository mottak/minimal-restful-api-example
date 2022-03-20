
const { usersController } = require('../../controllers/')
const { usersService } = require('../../services')
const { userValidation } = require('../../validations')
const { mockUserValidate,
  mockUserService,
  validNewUser,
  invalidNameNewUser } = require('../mocks/mockControllerDependencies')


describe('@userController.add - testa criação de novo usuário', () => {
  it('Um usuario é criado com sucesso', async () => {
    // https://archive.jestjs.io/docs/pt-br/22.x/mock-function-api#mockfnmockresolvedvaluevalue
    // dentro do fn eu informo qual a função eu to mockando
    // dentro de mockResolvedValue coloco a função mockada
    jest.fn(usersService.add).mockResolvedValue(mockUserService(validNewUser))
    jest.fn(userValidation.paramId).mockResolvedValue(mockUserValidate(validNewUser))

    const result = await usersController.add(validNewUser)

    expect(result).not.toBeNull()
    expect(result).toHaveProperty('_id');
  })


})

