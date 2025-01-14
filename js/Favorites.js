import { GithubUser } from "./GithubFav.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

        this.tbody = this.root.querySelector('table tbody')

        this.load()
    }

    load() {
        this.entries = [
            {
              login: 'erikpablo',
              name: 'Erik Pablo', 
              public_repos: '28',
              followers: '5',
            },
            {
              login: 'alexalannunes',
              name: 'Alex Alan', 
              public_repos: '28',
              followers: '5',
            }
      ]
    }
}



export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }


    update() {
        this.removeAllTr()
        
        this.entries.forEach( user => {
            const row = this.creatRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user ima').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            this.tbody.append(row)

        })
    }

    creatRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `            
                <td class="user">
                    <img src="https://github.com/erikpablo.png" alt="Imagem de erik">
                    <a target="_blank" href="https://github.com/erikpablo">
                        <p>Erik pablo</p>
                        <span>erikpablo</span>
                    </a>
                </td>
                <td class="repositories">
                    28
                </td>
                <td class="followers">
                     5
                </td>
                <td>
                    <button class="remove">Remover</button>
                </td>
                `

            return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}