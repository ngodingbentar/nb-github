interface IUser {
  login: string,
  id: number,
  avatar_url: string,
  type: string
}
interface IGithub {
  github: {
    users: IUser[]
    loading: boolean
    error: string
  }
}

export type { IUser, IGithub }