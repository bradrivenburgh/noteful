import FolderPanel from './components/FolderPanel';
import MainPanel from './components/MainPanel';

export const routes = [
  {
    path: "/",
    exact: true,
    folderPanel: FolderPanel,
    mainPanel: MainPanel
  },
  {
    path: "/folders/:folderId",
    folderPanel: FolderPanel,
    mainPanel: MainPanel
  },
  {
    path: "/notes/:noteId",
    folderPanel: FolderPanel,
    mainPanel: MainPanel
  },  
]