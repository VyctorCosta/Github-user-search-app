import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    general: {
      backgroundBody: string;
      backgroundContent: string;
      backgroundRepoInfo: string;
    };
    header: {
      colorTitle: string;
      colorButton: string;
    };
    searchBar: {
      colorBackground: string;
      colorText: string;
      colorIcon: string;
      colorBackgroundButton: string;
      colorTextButton: string;
    };
    content: {
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
    name: string;
    iconSrc: string;
  }
}
