export enum ArgType {
  TYPE_0 = 0,
  TYPE_1 = 1,
  TYPE_2 = 2,
  STRING_3 = 3,
  TYPE_4 = 4,
  TYPE_5 = 5,
  TYPE_6 = 6,
}

export interface SyscallMetadata {
  name: string;
  args: ArgType[];
  stack_use: boolean[];
}

export const Syscalls: Record<number, SyscallMetadata> = {
  [0]: {
    name: 'SYSCALL_0',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [1]: {
    name: 'SYSCALL_1',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [2]: {
    name: 'SYSCALL_2',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [3]: {
    name: 'SYSCALL_3',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [4]: {
    name: 'SYSCALL_4',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [5]: {
    name: 'SYSCALL_5',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [6]: {
    name: 'SYSCALL_6',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [7]: {
    name: 'SYSCALL_7',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [8]: {
    name: 'SYSCALL_8',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [9]: {
    name: 'SYSCALL_9',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [10]: {
    name: 'SYSCALL_10',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [11]: {
    name: 'SYSCALL_11',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [12]: {
    name: 'SYSCALL_12',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [13]: {
    name: 'SYSCALL_13',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [14]: {
    name: 'SYSCALL_14',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [15]: {
    name: 'SYSCALL_15',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [16]: {
    name: 'SYSCALL_16',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [17]: {
    name: 'SYSCALL_17',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [18]: {
    name: 'SYSCALL_18',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [19]: {
    name: 'SYSCALL_19',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [20]: {
    name: 'SYSCALL_20',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [21]: {
    name: 'SYSCALL_21',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [22]: {
    name: 'SYSCALL_22',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [23]: {
    name: 'SYSCALL_23',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [24]: {
    name: 'SYSCALL_24',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [25]: {
    name: 'SYSCALL_25',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [26]: {
    name: 'SYSCALL_26',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [27]: {
    name: 'SYSCALL_27',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [28]: {
    name: 'SYSCALL_28',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [29]: {
    name: 'SYSCALL_29',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [30]: {
    name: 'SYSCALL_30',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [31]: {
    name: 'SYSCALL_31',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [32]: {
    name: 'SYSCALL_32',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [33]: {
    name: 'SYSCALL_33',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [34]: {
    name: 'SYSCALL_34',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [35]: {
    name: 'SYSCALL_35',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [36]: {
    name: 'SYSCALL_36',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [37]: {
    name: 'SYSCALL_37',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [38]: {
    name: 'SYSCALL_38',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [39]: {
    name: 'SYSCALL_39',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [40]: {
    name: 'SYSCALL_40',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [41]: {
    name: 'SYSCALL_41',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [42]: {
    name: 'SYSCALL_42',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [43]: {
    name: 'SYSCALL_43',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [44]: {
    name: 'SYSCALL_44',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [45]: {
    name: 'SYSCALL_45',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [46]: {
    name: 'SYSCALL_46',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [47]: {
    name: 'SYSCALL_47',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [48]: {
    name: 'SYSCALL_48',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [49]: {
    name: 'SYSCALL_49',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [50]: {
    name: 'SYSCALL_50',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [51]: {
    name: 'SYSCALL_51',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [52]: {
    name: 'SYSCALL_52',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [53]: {
    name: 'SYSCALL_53',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [54]: {
    name: 'SYSCALL_54',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [55]: {
    name: 'SYSCALL_55',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [56]: {
    name: 'SYSCALL_56',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [57]: {
    name: 'SYSCALL_57',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [58]: {
    name: 'SYSCALL_58',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [59]: {
    name: 'SYSCALL_59',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [60]: {
    name: 'SYSCALL_60',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [61]: {
    name: 'SYSCALL_61',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [62]: {
    name: 'SYSCALL_62',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [63]: {
    name: 'SYSCALL_63',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [64]: {
    name: 'SYSCALL_64',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [65]: {
    name: 'SYSCALL_65',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [66]: {
    name: 'SYSCALL_66',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [67]: {
    name: 'SYSCALL_67',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [68]: {
    name: 'SYSCALL_68',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [69]: {
    name: 'SYSCALL_69',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [70]: {
    name: 'SYSCALL_70',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [71]: {
    name: 'SYSCALL_71',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [72]: {
    name: 'SYSCALL_72',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [73]: {
    name: 'SYSCALL_73',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [74]: {
    name: 'SYSCALL_74',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [75]: {
    name: 'SYSCALL_75',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [76]: {
    name: 'SYSCALL_76',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [77]: {
    name: 'SYSCALL_77',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [78]: {
    name: 'SYSCALL_78',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [79]: {
    name: 'SYSCALL_79',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [80]: {
    name: 'SYSCALL_80',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [81]: {
    name: 'SYSCALL_81',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [82]: {
    name: 'SYSCALL_82',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [83]: {
    name: 'SYSCALL_83',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [84]: {
    name: 'SYSCALL_84',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [85]: {
    name: 'SYSCALL_85',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [86]: {
    name: 'SYSCALL_86',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [87]: {
    name: 'SYSCALL_87',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [88]: {
    name: 'SYSCALL_88',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [89]: {
    name: 'SYSCALL_89',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [90]: {
    name: 'SYSCALL_90',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [91]: {
    name: 'SYSCALL_91',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [92]: {
    name: 'SYSCALL_92',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [93]: {
    name: 'SYSCALL_93',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [94]: {
    name: 'SYSCALL_94',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [95]: {
    name: 'SYSCALL_95',
    args: [ArgType.TYPE_0, ArgType.TYPE_6, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0],
    stack_use: [],
  },
  [96]: {
    name: 'SYSCALL_96',
    args: [ArgType.TYPE_0, ArgType.TYPE_5, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [97]: {
    name: 'SYSCALL_97',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [98]: {
    name: 'SYSCALL_98',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [99]: {
    name: 'SYSCALL_99',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [100]: {
    name: 'SYSCALL_100',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [101]: {
    name: 'SYSCALL_101',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [102]: {
    name: 'SYSCALL_102',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [103]: {
    name: 'SYSCALL_103',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [104]: {
    name: 'SYSCALL_104',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [105]: {
    name: 'SYSCALL_105',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [106]: {
    name: 'SYSCALL_106',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [107]: {
    name: 'SYSCALL_107',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [108]: {
    name: 'SYSCALL_108',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [109]: {
    name: 'SYSCALL_109',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [110]: {
    name: 'SYSCALL_110',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [111]: {
    name: 'SYSCALL_111',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [112]: {
    name: 'SYSCALL_112',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [113]: {
    name: 'SYSCALL_113',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [114]: {
    name: 'SYSCALL_114',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [115]: {
    name: 'SYSCALL_115',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [116]: {
    name: 'SYSCALL_116',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [117]: {
    name: 'SYSCALL_117',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [118]: {
    name: 'SYSCALL_118',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [119]: {
    name: 'SYSCALL_119',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [120]: {
    name: 'SYSCALL_120',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [121]: {
    name: 'SYSCALL_121',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [122]: {
    name: 'SYSCALL_122',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [123]: {
    name: 'SYSCALL_123',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [124]: {
    name: 'SYSCALL_124',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [125]: {
    name: 'SYSCALL_125',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [126]: {
    name: 'SYSCALL_126',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [127]: {
    name: 'SYSCALL_127',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [128]: {
    name: 'SYSCALL_128',
    args: [ArgType.TYPE_0, ArgType.TYPE_5, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [129]: {
    name: 'SYSCALL_129',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [130]: {
    name: 'SYSCALL_130',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [131]: {
    name: 'SYSCALL_131',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [132]: {
    name: 'SYSCALL_132',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [133]: {
    name: 'SYSCALL_133',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [134]: {
    name: 'SYSCALL_134',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [135]: {
    name: 'SYSCALL_135',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [136]: {
    name: 'SYSCALL_136',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [137]: {
    name: 'SYSCALL_137',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [138]: {
    name: 'SYSCALL_138',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [139]: {
    name: 'SYSCALL_139',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [140]: {
    name: 'SYSCALL_140',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [141]: {
    name: 'SYSCALL_141',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [142]: {
    name: 'SYSCALL_142',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [143]: {
    name: 'SYSCALL_143',
    args: [ArgType.TYPE_0, ArgType.TYPE_5, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [144]: {
    name: 'SYSCALL_144',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [145]: {
    name: 'SYSCALL_145',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [146]: {
    name: 'SYSCALL_146',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [147]: {
    name: 'SYSCALL_147',
    args: [ArgType.TYPE_0, ArgType.TYPE_6, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0],
    stack_use: [],
  },
  [148]: {
    name: 'SYSCALL_148',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [149]: {
    name: 'SYSCALL_149',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [150]: {
    name: 'SYSCALL_150',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [151]: {
    name: 'SYSCALL_151',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [152]: {
    name: 'SYSCALL_152',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [153]: {
    name: 'SYSCALL_153',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [154]: {
    name: 'SYSCALL_154',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [155]: {
    name: 'SYSCALL_155',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [156]: {
    name: 'SYSCALL_156',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [157]: {
    name: 'SYSCALL_157',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [158]: {
    name: 'SYSCALL_158',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [159]: {
    name: 'SYSCALL_159',
    args: [ArgType.TYPE_0, ArgType.TYPE_5, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [160]: {
    name: 'SYSCALL_160',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [161]: {
    name: 'SYSCALL_161',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [162]: {
    name: 'SYSCALL_162',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [163]: {
    name: 'SYSCALL_163',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [164]: {
    name: 'SYSCALL_164',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [165]: {
    name: 'SYSCALL_165',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [166]: {
    name: 'SYSCALL_166',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [167]: {
    name: 'SYSCALL_167',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [168]: {
    name: 'SYSCALL_168',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [169]: {
    name: 'SYSCALL_169',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [170]: {
    name: 'SYSCALL_170',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [171]: {
    name: 'SYSCALL_171',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [172]: {
    name: 'SYSCALL_172',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [173]: {
    name: 'SYSCALL_173',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [174]: {
    name: 'SYSCALL_174',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [175]: {
    name: 'SYSCALL_175',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [176]: {
    name: 'SYSCALL_176',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [177]: {
    name: 'SYSCALL_177',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [178]: {
    name: 'SYSCALL_178',
    args: [ArgType.TYPE_0, ArgType.TYPE_5, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [179]: {
    name: 'SYSCALL_179',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [180]: {
    name: 'SYSCALL_180',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [181]: {
    name: 'SYSCALL_181',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [182]: {
    name: 'SYSCALL_182',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [183]: {
    name: 'SYSCALL_183',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [184]: {
    name: 'SYSCALL_184',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [185]: {
    name: 'SYSCALL_185',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [186]: {
    name: 'SYSCALL_186',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [187]: {
    name: 'SYSCALL_187',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [188]: {
    name: 'SYSCALL_188',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [189]: {
    name: 'SYSCALL_189',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [190]: {
    name: 'SYSCALL_190',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [191]: {
    name: 'SYSCALL_191',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [192]: {
    name: 'SYSCALL_192',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [193]: {
    name: 'SYSCALL_193',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [194]: {
    name: 'SYSCALL_194',
    args: [ArgType.TYPE_0, ArgType.TYPE_6, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0],
    stack_use: [],
  },
  [195]: {
    name: 'SYSCALL_195',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [196]: {
    name: 'SYSCALL_196',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [197]: {
    name: 'SYSCALL_197',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [198]: {
    name: 'SYSCALL_198',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [199]: {
    name: 'SYSCALL_199',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [200]: {
    name: 'SYSCALL_200',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [201]: {
    name: 'SYSCALL_201',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [202]: {
    name: 'SYSCALL_202',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [203]: {
    name: 'SYSCALL_203',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [204]: {
    name: 'SYSCALL_204',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [205]: {
    name: 'SYSCALL_205',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [206]: {
    name: 'SYSCALL_206',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [207]: {
    name: 'SYSCALL_207',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [208]: {
    name: 'SYSCALL_208',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [209]: {
    name: 'SYSCALL_209',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [210]: {
    name: 'SYSCALL_210',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [211]: {
    name: 'SYSCALL_211',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [212]: {
    name: 'SYSCALL_212',
    args: [ArgType.TYPE_0, ArgType.TYPE_4, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [213]: {
    name: 'SYSCALL_213',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [214]: {
    name: 'SYSCALL_214',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [215]: {
    name: 'SYSCALL_215',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [216]: {
    name: 'SYSCALL_216',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [217]: {
    name: 'SYSCALL_217',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [218]: {
    name: 'SYSCALL_218',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [219]: {
    name: 'SYSCALL_219',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [220]: {
    name: 'SYSCALL_220',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [221]: {
    name: 'SYSCALL_221',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [222]: {
    name: 'SYSCALL_222',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [223]: {
    name: 'SYSCALL_223',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [224]: {
    name: 'SYSCALL_224',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [225]: {
    name: 'SYSCALL_225',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [226]: {
    name: 'SYSCALL_226',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [227]: {
    name: 'SYSCALL_227',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [228]: {
    name: 'SYSCALL_228',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [229]: {
    name: 'SYSCALL_229',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [230]: {
    name: 'SYSCALL_230',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [231]: {
    name: 'SYSCALL_231',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [232]: {
    name: 'SYSCALL_232',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [233]: {
    name: 'SYSCALL_233',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [234]: {
    name: 'SYSCALL_234',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [235]: {
    name: 'SYSCALL_235',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [236]: {
    name: 'SYSCALL_236',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [237]: {
    name: 'SYSCALL_237',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [238]: {
    name: 'SYSCALL_238',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [239]: {
    name: 'SYSCALL_239',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [240]: {
    name: 'SYSCALL_240',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [241]: {
    name: 'SYSCALL_241',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [242]: {
    name: 'SYSCALL_242',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [243]: {
    name: 'SYSCALL_243',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [244]: {
    name: 'SYSCALL_244',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [245]: {
    name: 'SYSCALL_245',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [246]: {
    name: 'SYSCALL_246',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [247]: {
    name: 'SYSCALL_247',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [248]: {
    name: 'SYSCALL_248',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [249]: {
    name: 'SYSCALL_249',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [250]: {
    name: 'SYSCALL_250',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [251]: {
    name: 'SYSCALL_251',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [252]: {
    name: 'SYSCALL_252',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [253]: {
    name: 'SYSCALL_253',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [254]: {
    name: 'SYSCALL_254',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [255]: {
    name: 'SYSCALL_255',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [256]: {
    name: 'SYSCALL_256',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [257]: {
    name: 'SYSCALL_257',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [258]: {
    name: 'SYSCALL_258',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [259]: {
    name: 'SYSCALL_259',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.STRING_3, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [260]: {
    name: 'SYSCALL_260',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [261]: {
    name: 'SYSCALL_261',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [262]: {
    name: 'SYSCALL_262',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.STRING_3, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [263]: {
    name: 'SYSCALL_263',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [264]: {
    name: 'SYSCALL_264',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [265]: {
    name: 'SYSCALL_265',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [266]: {
    name: 'SYSCALL_266',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [267]: {
    name: 'SYSCALL_267',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [268]: {
    name: 'SYSCALL_268',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.STRING_3, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [269]: {
    name: 'SYSCALL_269',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.STRING_3, ArgType.STRING_3, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [270]: {
    name: 'SYSCALL_270',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [271]: {
    name: 'SYSCALL_271',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [272]: {
    name: 'SYSCALL_272',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [273]: {
    name: 'SYSCALL_273',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [274]: {
    name: 'SYSCALL_274',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [275]: {
    name: 'SYSCALL_275',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [276]: {
    name: 'SYSCALL_276',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [277]: {
    name: 'SYSCALL_277',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [278]: {
    name: 'SYSCALL_278',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.STRING_3, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [279]: {
    name: 'SYSCALL_279',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [280]: {
    name: 'SYSCALL_280',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [281]: {
    name: 'SYSCALL_281',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [282]: {
    name: 'SYSCALL_282',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [283]: {
    name: 'SYSCALL_283',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [284]: {
    name: 'SYSCALL_284',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [285]: {
    name: 'SYSCALL_285',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [286]: {
    name: 'SYSCALL_286',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [287]: {
    name: 'SYSCALL_287',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [288]: {
    name: 'SYSCALL_288',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [289]: {
    name: 'SYSCALL_289',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [290]: {
    name: 'SYSCALL_290',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [291]: {
    name: 'SYSCALL_291',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [292]: {
    name: 'SYSCALL_292',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [293]: {
    name: 'SYSCALL_293',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [294]: {
    name: 'SYSCALL_294',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [295]: {
    name: 'SYSCALL_295',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [296]: {
    name: 'SYSCALL_296',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [297]: {
    name: 'SYSCALL_297',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [298]: {
    name: 'SYSCALL_298',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [299]: {
    name: 'SYSCALL_299',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [300]: {
    name: 'SYSCALL_300',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [301]: {
    name: 'SYSCALL_301',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [302]: {
    name: 'SYSCALL_302',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [303]: {
    name: 'SYSCALL_303',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [304]: {
    name: 'SYSCALL_304',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [305]: {
    name: 'SYSCALL_305',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [306]: {
    name: 'SYSCALL_306',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [307]: {
    name: 'SYSCALL_307',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [308]: {
    name: 'SYSCALL_308',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [309]: {
    name: 'SYSCALL_309',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [310]: {
    name: 'SYSCALL_310',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [311]: {
    name: 'SYSCALL_311',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [312]: {
    name: 'SYSCALL_312',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [313]: {
    name: 'SYSCALL_313',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [314]: {
    name: 'SYSCALL_314',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [315]: {
    name: 'SYSCALL_315',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [316]: {
    name: 'SYSCALL_316',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [317]: {
    name: 'SYSCALL_317',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [318]: {
    name: 'SYSCALL_318',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [319]: {
    name: 'SYSCALL_319',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [320]: {
    name: 'SYSCALL_320',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [321]: {
    name: 'SYSCALL_321',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [322]: {
    name: 'SYSCALL_322',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [323]: {
    name: 'SYSCALL_323',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [324]: {
    name: 'SYSCALL_324',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [325]: {
    name: 'SYSCALL_325',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [326]: {
    name: 'SYSCALL_326',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [327]: {
    name: 'SYSCALL_327',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [328]: {
    name: 'SYSCALL_328',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [329]: {
    name: 'SYSCALL_329',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [330]: {
    name: 'SYSCALL_330',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [331]: {
    name: 'SYSCALL_331',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [332]: {
    name: 'SYSCALL_332',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [333]: {
    name: 'SYSCALL_333',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [334]: {
    name: 'SYSCALL_334',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [335]: {
    name: 'SYSCALL_335',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [336]: {
    name: 'SYSCALL_336',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [337]: {
    name: 'SYSCALL_337',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [338]: {
    name: 'SYSCALL_338',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [339]: {
    name: 'SYSCALL_339',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [340]: {
    name: 'SYSCALL_340',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [341]: {
    name: 'SYSCALL_341',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [342]: {
    name: 'SYSCALL_342',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [343]: {
    name: 'SYSCALL_343',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [344]: {
    name: 'SYSCALL_344',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [345]: {
    name: 'SYSCALL_345',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [346]: {
    name: 'SYSCALL_346',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [347]: {
    name: 'SYSCALL_347',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [348]: {
    name: 'SYSCALL_348',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [349]: {
    name: 'SYSCALL_349',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [350]: {
    name: 'SYSCALL_350',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [351]: {
    name: 'SYSCALL_351',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [352]: {
    name: 'SYSCALL_352',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [353]: {
    name: 'SYSCALL_353',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [354]: {
    name: 'SYSCALL_354',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [355]: {
    name: 'SYSCALL_355',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [356]: {
    name: 'SYSCALL_356',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [357]: {
    name: 'SYSCALL_357',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [358]: {
    name: 'SYSCALL_358',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [359]: {
    name: 'SYSCALL_359',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [360]: {
    name: 'SYSCALL_360',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [361]: {
    name: 'SYSCALL_361',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [362]: {
    name: 'SYSCALL_362',
    args: [ArgType.TYPE_0, ArgType.STRING_3, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [363]: {
    name: 'SYSCALL_363',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [364]: {
    name: 'SYSCALL_364',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [365]: {
    name: 'SYSCALL_365',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [366]: {
    name: 'SYSCALL_366',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [367]: {
    name: 'SYSCALL_367',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [368]: {
    name: 'SYSCALL_368',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [369]: {
    name: 'SYSCALL_369',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [370]: {
    name: 'SYSCALL_370',
    args: [ArgType.TYPE_0, ArgType.TYPE_2, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [371]: {
    name: 'SYSCALL_371',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [372]: {
    name: 'SYSCALL_372',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [373]: {
    name: 'SYSCALL_373',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [374]: {
    name: 'SYSCALL_374',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [375]: {
    name: 'SYSCALL_375',
    args: [ArgType.TYPE_0, ArgType.TYPE_5, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [376]: {
    name: 'SYSCALL_376',
    args: [ArgType.TYPE_0, ArgType.TYPE_5, ArgType.TYPE_1, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_2, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [377]: {
    name: 'SYSCALL_377',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [378]: {
    name: 'SYSCALL_378',
    args: [ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
  [379]: {
    name: 'SYSCALL_379',
    args: [ArgType.TYPE_0, ArgType.TYPE_1, ArgType.TYPE_1, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0, ArgType.TYPE_0],
    stack_use: [],
  },
};
