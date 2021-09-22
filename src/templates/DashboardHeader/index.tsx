// src/templates/DashboardHeader/index.tsx

import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";

export const DashboardHeader = () => {
  const styles = useStyles();

  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className={styles.logo}>
          <Logo />
        </div>

        <SearchBar />

        {/*
          新規動画作成のアイコンボタンを追加
        */}
        <IconButton>
          <VideoCallIcon />
        </IconButton>

        {/*
          プロフィールアイコンを追加
        */}
        <IconButton className={styles.profileIcon}>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
