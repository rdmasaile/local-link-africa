export const API_URL = "https://volta-rpc.energyweb.org";
// export const contractAddress = "0xe5688fc42BF2d84e9ceBfFB251B01Ed97297029a";
export const contractAddress = "0x5FD6eB55D12E759a21C09eF703fe0CBa1DC9d88D";
export const userProfileABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_fullname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_role",
        type: "string",
      },
    ],
    name: "createProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserProfile",
    outputs: [
      {
        internalType: "string",
        name: "_fullname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_role",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userProfiles",
    outputs: [
      {
        internalType: "string",
        name: "fullname",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
