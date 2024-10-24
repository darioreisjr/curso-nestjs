import { Controller, Get, Param, Query } from '@nestjs/common';

type ParamsUser = {
  id: string;
  idEmpresa: string;
};
@Controller()
export class UserController {
  /**
   * http://localhost:3000/users/54763545365
   */
  @Get('/users/:id/:idEmpresa')
  findById(@Param() params: ParamsUser) {
    return 'Usuário do ID' + params.id + 'ID da Empresa ' + params.idEmpresa;
  }

  /**
   * hhtp://localhost:3000/users?p=10&r=100
   */
  @Get('/users/findByPages')
  findByPages(@Query() queries: any) {
    return 'Queries: ' + JSON.stringify(queries);
  }
}
