export const CONTRACTS = {
  VitrumIdentity: '0x965120a559B5b6b249dD70998cc56aBe9723FCc9',
  VitrumVote: '0x5Eb3Ff455862c5C7C80E8AcD8274B31ea7cE7495',
} as const;

export type ContractName = keyof typeof CONTRACTS;