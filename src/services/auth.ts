import bcrypt from 'bcrypt';

export default class AuthService {
  public static async hashPassword(
    password: string,
    salt = 10
  ): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  public static async comparePasswords(
    passord: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(passord, hashedPassword);
  }
}
