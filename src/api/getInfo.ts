export default async function getInfo(
  url: string,
  setUserInfo: React.Dispatch<React.SetStateAction<any>>
) {
  const response = await fetch(url);
  const responseJson = await response.json();
  setUserInfo(responseJson);
}
