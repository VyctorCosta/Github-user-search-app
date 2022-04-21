type Theme = {
  general: General;
  header: Header;
  searchBar: SearchBar;
  content: Content;
  name: string;
  iconSrc: string;
};
type General = {
  backgroundBody: string;
  backgroundContent: string;
  backgroundRepoInfo: string;
};
type Header = {
  colorTitle: string;
  colorButton: string;
};
type SearchBar = {
  colorBackground: string;
  colorText: string;
  colorIcon: string;
  colorBackgroundButton: string;
  colorTextButton: string;
};
type Content = {
  colorBackground: string;
  colorUsername: string;
  colorLogin: string;
  colorBio: string;
  colorJoined: string;
  colorNotAvaliable: string;
  backgroundRepo: string;
  titleRepo: string;
  valueRepo: string;
  colorInfo: string;
};

export default Theme;
