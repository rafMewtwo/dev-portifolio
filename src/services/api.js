import DevInfo from '../data/devInfo';

export async function getUser() {
  const API = await fetch(`https://api.github.com/users/${DevInfo.uteis.githubUser}`);
  const user = await API.json();
  return user;
}

export async function getRepos() {
  const API = await fetch(`https://api.github.com/users/${DevInfo.uteis.githubUser}/repos`);
  const repos = await API.json();
  return repos;
}

export async function getRepoContent(repo) {
  const API = await fetch(`https://api.github.com/repos/${DevInfo.uteis.githubUser}/${repo}/contents/`);
  const repoContent = await API.json();
  return repoContent;
}

export async function getFileInfo(repo, file) {
  const API = await fetch(`https://api.github.com/repos/${DevInfo.uteis.githubUser}/${repo}/contents/${file}?ref=master`);
  const fileInfo = await API.json();
  return fileInfo;
}
