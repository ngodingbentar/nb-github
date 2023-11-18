interface IUser {
  login: string,
  id: number,
  avatar_url: string,
  type: string
}
interface IGithub {
  github: {
    data: number
    users: IUser[]
  }
}

export type { IUser, IGithub }