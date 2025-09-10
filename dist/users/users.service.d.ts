import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findByUsername(username: string): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;
}
