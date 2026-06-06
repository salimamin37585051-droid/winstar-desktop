const {app,BrowserWindow,Menu,shell,dialog}=require('electron');
let win;
app.whenReady().then(()=>{
  win=new BrowserWindow({
    width:1400,height:860,
    title:'Winstar',
    backgroundColor:'#0A0908',
    webPreferences:{nodeIntegration:false,contextIsolation:true}
  });
  win.loadURL('https://winstar-solution-wh65.onrender.com');
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {label:'File',submenu:[
      {label:'Reload',accelerator:'CmdOrCtrl+R',click:()=>win.reload()},
      {label:'Fullscreen',accelerator:'F11',click:()=>win.setFullScreen(!win.isFullScreen())},
      {type:'separator'},
      {label:'Quit',accelerator:'Alt+F4',click:()=>app.quit()}
    ]},
    {label:'Help',submenu:[
      {label:'About',click:()=>dialog.showMessageBox(win,{message:'Winstar v2.0',detail:'winstar.co.ke',buttons:['OK']})}
    ]}
  ]));
});
app.on('window-all-closed',()=>app.quit());
