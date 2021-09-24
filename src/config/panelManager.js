const panelManager = (editor) => {
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';

  const cmdClear = 'core:canvas-clear';
  const deviceDesktop = 'set-device-desktop';
  const deviceTablet = 'set-device-tablet';
  const deviceMobile = 'set-device-mobile';
  // const cmdImport = 'gjs-open-import-webpage';

  editor.Panels.getPanels().reset([
    {
      id: 'devices',
      buttons: [
        {
          id: deviceDesktop,
          context: deviceDesktop,
          command: (e) => e.setDevice('Desktop'),
          className: 'fa fa-desktop',
          active: 1,
        },
        {
          id: deviceTablet,
          context: deviceTablet,
          command: (e) => e.setDevice('Tablet'),
          className: 'fa fa-tablet',
        },
        {
          id: deviceMobile,
          context: deviceMobile,
          command: (e) => e.setDevice('Mobile portrait'),
          className: 'fa fa-mobile',
        },
      ],
    },
    {
      id: 'options',
      buttons: [
        {
          id: swv,
          command: swv,
          context: swv,
          className: 'fa fa-square-o',
          active: true,
        },
        {
          id: prv,
          context: prv,
          command: (e) => e.runCommand(prv),
          className: 'fa fa-eye',
        },
        {
          id: ful,
          command: ful,
          context: ful,
          className: 'fa fa-arrows-alt',
        },
        {
          id: expt,
          className: 'fa fa-code',
          command: (e) => e.runCommand(expt),
        },
        {
          id: 'undo',
          className: 'fa fa-undo',
          command: (e) => e.runCommand('core:undo'),
        },
        {
          id: 'redo',
          className: 'fa fa-repeat',
          command: (e) => e.runCommand('core:redo'),
        },
        // {
        //   id: cmdImport,
        //   className: 'fa fa-download',
        //   command: (e) => e.runCommand(cmdImport),
        // },
        {
          id: cmdClear,
          className: 'fa fa-trash',
          command: (e) => e.runCommand(cmdClear),
        },
        {
          id: 'help',
          className: 'fa fa-info',
          // command: (e) => e.runCommand(cmdClear),
        },
      ],
    },
    {
      id: 'views',
      buttons: [
        {
          id: obl,
          command: obl,
          active: true,
          className: 'fa fa-th-large',
        },
        {
          id: osm,
          command: osm,
          className: 'fa fa-paint-brush',
        },
        {
          id: otm,
          command: otm,
          className: 'fa fa-cog',
        },
        {
          id: ola,
          command: ola,
          className: 'fa fa-bars',
        },
      ],
    },
  ]);
};

export default panelManager;
