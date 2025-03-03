import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { USER_REPOSITORY } from './constants';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}
  async create(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({
      id,
    });
    return user;
  }

  async update(id: number, dto: UpdateUserDto) {
    const updatedUser = await this.userRepository.update({ id }, dto);
    return updatedUser;
  }

  async remove(id: number) {
    await this.userRepository.delete({ id });
    return {
      message: `User (${id}) has been deleted.`,
      id,
    };
  }
}
