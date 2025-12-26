export const CONTRACTS = {
  VitrumIdentity: '0xB25c93f98e05a3db58fae281c9226281D2C1078D',
  VitrumVote: '0x310869f0312a0A0c607e2D5BdF57F4a1aaBed1A2',
} as const;

export type ContractName = keyof typeof CONTRACTS;