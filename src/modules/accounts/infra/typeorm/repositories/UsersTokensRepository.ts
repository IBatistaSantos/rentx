import { getRepository, Repository } from "typeorm";

import { ICreateUsersTokensDTO } from "@modules/accounts/dtos/ICreateUsersTokensDTO";
import { IUsersTokens } from "@modules/accounts/repositories/IUsersTokens";

import { UserToken } from "../entities/UserTokens";

class UsersTokensRepository implements IUsersTokens {
  private repository: Repository<UserToken>;

  constructor() {
    this.repository = getRepository(UserToken);
  }
  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUsersTokensDTO): Promise<UserToken> {
    const userToken = this.repository.create({
      user_id,
      expires_date,
      refresh_token,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
