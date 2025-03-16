import {
  ProjectCategory,
  ProjectContent,
  ProjectInterface,
  ProjectStatus,
} from '@/lib/types'

const content: ProjectContent = {
  en: {
    tldr: 'ZK Email is a library that allows for anonymous verification of email signatures while masking specific data.',
    description: `ZK Email is a library for anonymous verification of emails while selectively revealing specific data. It allows a prover to demonstrate receipt of an email from a specific sender or domain or the presence of certain text in the subject or body. This can be used for Web 2.0 interoperability, email recovery solutions of smart accounts, anonymous KYC, or to create interesting applications based on anonymity sets.`,
  },
}

export const zkemail: ProjectInterface = {
  id: 'zk-email',
  category: ProjectCategory.APPLICATION,
  projectStatus: ProjectStatus.ACTIVE,
  section: 'collaboration',
  content,
  image: 'zk-email.jpeg',
  name: 'zk-email',
  links: {
    github: 'https://github.com/zkemail',
    twitter: 'https://twitter.com/zkemail',
    website: 'https://zk.email/',
  },
  tags: {
    themes: [],
    types: [],
    keywords: ['email', 'identity', 'anonymity/privacy', 'DKIM', 'signatures'],
    builtWith: ['circom', 'snarkjs', 'halo2'],
  },
}
