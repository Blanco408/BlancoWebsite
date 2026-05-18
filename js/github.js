(function () {
    'use strict';

    var username = 'Blanco408';
    var status = document.getElementById('github-status');
    var list = document.getElementById('github-repos');

    if (!status || !list) return;

    // Show loading state
    status.textContent = 'Loading repositories…';

    fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=6')
        .then(function (res) {
            if (!res.ok) throw new Error('GitHub API request failed');
            return res.json();
        })
        .then(function (repos) {
            status.textContent = '';

            if (repos.length === 0) {
                status.textContent = 'No public repositories found.';
                return;
            }

            repos.forEach(function (repo) {
                var li = document.createElement('li');

                var article = document.createElement('article');
                article.className = 'project-card';

                var type = document.createElement('span');
                type.className = 'project-type';
                type.textContent = repo.language || 'Repository';

                var title = document.createElement('h3');
                var link = document.createElement('a');
                link.href = repo.html_url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = repo.name;
                title.appendChild(link);

                var desc = document.createElement('p');
                desc.textContent = repo.description || 'No description provided.';

                var meta = document.createElement('ul');
                meta.className = 'project-stack';
                meta.setAttribute('aria-label', 'Repository details');

                var stars = document.createElement('li');
                stars.textContent = '★ ' + repo.stargazers_count;

                var updated = document.createElement('li');
                var date = new Date(repo.updated_at);
                updated.textContent = 'Updated ' + date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

                meta.appendChild(stars);
                meta.appendChild(updated);

                article.appendChild(type);
                article.appendChild(title);
                article.appendChild(desc);
                article.appendChild(meta);
                li.appendChild(article);
                list.appendChild(li);
            });
        })
        .catch(function (err) {
            status.textContent = 'Could not load repositories. Visit github.com/Blanco408 directly.';
            console.error(err);
        });

})();