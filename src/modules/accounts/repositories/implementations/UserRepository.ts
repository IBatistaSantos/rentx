import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async create({
    name,
    email,
    password,
    driver_license,
    id,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.userRepository.create({
      name,
      email,
      password,
      driver_license,
      id,
      avatar,
    });

    await this.userRepository.save(user);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ email });
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne(id);
    return user;
  }
}

export { UserRepository };
