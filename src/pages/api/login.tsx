interface User {
  username: string;
  password: string;
}

export const login = (user: User) => {
  return Promise.resolve(user);
};
