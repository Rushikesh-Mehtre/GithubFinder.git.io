class Github {
  constructor() {
    this.client_id = "5774ffce24b87a33a58b";
    this.client_secret = "4f63bb1079e88f8ae895b383ab5b16f880609468";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page =${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
