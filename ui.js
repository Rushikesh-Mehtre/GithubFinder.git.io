class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
<div class="card card-body mb-3">
<div class="row">
<div class="col-md-3">
<img class="img-fluid mb-2" src="${user.avatar_url}">
<a href="${
      user.html_url
    }" target="_blank" class="btn btn-primary btn-block">View Profile</a>
</div>
<div class="col-md-9">
<span class="badge badge-primary mr-2 mt-2">Public Repos : ${
      user.public_repos
    } </span>
<span class="badge badge-success mr-2 mt-2">Followers : ${
      user.followers
    } </span>
<span class="badge badge-secondary mr-2 mt-2">Public Gists : ${
      user.public_gists
    } </span>
<span class="badge badge-info mr-2 mt-2">Following : ${user.following} </span>
<br><br>
<ul class="list-group  mr-5>
<li class="list-group-item"></li>
<li class="list-group-item">Website : <a href="${user.blog}" target="_blank">${
      user.blog
    } </a>  </li>
<li class="list-group-item">Location : ${user.location}</li>
<li class="list-group-item">Member Since : ${new Date(
      user.created_at
    ).toGMTString()}</li>

</ul>


</div>
</div>

</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
`;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
<div class="card card-body mb-2">
 <div class="row">
 <div class="col-md-6">
 <a href="${repo.html_url}" target="_blank">${repo.name}  </a>

 </div>
<div class="col-md-6">
<span class="badge badge-primary">Stars : ${repo.stargazers_count} </span>


<span class="badge badge-success">Forks : ${repo.forms_count} </span>
</div>
</div>
</div>
`;
    });

    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
