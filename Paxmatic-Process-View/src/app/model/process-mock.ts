export class ProcessMock {

  expectedBasicProcess = [
    {
      id: 1,
      name: 'Projekt',
      color: 'red',
      isVisible: 1,
      form: 0,
      position: 2,
      visibleName: 'Projekt',
      order: 1,
      level: 'basic',
<<<<<<< HEAD
      parent: '',
      isBubble: 0
=======
      parent: ' ',
      isStart: 0
>>>>>>> origin/master
    },
    {
      id: 2,
      name: 'Administration',
      color: 'blue',
      isVisible: 1,
      form: 0,
      position: 0,
      visibleName: 'Test2',
      order: 1,
      level: 'basic',
<<<<<<< HEAD
      parent: '',
      isBubble: 0
=======
      parent: ' ',
      isStart: 0
>>>>>>> origin/master
    },
    {
      id: 3,
      name: 'Service',
      color: 'red',
      isVisible: 1,
      form: 0,
      position: 1,
      visibleName: 'Test3',
      order: 1,
      level: 'basic',
<<<<<<< HEAD
      parent: '',
      isBubble: 0
=======
      parent: ' ',
      isStart: 0
>>>>>>> origin/master
    }
];
  expectedSubProcess = [
    {
      id: 4,
      name: 'Reparatur',
      color: 'red',
      isVisible: 1,
      form: 0,
      position: 1,
      visibleName: 'Test3',
      order: 1,
      level: 'sub',
      parent: 'Administration',
      isBubble: 0
    },
    {
      id: 5,
      name: 'Reinigung',
      color: 'red',
      isVisible: 1,
      form: 0,
      position: 1,
      visibleName: 'Test3',
      order: 1,
      level: 'sub',
      parent: 'Administration',
      isBubble: 0
    },
    {
      id: 6,
      name: 'Installation',
      color: 'red',
      isVisible: 1,
      form: 0,
      position: 1,
      visibleName: 'Test3',
      order: 1,
      level: 'sub',
      parent: 'Projekt',
      isBubble: 0
    },
  ];
}
