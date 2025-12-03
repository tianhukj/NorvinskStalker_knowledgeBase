export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://avatars.githubusercontent.com/u/148983604?s=400&u=42e68d5de19c21b7bc245717fc7a883f341a4521&v=4`

export const creators: Creator[] = [
  {
    name: '天互科技',
    avatar: '',
    username: 'Tianhu Technology',
    title: '科技的奥秘',
    desc: '科技',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/tianhukj' },
    ],
    nameAliases: ['Tianhu', '天互', 'Samuel'],
    emailAliases: ['tianhukj@outlook.com'],
  }
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
